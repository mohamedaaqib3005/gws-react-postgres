import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import DoctorCard from "../components/DoctorCard";
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
          if (!grouped[d.doctor_id]) {
            grouped[d.doctor_id] = {
              id: d.doctor_id,
              full_name: d.full_name,
              specialization: d.specialization,
              gender: d.gender,
              fees: d.fees,
              slots: [],
            };
          }

          grouped[d.doctor_id].slots.push({
            id: d.slot_id,
            time: new Date(d.slot_time).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
            raw: d.slot_time,
          });
        });

        setDoctorData(Object.values(grouped));
      } catch (err) {
        setError("Something went wrong.");
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, [speciality]);

  const handleBook = (doctorId, index) => {
    const selectedSlot = document.querySelector(
      `input[name="slot-${index}"]:checked`
    );
    const selectedDate = document.getElementById(
      `appointment-date-${index}`
    ).value;

    if (!selectedSlot || !selectedDate) {
      alert("Please select a slot and date.");
      return;
    }

    const slotId = selectedSlot.value;
    navigate(
      `/confirm?doctor_id=${doctorId}&slot_id=${slotId}&date=${selectedDate}`
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
