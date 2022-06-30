import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

const title = "My Simple ";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home title={title} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
