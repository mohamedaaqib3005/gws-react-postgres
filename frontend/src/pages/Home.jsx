import { useEffect, useState } from "react";
import "../styles/home.css";
import { useNavigate } from "react-router-dom";
import HomeHeader from "../Components/HomeHeader";
import DatePicker from "../Components/DatePicker";
import { registerPatient, loginPatient } from "../api/request";
import InputField from "../Components/InputField";
import GenderField from "../Components/GenderField";



function Home() {

  //Registration
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState(new Date());
  const [registrationStatus, setRegistrationStatus] = useState("");

  //Login
  const [showLogin, setShowLogin] = useState(false);
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  const navigate = useNavigate();


  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    const data = {
      fullName,
      userName,
      password,
      dob,
      gender,
    };

    try {
      await registerPatient(data);
      setRegistrationStatus("Registration successful!");
    } catch (err) {
      setRegistrationStatus("Registration failed: " + err.message);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await loginPatient({ userName: loginUsername, password: loginPassword });
      setLoginStatus("Login successful!");
      setTimeout(() => {
        navigate("/specialities");
      }, 1000);
    } catch (err) {
      setLoginStatus("Login failed: " + err.message);
    }
  };

  return (
    <div>
      <HomeHeader setShowLogin={setShowLogin} />


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
            <form onSubmit={handleRegisterSubmit}>
              <h2>Register now to avail a free appointment</h2>
              <InputField
                id="fullName"
                label="Enter your full name"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />


              <InputField
                id="userName"
                label="Username"
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />

              <GenderField />
              <InputField
                id="dob"
                label="Date of Birth"
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />


              <InputField
                id="registerPassword"
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button type="submit" className="button-primary">Submit</button>
            </form>
            <div style={{ color: registrationStatus.includes("failed") ? "red" : "green" }}>
              {registrationStatus}
            </div>

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
                <form onSubmit={handleLogin}>
                  <h2>Login</h2>
                  <InputField
                    id="loginUsername"
                    label="Username"
                    type="text"
                    value={loginUsername}
                    onChange={(e) => setLoginUsername(e.target.value)}
                    required
                  />

                  <InputField
                    id="loginPassword"
                    label="Password"
                    type="password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    required
                  />

                  <button type="submit">Login</button>
                </form>

                <div style={{ color: loginStatus.includes("failed") ? "red" : "green" }}>
                  {loginStatus}
                </div>

                {/* <div id="loginStatus"></div> */}
              </dialog>
            )}

            {/* <div id="registrationStatus"></div> */}
          </div>
        </section>
      </main>

    </div>
  );
}

export default Home;
