import React, { useEffect, useState } from "react";
import "../styles/appointment.css";

const AppointmentPage = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        console.log("Fetching appointments...");
        const response = await fetch("http://localhost:5000/api/appointments/me", {
          method: "GET",
          credentials: "include",
        });

        console.log("Response status:", response.status);
        const contentType = response.headers.get("content-type");
        console.log("Response Content-Type:", contentType);

        if (!response.ok) {
          throw new Error(`Failed: ${response.status}`);
        }

        const data = await response.json();
        console.log("Fetched appointments data:", data);
        setAppointments(data);
      } catch (err) {
        console.error("Failed to fetch appointments:", err);
        setError("Failed to load appointments.");
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

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
            <li><strong>Gender:</strong> Male</li>
            <li><strong>Date of Birth:</strong> 01/15/1998</li>
            <li><strong>Email:</strong> ✉️ leo@gmail.com</li>
            <li><strong>Phone:</strong> 📱 +012 (345) 6789</li>
            <li><strong>Address:</strong> 📍 205 Main Street, USA</li>
          </ul>

          <div className="secure-info">
            <label htmlFor="password" className="secure-label">Password:</label>
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

          {loading ? (
            <p>Loading appointments...</p>
          ) : error ? (
            <p className="error-message">{error}</p>
          ) : appointments.length === 0 ? (
            <p>No appointments found.</p>
          ) : (
            appointments.map((appointment) => (
              <div className="appointment-card" key={appointment.appointment_id}>
                <div className="appointment-info">
                  <table>
                    <tbody>
                      <tr>
                        <td><strong>Doctor Name:</strong></td>
                        <td>{appointment.doctor_name}</td>
                      </tr>
                      <tr>
                        <td><strong>Patient Name:</strong></td>
                        <td>{appointment.patient_name}</td>
                      </tr>
                      <tr>
                        <td><strong>Slot Time:</strong></td>
                        <td>
                          {new Date(appointment.slot_time).toLocaleString(undefined, {
                            dateStyle: "medium",
                            timeStyle: "short",
                          })}
                        </td>
                      </tr>
                      <tr>
                        <td><strong>Duration:</strong></td>
                        <td>{appointment.duration} minutes</td>
                      </tr>
                      <tr>
                        <td><strong>Status:</strong></td>
                        <td>
                          <span className={`status-badge ${appointment.status.toLowerCase()}`}>
                            {appointment.status}
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
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
                  <span className="slot-time">
                    {new Date(appointment.slot_time).toLocaleString(undefined, {
                      dateStyle: "long",
                      timeStyle: "short",
                    })}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
};

export default AppointmentPage;
