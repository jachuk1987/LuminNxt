import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Location from "./pages/Location";
import Menu from "./pages/Menu";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="location" element={<Location />} />
          <Route path="menu" element={<Menu />} />
          {/* <Route path="contact" element={<Contact />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
