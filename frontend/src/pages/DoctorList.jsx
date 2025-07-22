import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import DoctorCard from "../Components/DoctorCard";
import "../styles/doctor-list.css";
import { fetchDoctorsBySpeciality } from "../api/doctor-list";

function DoctorList() {
  const [doctorData, setDoctorData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const speciality = searchParams.get("speciality");

  useEffect(() => {


    if (!speciality) {
      setError("Speciality is missing from the URL.");
      setLoading(false);
      return;
    }

    const fetchDoctors = async () => {
      const startTime = new Date("2024-01-01").toISOString();
      const endTime = new Date("2026-01-01").toISOString();


      try {
        const data = await fetchDoctorsBySpeciality(
          speciality,
          startTime,
          endTime
        );

        if (!data || data.length === 0) {
          setError("No doctors found for this speciality.");
          return;
        }

        const grouped = {};
        data.forEach((d) => {
          const slotDate = new Date(d.slot_time);
          const formattedDate = slotDate.toISOString().split("T")[0];

          if (!grouped[d.doctor_id]) {
            grouped[d.doctor_id] = {
              id: d.doctor_id,
              full_name: d.full_name,
              specialization: d.specialization,
              gender: d.gender,
              fees: d.fees,
              slots: [],
              availableDates: new Set(),

            };
          }
          grouped[d.doctor_id].availableDates.add(formattedDate);


          grouped[d.doctor_id].slots.push({
            id: d.slot_id,
            time: slotDate.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
            raw: d.slot_time,
            date: formattedDate,

          });
        });

        Object.values(grouped).forEach(doc => {
          doc.availableDates = Array.from(doc.availableDates);
        });

        console.log(Object.values(grouped));



        setDoctorData(Object.values(grouped));
      } catch (err) {
        setError("Something went wrong.");
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, [speciality]);

  const handleBook = (doctorId, slotId, date) => {
    if (!slotId || !date) {
      alert("Please select a slot and date.");
      return;
    }

    navigate(
      `/confirm?doctor_id=${doctorId}&slot_id=${slotId}&date=${date}`
    );
  };


  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <main>
      {doctorData.map((doc, i) => (
        <DoctorCard key={doc.id} doctor={doc} index={i} handleBook={handleBook} />
      ))}
    </main>
  );
}

export default DoctorList;