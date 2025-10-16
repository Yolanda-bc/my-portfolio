import React from "react";
import { Link } from "react-router-dom";
import myphoto from "../images/myphoto2.png";

export default function Header() {
  return (
    <div className="header">
      <img className="myphoto" src={myphoto} alt="photo" />
      <h1 className="name">YOLANDA BARQUERO CONEJERO</h1>
      <p className="desc">
        Frontend Developer. Especializada en React. Con muchas ganas de
        aprender.
      </p>
      <nav className="nav">
        <Link to="/projects">Proyectos</Link>
        <Link to="/about">Sobre mí</Link>
      </nav>
    </div>
  );
}
