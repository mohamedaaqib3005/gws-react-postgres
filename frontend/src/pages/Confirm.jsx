import React from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import "../styles/confirmation.css";

export default function Confirm() {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const doctorId = params.get("doctor_id");
  const slotId = params.get("slot_id");
  const date = params.get("date");

  const handleConfirmAppointment = async () => {
    console.log({ doctorId, slotId, date });

    try {
      const response = await fetch("http://localhost:5000/api/appointments/me", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          slot: slotId,
          doctorId,
          date
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Appointment confirmed!");
        navigate("/appointments");
      } else {
        console.error("Error: ", data);
        alert(data.error || "Failed to confirm appointment");
      }
    } catch (err) {
      console.error("Network error:", err);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="confirmation-container">
      <div className="header">
        <h1>Appointment Confirmation</h1>
        <p>This appointment is <strong>guaranteed</strong> by GWS</p>
      </div>

      <div className="container">
        <div className="greeting">
          <p>Your selection:</p>
        </div>

        <table>
          <tbody>
            <tr>
              <td>Doctor ID</td>
              <td>{doctorId}</td>
            </tr>
            <tr>
              <td>Slot ID</td>
              <td>{slotId}</td>
            </tr>
            <tr>
              <td>Date</td>
              <td>{date}</td>
            </tr>
          </tbody>
        </table>

        <div className="buttons">
          <button onClick={() => navigate(-1)}>Back</button>
          <button onClick={() => alert("Reschedule flow…")}>
            Reschedule
          </button>
          <button onClick={handleConfirmAppointment}>
            Make Payment
          </button>
        </div>

        <div className="footer">
          Manage your appointments better by visiting{" "}
          <a href="/appointments">My Appointments</a>
        </div>
      </div>
    </div>
  );
}
