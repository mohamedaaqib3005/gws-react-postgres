import React from "react";


function HomeHeader({ setShowLogin }) {

  return (
    <header>
      <h1 className="logo">GWS</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li>
            <button
              onClick={() => setShowLogin(true)}
              className="button-primary"
            >
              Login
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );


}
export default HomeHeader;