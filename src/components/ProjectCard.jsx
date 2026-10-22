import React from 'react'
import './project-card.css'
import githubIcon from '../assets/github.svg' 

const ProjectCard = () => {
  return (
    <div className="project-card">
        <div className="img-wrapper">
            <img src= "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/500px-Uber_logo_2018.svg.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail" alt ="" />
        </div>
        <h3>Uber Clone Application</h3>
        <p>In this uber clone application created backend of uber.</p>
        <a href = "#" className="img-button">
          <img src = {githubIcon} alt = "Github Icon"/>
          <span>View on Github</span>
        </a>
    </div>
  )
}

export default ProjectCard