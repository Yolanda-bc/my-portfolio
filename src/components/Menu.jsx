import React from "react";
import { Link } from "react-router-dom";
import "../styles/_menu.scss";

export default function Menu() {
  return (
    <div className="menu">
      <nav className="home">
        <Link to="/">Inicio</Link>
      </nav>
    </div>
  );
}
