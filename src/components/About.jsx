import React from "react";

export default function About() {
  return (
    <div>
      <h2 className="about">SOBRE MÍ</h2>
      <p className="parrafo">
        Soy una desarrolladora frontend con enfoque en la creación de interfaces
        limpias, accesibles y rápidas. Me encanta trabajar con React, mejorar la
        experiencia del usuario y seguir aprendiendo cada día. Soy una persona
        muy curiosa y me apasiona probar cosas nuevas.
      </p>
      <a
        href="/CV_Yolanda.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Ver mi CV
      </a>
    </div>
  );
}
