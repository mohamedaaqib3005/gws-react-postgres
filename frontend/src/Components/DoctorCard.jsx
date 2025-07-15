import React from "react";

function DoctorCard({ doctor, index, handleBook }) {
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="card-container">
      <div className="side-profile">
        <img
          src={`/assets/doctor-${(index % 5) + 1}.jpg`}
          alt={`Doctor ${doctor.full_name}`}
        />
        <ul className="social-icons">
          <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
          <li><a href="#"><i className="fab fa-instagram"></i></a></li>
          <li><a href="#"><i className="fab fa-twitter"></i></a></li>
        </ul>
      </div>

      <div className="details">
        <h2>{doctor.full_name}</h2>
        <p className="specialization">Speciality</p>
        <p className="experience">Gender: {doctor.gender}</p>

        <div className="date-selection">
          <label htmlFor={`appointment-date-${index}`}>Select Date:</label>
          <input
            type="date"
            id={`appointment-date-${index}`}
            defaultValue={today}
          />
        </div>
        {/* date picker */}

        <div className="slot-selection">
          <p>Appointment Slot:</p>
          {doctor.slots.map((s, i) => (
            <label key={s.id}>
              <input
                type="radio"
                name={`slot-${index}`}
                value={s.id}
                defaultChecked={i === 0}
              />
              {s.time}
            </label>
          ))}
        </div>

        <button className="book-btn" onClick={() => handleBook(doctor.id, index)}>
          Book Appointment
        </button>
      </div>
    </div>
  );
}

export default DoctorCard;
