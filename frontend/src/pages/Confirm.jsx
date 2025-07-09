import React from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import "../styles/confirmation.css";

export default function Confirm() {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const doctorId = params.get("doctor_id");
  const slotId = params.get("slot_id");
  const date = params.get("date");

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
          <button onClick={() => alert("Payment flow…")}>
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
