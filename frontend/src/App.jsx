import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Dynamically import components
const Home = lazy(() => import("./pages/Home"));
const Specialities = lazy(() => import("./pages/Specialities"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/specialities" element={<Specialities />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
