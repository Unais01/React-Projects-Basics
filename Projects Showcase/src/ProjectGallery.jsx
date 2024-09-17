import React from "react";
import "./ProjectGallery.css"; // Import the CSS for styling
import projects from "./project.js";

const getLink = (id) => {
  // Find the project by ID
  const project = projects.find((item) => item.id === id);
  
  // Redirect to the project's link if found
  if (project && project.link) {
    window.open(project.link, '_blank'); // Use window.location.href to redirect
  }
};
const ProjectGallery = () => {
  return (
    <div className="project-gallery">
      {projects.map((project) => (
        <div className="project-card" key={project.id}>
          <img
            src={project.image}
            alt={project.name}
            className="project-image"
          />
          <h3 className="project-name">{project.name}</h3>
          <button className='visit-btn' onClick={()=>getLink(project.id) }>Visit</button>
        </div>
      ))}
    </div>
  );
};

export default ProjectGallery;
