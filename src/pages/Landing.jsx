import React from 'react';
import { Link } from 'react-router-dom';
import { FiFile } from "react-icons/fi";

export default function Landing() {
  return (
    <section className="landing-container">
      <h2>Welcome! My name is Laura</h2>      
      <img 
        src="/images/perfil.png" 
        alt="Perfil de Laura" 
        className="landing-image"
      />
      
      <p>I am a frontend developer and member of DigitalEvolution S.A
      <br />I enjoy creating clean, accessible, and responsive interfaces using React.</p>
      <p>Skills: </p>
      <ul class="tech-icons">        
        <i class="devicon-html5-plain colored"></i>
        <i class="devicon-css3-plain colored"></i>
        <i class="devicon-javascript-plain colored"></i>
        <i class="devicon-bootstrap-plain colored"></i>
        <i class="devicon-java-plain colored"></i>
        <i class="devicon-php-plain colored"></i>
        <i class="devicon-laravel-plain colored"></i>
        <i class="devicon-react-original colored"></i>
        <i class="devicon-mysql-plain colored"></i>
        <i class="devicon-git-plain colored"></i>        
      </ul>
      <p>
        <Link to="/portfolio" className="portfolio-link">
          See my portfolio <FiFile style={{ verticalAlign: 'middle', marginLeft: '5px', color: "#ee00be" }} />
        </Link>
      </p>
    </section>
  );
}
