import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/specialities.css";


import cardiology from "../assets/cardiology.jpg";
import brain from "../assets/brain.jpeg";
import eye from "../assets/eye.jpeg";

// function getCookie(name) {
//   return document.cookie
//     .split("; ")
//     .find(row => row.startsWith(name + "="))
//     ?.split("=")[1] || null;
// }

export default function Specialities() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("User");

  const logout = async () => {
    try {
      await fetch("http://localhost:5000/api/sessions", {
        method: "DELETE",
        credentials: "include",
      });

      // document.cookie = "userName=; path=/; max-age=0";

      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  useEffect(() => {
    const checkSession = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/sessions", {
          method: "GET",
          credentials: "include",
        });

        if (res.status === 200) {
          const { user } = await res.json();
          setUserName(user.userName);
        } else {
          navigate("/");
        }
      } catch (error) {
        navigate("/");
      }
    };
    checkSession();
  }, [navigate]);

  // useEffect(() => {
  //   const name = getCookie("userName");
  //   // 
  //   if (name) {
  //     setUserName(decodeURIComponent(name));
  //   } else {
  //     navigate("/");
  //   }
  // }, [navigate]);

  const specialties = [
    { name: "Cardiology", img: cardiology },
    { name: "Neurology", img: brain },
    { name: "Eye Care", img: eye },
  ];


  return (
    <>
      <header id="user-header">
        {/* use header every where */}
        {/* extract into component */}
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
