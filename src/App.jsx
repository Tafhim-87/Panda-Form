import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Popup from "./Components/Popup";
import Form2 from "./Form2";
import Form3 from "./Form3";
import Form4 from "./Form4";

const App = () => {
  console.log(import.meta.env.VITE_APPWRITE_URL);
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/popup" element={<Popup />} />
          <Route path="/form2" element={<Form2 />} />
          <Route path="/form3" element={<Form3 />} />
          <Route path="/form4" element={<Form4 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
