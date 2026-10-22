import React from 'react'
import rightArrow from '../../assets/right-arrow.svg'
import ProjectCard from '../../components/ProjectCard.jsx'
import './MainBody.css'


const MainBody = () => {
  return (
    <main>
    <h2 className="name-heading">My Name is Bhushan</h2>
    <ol>
      <li>I like React Programming </li>
      <li>I like Vite also, Webpack not so much</li>
      <li>Let's build some react projects together</li>
    </ol>
    <a href = "#" className="hire-me-button">
      <span>Hire Me</span>
      <img src = {rightArrow} alt="Right Arrow"/>
    </a>

    <section className="project-section">
        <h2>These are my projects</h2>
        <p>I build high quality projects of all shapes and sizes.</p>
        
        <div className="project-container">
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
        </div>

    </section>

  </main>
  )
}

export default MainBody