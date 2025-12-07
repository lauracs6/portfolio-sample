import React from 'react';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects'

export default function Portfolio(){
  return (
    <section>
      <article className='main-portfolio'>
      <h2>Portfolio</h2>
      <p>Take a look at these projects</p>
      {projects.map((p, i) => <ProjectCard key={i} project={p} />)}
      </article>
    </section>
  );
}
