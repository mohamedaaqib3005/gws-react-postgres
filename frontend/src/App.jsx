import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const Specialities = lazy(() => import("./pages/Specialities"));
const DoctorList = lazy(() => import("./pages/DoctorList"));
const Confirm = lazy(() => import("./pages/Confirm"));
const Appointments = lazy(() => import("./pages/Appointments")); 

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/specialities" element={<Specialities />} />
          <Route path="/doctor-list" element={<DoctorList />} />
          <Route path="/confirm" element={<Confirm />} />
          <Route path="/appointments" element={<Appointments />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
