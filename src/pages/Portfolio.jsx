import React from 'react';
import ProjectCard from '../components/ProjectCard';

const SAMPLE_PROJECTS = [
  {
    title: 'Web X',
    tech: ['React','Vite','CSS'],
    description: 'Page with sections: about, services & contact.',
    link: '#'
  },
  {
    title: 'App PWA Y',
    tech: ['React','Service Worker'],
    description: 'App to do tasks offline.',
    link: '#'
  },
  {
    title: 'Project3',
    tech: ['React','Vite','CSS'],
    description: 'Innovation at its best',
    link: '#'
  },
  {
    title: 'Web Musk',
    tech: ['React','CSS'],
    description: 'Ego rules the world.',
    link: '#'
  },
  {
    title: 'Proyecto Spain',
    tech: ['React','Vite'],
    description: 'Visita nuestra web internacional.',
    link: '#'
  },
  {
    title: 'Web Y',
    tech: ['React','Service Worker'],
    description: 'Anything you desire!',
    link: '#'
  },
];

export default function Portfolio(){
  return (
    <section>
      <article className='main-portfolio'>
      <h2>Portfolio</h2>
      <p>Take a look at these projects</p>
      {SAMPLE_PROJECTS.map((p, i) => <ProjectCard key={i} project={p} />)}
      </article>
    </section>
  );
}
