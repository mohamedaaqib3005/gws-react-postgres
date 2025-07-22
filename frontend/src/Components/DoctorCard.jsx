import React, { useState, useEffect } from "react";
import DoctorCalendar from "./DoctorCalendar.jsx";
import doctorImage from "../assets/doctor-2.jpg"; 


function DoctorCard({ doctor, index, handleBook }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [filteredSlots, setFilteredSlots] = useState([]);

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    const selectedDateStr = formatDate(selectedDate);
    const matchingSlots = doctor.slots.filter(
      (slot) => slot.date === selectedDateStr
    );
    setFilteredSlots(matchingSlots);
  }, [selectedDate, doctor.slots]);

  const selectedDateStr = formatDate(selectedDate);

  console.log("Selected Date:", selectedDateStr);
  console.log("Filtered Slots:", filteredSlots);

  return (
    <div className="doctor-card">
      <div className="side-profile">
<img src={doctorImage} alt="Doctor 2" />

        <h2>{doctor.full_name}</h2>
      </div>

      <div className="calendar-section">
        <h3>Select a Date</h3>
        <DoctorCalendar
          availableDates={doctor.availableDates}
          selectedDate={selectedDate}
          onChange={setSelectedDate}
        />
      </div>

      <div className="slots-section">
        <h3>Available Slots</h3>
        <div className="slots-placeholder">
          {filteredSlots.length > 0 ? (
            filteredSlots.map((slot) => (
              <button
                key={slot.id}
                className="slot-btn"
                onClick={() =>
                  handleBook(doctor.id, slot.id, selectedDateStr)
                }
              >
                {slot.time}
              </button>
            ))
          ) : (
            <p>No slots available on selected date</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default DoctorCard;
