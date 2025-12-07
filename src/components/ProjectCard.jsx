import React from 'react';

export default function ProjectCard({project}){
  return (
    <article className="project-card">
      <h3>{project.title}</h3>
      <img 
        src={project.image} 
        alt={project.title} 
        className="project-image"
      />
      <p>Technologies: {project.tech.join(', ')}</p>
      <p>{project.description}</p>
      {project.link && <a href={project.link} target="_blank" rel="noreferrer">Go to project</a>}
    </article>
  );
}
