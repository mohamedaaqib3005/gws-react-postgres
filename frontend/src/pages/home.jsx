                                                                                                                                                                      // src/pages/Home.jsx
import { useState } from "react";
import "../styles/home.css";

function Home() {
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    import("../styles/home.css");
  }, []);
  
  return (
    <div>
      <header>
        <h1 className="logo">GWS</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><button onClick={() => setShowLogin(true)} className="button-primary">Login</button></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1>Get Well Soon Hospitals</h1>
          <div className="description">
            GWS is always looking to make things easier for you. Our aim is to
            provide our customers with the best medical facilities, constant care,
            and reliable support. If you would like to get in touch with a doctor
            from a specific department, would like some specific information about
            the services we provide, or just have a question for us, please fill
            up the Form given below and we will get back to you.
          </div>
        </section>

        <section>
          <div className="form-container">
            <form id="registerForm">
              <h2>Register now to avail a free appointment</h2>
              <label htmlFor="fullName">
                Fill in your full name
                <input type="text" name="full-name" id="fullName" />
              </label>
              <label htmlFor="userName">
                Username
                <input type="text" name="username" id="userName" />
              </label>
              <label>
                Gender
                <div className="gender-options">
                  <input type="radio" name="gender" value="male" id="male" />
                  <label htmlFor="male">Male</label>
                  <input type="radio" name="gender" value="female" id="female" />
                  <label htmlFor="female">Female</label>
                  <input type="radio" name="gender" value="others" id="others" />
                  <label htmlFor="others">Others</label>
                </div>
              </label>
              <label htmlFor="dob">
                Enter your Date of Birth
                <input type="date" name="dob" id="dob" />
              </label>
              <label htmlFor="registerPassword">
                Enter Your Password
                <input type="text" name="password" id="registerPassword" />
              </label>
              <button type="submit" className="button-primary">Submit</button>
            </form>

            {showLogin && (
              <dialog open id="loginModal">
                <button onClick={() => setShowLogin(false)} className="close">&times;</button>
                <form id="loginForm" method="dialog">
                  <h2>Login</h2>
                  <label htmlFor="loginUsername">
                    Username
                    <input type="text" id="loginUsername" name="userName" required />
                  </label>
                  <label htmlFor="loginPassword">
                    Password
                    <input type="password" id="loginPassword" name="password" required />
                  </label>
                  <button type="submit">Login</button>
                </form>
                <div id="loginStatus"></div>
              </dialog>
            )}

            <div>
              <button id="loginLink" className="button-primary" onClick={() => setShowLogin(true)}>Login</button>
            </div>
          </div>
        </section>

        <div id="registrationStatus"></div>
      </main>

      <footer></footer>
    </div>
  );
}

export default Home;

