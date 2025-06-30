import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
// import "../styles/specialities.css";

function Specialities() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("User");

  const logout = () => {
    fetch("http://localhost:5000/api/sessions", {
      method: "DELETE",
      credentials: "include",
    }).then(() => {
      navigate("/");
    });
  };

  useEffect(() => {

    import("../styles/specialities.css");
    const fetchUser = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/users/me", {
          credentials: "include",
        });
        if (res.ok) {
          const data = await res.json();
          setUserName(data.fullName);
        } else {
          navigate("/");
        }
      } catch (err) {
        console.error("Error fetching user", err);
        navigate("/");
      }
    };

    // fetchUser();
  }, [navigate]);

  return (
    <>
      <header id="user-header" style={{ display: "grid" }}>
        <Link to="/">
          <h1 className="logo">GWS</h1>
        </Link>
        <nav>
          <ul>
            <li><span id="user-greeting">Hello, {userName}</span></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/appointments">Appointments</Link></li>
            <li><button onClick={logout}>Logout</button></li>
          </ul>
        </nav>
      </header>

      <main>
        <h2>Consult top doctors for any health concern</h2>
<section className={styles.specialitiesContainer}>
          {[
            { name: "Cardiology", img: "cardiology.jpg" },
            { name: "Neurology", img: "brain.jpeg" },
            { name: "Eye Care", img: "eye.jpeg" },
            { name: "Pediatrics", img: "baby.jpeg" },
            { name: "Fitness", img: "fitness.jpg" },
            { name: "Hair and skin", img: "girl.jpg" },
            { name: "Mental Health", img: "mental.jpeg" },
          ].map((spec, i) => (
            <figure key={i}>
              <a href="#">
                <img src={`/assets/${spec.img}`} alt={spec.name} />
              </a>
              <figcaption>{spec.name}</figcaption>
            </figure>
          ))}
        </section>
      </main>
    </>
  );
}

export default Specialities;
