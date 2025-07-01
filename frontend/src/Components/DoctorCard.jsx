// DoctorCard.jsx
import React from "react";

function DoctorCard({ doctor, index }) {
  return (
    <div className="card-container">
      <div className="side-profile">
        <img src={doctor.image} alt={`Doctor ${doctor.id}`} />
        <ul className="social-icons">
          <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
          <li><a href="#"><i className="fab fa-instagram"></i></a></li>
          <li><a href="#"><i className="fab fa-twitter"></i></a></li>
        </ul>
      </div>

      <div className="details">
        <h2>{doctor.id}</h2>
        <p className="specialization">Surgeon</p>
        <p className="experience">20 years experience overall</p>

        <div className="date-selection">
          <label htmlFor={`appointment-date-${index}`}>Select Date:</label>
          <input type="date" id={`appointment-date-${index}`} name="appointment-date" />
        </div>

        <div className="slot-selection">
          <p>Appointment Slot:</p>
          <label><input type="radio" name={`slot-${index}`} value="10:00 AM" /> 10:00 AM</label>
          <label><input type="radio" name={`slot-${index}`} value="11:00 AM" /> 11:00 AM</label>
          <label><input type="radio" name={`slot-${index}`} value="12:00 PM" /> 12:00 PM</label>
        </div>

        <button className="book-btn button-primary">Book Appointment</button>
      </div>
    </div>
  );
}

export default DoctorCard;
