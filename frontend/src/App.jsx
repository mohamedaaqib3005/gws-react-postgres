import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import DoctorList from "./pages/doctors-list";

// Dynamically import components
const Home = lazy(() => import("./pages/Home"));
const Specialities = lazy(() => import("./pages/Specialities"));
const DoctorList = lazy(() => import("./pages/doctors-list"));


function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/specialities" element={<Specialities />} />
         <Route path="/doctor-list" element={<DoctorList />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
