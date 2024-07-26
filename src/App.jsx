import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Love from "./components/Love";
import Perfect from "./components/Perfect";
import Smile from "./components/Smile";
import Adorable from "./components/Adorable";
import "./style/Timer.css";
import Celebration from "./components/Celebration";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/love" element={<Love />} />
        <Route path="/perfect" element={<Perfect />} />
        <Route path="/smile" element={<Smile />} />
        <Route path="/adorable" element={<Adorable />} />
        <Route path="/celebrate" element={<Celebration />} />
      </Routes>
    </Router>
  );
}

export default App;
