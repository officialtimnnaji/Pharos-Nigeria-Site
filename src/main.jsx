import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Community from "./pages/Community";
import Events from "./pages/Events";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // 👈 Add this line
import Members from "./pages/Members";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/members" element={<Members />} />

        <Route path="/" element={<Home />} />
        <Route path="/community" element={<Community />} />
        <Route path="/events" element={<Events />} />
      </Routes>
      <Footer /> {/* 👈 Add this just below Routes */}
    </BrowserRouter>
  </React.StrictMode>
);
