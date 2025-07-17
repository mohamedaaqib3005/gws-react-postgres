import React from "react";
import { Link, useNavigate } from "react-router-dom";

export async function logout() {

  try {
    await fetch("http://localhost:5000/api/sessions", {
      method: "DELETE",
      credentials: "include",
    });
    navigate("/");
  } catch (error) {
    console.error("Logout failed:", error);
  }
};


function Header() {
  const navigate = useNavigate();
  const userName = localStorage.getItem("userName");

  return (

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
  );
}
export default Header;