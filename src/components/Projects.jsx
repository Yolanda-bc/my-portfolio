import React from "react";
import photomarried from "../images/married.png";
import photoanime from "../images/anime.png";
import photoharrypotter from "../images/harry-potter.png";
import photoprojects from "../images/projects.png";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Project Married",
      description:
        "Aplicación web desplegada en Vercel.Realizada con React y con una nube en Cloudinary.",
      image: photomarried, // aquí puedes poner una captura de tu proyecto en lugar de 'projects.png'
      link: "https://project-married-e4ej.vercel.app/",
    },
    {
      id: 2,
      title: "Project anime",
      description:
        "Aplicación web simple desarrollada en JavaScript Vanilla que permite buscar series de anime usando la API pública de Jikan, ver los resultados en pantalla y agregar tus animes favoritos a una lista persistente utilizando LocalStorage. .",
      image: photoanime, // aquí puedes poner una captura de tu proyecto en lugar de 'projects.png'
      link: "https://yolanda-bc.github.io/modulo-2-evaluacion-final-Yolanda-bc/",
    },
    {
      id: 3,
      title: "Project harry potter",
      description:
        "Aplicación web desarrollada en React que permite buscar personajes de Harry Potter usando la API de su página oficial. Puedes hacer la busqueda tanto por el nombre del personaje como por la casa a la que pertenezcan.",
      image: photoharrypotter, // aquí puedes poner una captura de tu proyecto en lugar de 'projects.png'
      link: "http://beta.adalab.es/modulo-3-evaluacion-final-Yolanda-bc/",
    },
    // Aquí podrás añadir más proyectos después
  ];

  return (
    <div className="section-projects">
      <img className="photoprojects" src={photoprojects} alt="foto bombilla" />
      <h2 className="projects-title">Proyectos Destacados</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <img
              src={project.image}
              alt={project.title}
              className="project-img"
            />

            <p>{project.description}</p>
            <a
              className="look"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver proyecto
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
