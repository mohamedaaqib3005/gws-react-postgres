import React from "react";
import "../styles/confirmation.css"; // Make sure the path is correct

function Confirm() {
    return (
        <div>
            <div className="header">
                <h1>Your appointment is confirmed</h1>
                <p>This appointment is <strong>guaranteed</strong> by GWS</p>
            </div>

            <div className="container">
                <div className="greeting">
                    <p>Hello <strong>Megha Tak</strong>,</p>
                    <p>Thanks for booking an appointment on GWS. Here are the details of your appointment:</p>
                </div>

                <table>
                    <tbody>
                        <tr>
                            <td>Doctor's name</td>
                            <td>Dr. And Publish</td>
                        </tr>
                        <tr>
                            <td>Date</td>
                            <td>June 10, 2017 | 12:40 PM</td>
                        </tr>
                        <tr>
                            <td>Appointment details</td>
                            <td>
                                Lal Eye Clinic<br />
                                <a href="tel:+91********" className="clinic-link">+91 *******</a><br />
                                Tawang
                            </td>
                        </tr>
                        <tr>
                            <td>Appointment ID</td>
                            <td>3083902</td>
                        </tr>
                    </tbody>
                </table>

                <p>
                    If you are unable to make it to the appointment, please cancel or reschedule.
                    It will open this valuable slot for others waiting to visit the doctor.
                </p>

                <div className="buttons">
                    <button>Cancel</button>
                    <button>Reschedule</button>
                    <button>Make Payment</button>
                </div>

                <div className="footer">
                    Manage your appointments better by visiting <a href="#">My Appointments</a>
                </div>
            </div>
        </div>
    );
}

export default Confirm;
