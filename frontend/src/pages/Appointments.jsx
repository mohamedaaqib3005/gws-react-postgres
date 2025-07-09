import React from "react";
import "../styles/appointment.css";

const AppointmentPage = () => {
  return (
    <div className="layout">
      <aside className="profile-sidebar">
        <div className="profile-card">
          <img
            src="../assets/pexels-konrads-photo-32205061.jpg"
            alt="Profile"
            className="profile-img"
          />

          <h3>Leo Das</h3>
          <div className="user-name">Username: LEO</div>

          <ul className="contact-info">
            <li>
              <strong>Gender:</strong> Male
            </li>
            <li>
              <strong>Date of Birth:</strong> 01/15/1998
            </li>
            <li>
              <strong>Email:</strong> ✉️ leo@gmail.com
            </li>
            <li>
              <strong>Phone:</strong> 📱 +012 (345) 6789
            </li>
            <li>
              <strong>Address:</strong> 📍 205 Main Street, USA
            </li>
          </ul>

          <div className="secure-info">
            <label htmlFor="password" className="secure-label">
              Password:
            </label>
            <input
              id="password"
              type="password"
              value="userpassword"
              className="secure-input"
              disabled
            />
          </div>
        </div>
      </aside>

      <main>
        <div className="appointment-container">
          <div className="appointment-header">
            <h2 className="appointment-title">Appointments</h2>

            <div className="header-buttons">
              <button className="new-appointment-btn">New Appointment</button>
              <div className="filter-dropdown">
                <button className="filter-btn">Filter</button>
                <div className="filter-menu">
                  <p>View All Appointments</p>
                  <p>View Only Active Appointments</p>
                </div>
              </div>
            </div>
          </div>

          <div className="appointment-card">
            <div className="appointment-info">
              <h3>Appointment in Atlas Room</h3>
              <div>Atlas Room, Rare Books Building</div>
              <span className="status unconfirmed">Status: Unconfirmed</span>
            </div>
            <div className="appointment-actions">
              <div className="buttons">
                <button className="details btn">Details</button>
                <div className="actions-dropdown">
                  <button className="actions-btn btn">Actions</button>
                  <div className="actions-menu">
                    <div>✏️ Edit Appointment</div>
                    <div>❌ Cancel Appointment</div>
                  </div>
                </div>
              </div>
              <span>April 21, 2023 10:45 AM - 11:15 AM</span>
            </div>
          </div>

          <div className="appointment-card">
            <div className="appointment-info">
              <h3>Appointment in Atlas Room</h3>
              <div>Atlas Room, Rare Books Building</div>
              <span className="status unconfirmed">Status: Unconfirmed</span>
            </div>
            <div className="appointment-actions">
              <div className="buttons">
                <button className="details">Details</button>
                <div className="actions-dropdown">
                  <button className="actions-btn">Actions</button>
                  <div className="actions-menu">
                    <a href="#"><span>✏️ Edit Appointment</span></a>
                    <a href="#"><span>❌ Cancel Appointment</span></a>
                  </div>
                </div>
              </div>
              <span>April 21, 2023 10:45 AM - 11:15 AM</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AppointmentPage;
