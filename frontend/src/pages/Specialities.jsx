import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/specialities.css";
import Header from "../Components/Header";


import cardiology from "../assets/cardiology.jpg";
import brain from "../assets/brain.jpeg";
import eye from "../assets/eye.jpeg";
import useSession from "../hooks/useSession";


// function getCookie(name) {
//   return document.cookie
//     .split("; ")
//     .find(row => row.startsWith(name + "="))
//     ?.split("=")[1] || null;
// }
const specialties = [
  { name: "Cardiology", img: cardiology },
  { name: "Neurology", img: brain },
  { name: "Eye Care", img: eye },
];

export default function Specialities() {
  const navigate = useNavigate();


  const { userName } = useSession();

  // useEffect(() => {
  //   const name = getCookie("userName");
  //   // 
  //   if (name) {
  //     setUserName(decodeURIComponent(name));
  //   } else {
  //     navigate("/");
  //   }
  // }, [navigate]);



  return (
    <>
      <Header userName={userName} />

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
