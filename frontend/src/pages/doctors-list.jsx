import React from "react";
import "../styles/doctors-list.css";
import DoctorCard from "./DoctorCard";

function DoctorList() {
    const doctorData = [
        { id: "DR001", image: "../assets/pexels-konrads-photo-32205061.jpg" },
        { id: "DR002", image: "../assets/pexels-karolina-grabowska-5206931.jpg" },
        { id: "DR003", image: "../assets/pexels-konrads-photo-32254662.jpg" },
        { id: "DR004", image: "../assets/pexels-pavel-danilyuk-5998474.jpg" },
        { id: "DR005", image: "../assets/pexels-shkrabaanthony-6749777.jpg" },
    ];
}

return (
    <main>
        {doctorData.map((doc, i) => (
            <DoctorCard key={i} doctor={doc} index={i} />
        ))}
    </main>
);

export default DoctorList;
