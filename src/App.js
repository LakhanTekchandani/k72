import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Agence from "./Pages/Agence";
import Project from "./Pages/Project";
import Navbar from "./Components/Navigation/Navbar";
import FullPage from "./Components/Navigation/FullPage";

function App() {
  const [showFullPage, setShowFullPage] = useState(false);

  return (
    <div>
      {showFullPage ? (
        // Full screen menu open
        <FullPage setShowFullPage={setShowFullPage} />
      ) : (
        // Normal website
        <>
          <Navbar setShowFullPage={setShowFullPage} />

          <Routes>
            <Route path="/" element={<Home  setShowFullPage={setShowFullPage} />} />
            <Route path="/agence" element={<Agence  setShowFullPage={setShowFullPage} />} />
            <Route path="/projects" element={<Project  setShowFullPage={setShowFullPage} />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;