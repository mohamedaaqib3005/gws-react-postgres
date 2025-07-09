import { useEffect, useState } from "react";
import "../styles/home.css";
import { useNavigate } from "react-router-dom";


function Home() {
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const registerForm = document.getElementById("registerForm");

    const baseUrl = "http://localhost:5000/api";

    const registerPatient = async (data) => {
      try {
        const response = await fetch(`${baseUrl}/patients`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        const result = await response.json();
        if (!response.ok) throw new Error(result.error || "Registration failed");
        return result;
      } catch (err) {
        console.error("Registration error", err.message);
        throw err;
      }
    };

    const handleRegister = async (e) => {
      e.preventDefault();
      const fullName = document.getElementById("fullName").value;
      const userName = document.getElementById("userName").value;
      const dob = document.getElementById("dob").value;
      const password = document.getElementById("registerPassword").value;
      const genderInput = document.querySelector('input[name="gender"]:checked');
      const gender = genderInput ? genderInput.value : "";

      const status = document.getElementById("registrationStatus");

      try {
        await registerPatient({ fullName, userName, dob, password, gender });
        status.innerText = "Registration successful!";
        status.className = "status-message status-success";
      } catch (error) {
        status.innerText = `Registration failed: ${error.message}`;
        status.className = "status-message status-error";
      }
    };

    registerForm?.addEventListener("submit", handleRegister);

    return () => {
      registerForm?.removeEventListener("submit", handleRegister);
    };
  }, []);

  useEffect(() => {
    if (!showLogin) return;

    const loginForm = document.getElementById("loginForm");
    const loginStatus = document.getElementById("loginStatus");

    const loginPatient = async (data) => {
      try {
        const response = await fetch("http://localhost:5000/api/sessions", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify(data),
        });
        const result = await response.json();
        if (!response.ok) throw new Error(result?.error || "Login failed");
        return result;
      } catch (err) {
        console.error("Login error", err.message);
        throw err;
      }
    };

    const handleLogin = async (e) => {
      e.preventDefault();
      const userName = document.getElementById("loginUsername").value;
      const password = document.getElementById("loginPassword").value;

      try {
        await loginPatient({ userName, password });
        document.cookie = `userName=${encodeURIComponent(userName)}; path=/`;

        loginStatus.innerText = "Login successful!";
        loginStatus.className = "status-message status-success";

        setTimeout(() => {
          navigate("/specialities");
        }, 1000);
      } catch (error) {
        loginStatus.innerText = `Login failed: ${error.message}`;
        loginStatus.className = "status-message status-error";
      }
    };

    loginForm?.addEventListener("submit", handleLogin);

    return () => {
      loginForm?.removeEventListener("submit", handleLogin);
    };
  }, [showLogin]);

  return (
    <div>
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
              <label htmlFor="fullName">Full Name<input type="text" id="fullName" /></label>
              <label htmlFor="userName">Username<input type="text" id="userName" /></label>
              <label>Gender
                <div className="gender-options">
                  <input type="radio" name="gender" value="male" id="male" /><label htmlFor="male">Male</label>
                  <input type="radio" name="gender" value="female" id="female" /><label htmlFor="female">Female</label>
                  <input type="radio" name="gender" value="others" id="others" /><label htmlFor="others">Others</label>
                </div>
              </label>
              <label htmlFor="dob">DOB<input type="date" id="dob" /></label>
              <label htmlFor="registerPassword">Password<input type="text" id="registerPassword" /></label>
              <button type="submit" className="button-primary">Submit</button>
            </form>

            <button
              onClick={() => setShowLogin(true)}
              className="button-secondary"
              style={{ marginTop: "1rem" }}
            >
              Already have an account? Login.
            </button>

            {showLogin && (
              <dialog open id="loginModal">
                <button
                  id="closeModal"
                  className="close"
                  onClick={() => setShowLogin(false)}
                >
                  &times;
                </button>
                <form id="loginForm">
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

            <div id="registrationStatus"></div>
          </div>
        </section>
      </main>

      <footer></footer>
    </div>
  );
}

export default Home;
