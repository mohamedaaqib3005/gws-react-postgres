import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/specialities.css";


import cardiology from "../assets/cardiology.jpg";
import brain from "../assets/brain.jpeg";
import eye from "../assets/eye.jpeg";

function getCookie(name) {
  return document.cookie
    .split("; ")
    .find(row => row.startsWith(name + "="))
    ?.split("=")[1] || null;
}

export default function Specialities() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("User");

  const logout = () => {
    fetch("http://localhost:5000/api/sessions", {
      method: "DELETE",
      credentials: "include",
    }).then(() => {
      document.cookie = "userName=; path=/; max-age=0";
      navigate("/");
    });
  };

  useEffect(() => {
    const name = getCookie("userName");
    if (name) {
      setUserName(decodeURIComponent(name));
    } else {
      navigate("/");
    }
  }, [navigate]);

  const specialties = [
    { name: "Cardiology", img: cardiology },
    { name: "Neurology", img: brain },
    { name: "Eye Care", img: eye },
  ];


  return (
    <>
      <header id="user-header">
        <Link to="/" className="logo">GWS</Link>
        <nav>
          <ul>
            <li>Hello, {userName}</li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/appointments">Appointments</Link></li>
            <li><button onClick={logout}>Logout</button></li>
          </ul>
        </nav>
      </header>

      <main>
        <h2>Consult top doctors for any health concern</h2>
        <section className="specialities-container">
          {specialties.map((spec) => (
            <figure key={spec.name}>
              <Link to={`/doctor-list?speciality=${encodeURIComponent(spec.name.toLowerCase())}`}>
                <img src={spec.img} alt={spec.name} />

                <figcaption>{spec.name}</figcaption>
              </Link>
            </figure>
          ))}
        </section>
      </main>
    </>
  );
}
