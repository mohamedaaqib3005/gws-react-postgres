import { useEffect, useState } from "react";
import "../styles/home.css";
import { useNavigate } from "react-router-dom";
import HomeHeader from "../Components/HomeHeader";
import DatePicker from "../Components/DatePicker";
import { registerPatient, loginPatient } from "../api/request";




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
              <label htmlFor="fullName">
                Full Name
                <input
                  type="text"
                  id="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </label>

              <label htmlFor="userName">
                Username
                <input
                  type="text"
                  id="userName"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </label>

              <label>
                Gender
                <div className="gender-options">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    id="male"
                    checked={gender === "male"}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <label htmlFor="male">Male</label>

                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    id="female"
                    checked={gender === "female"}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <label htmlFor="female">Female</label>

                  <input
                    type="radio"
                    name="gender"
                    value="others"
                    id="others"
                    checked={gender === "others"}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <label htmlFor="others">Others</label>
                </div>
              </label>

              <label>
                DOB
                <DatePicker selectedDate={dob} setSelectedDate={setDob} />
              </label>

              <label htmlFor="registerPassword">
                Password
                <input
                  type="password"
                  id="registerPassword"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
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
                  <label htmlFor="loginUsername">
                    Username
                    <input
                      type="text"
                      id="loginUsername"
                      value={loginUsername}
                      onChange={(e) => setLoginUsername(e.target.value)}
                      required
                    />
                  </label>

                  <label htmlFor="loginPassword">
                    Password
                    <input
                      type="password"
                      id="loginPassword"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      required
                    />
                  </label>
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
