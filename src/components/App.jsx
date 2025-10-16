import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Projects from "./Projects";
import About from "./About";
import Footer from "./Footer";
import "../styles/App.scss";
import Menu from "./Menu";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/header" element={<Header />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
