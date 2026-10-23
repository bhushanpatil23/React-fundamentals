import React from 'react'
import './project-card.css'
import githubIcon from '../assets/github.svg' 

const ProjectCard = ({title, description, imgUrl, githubLink="https://google.com"}) => {
  return (
    <div className="project-card">
        <div className="img-wrapper">
            <img src= {imgUrl} alt ="" />
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
        <a href = {githubLink} className="img-button">
          <img src = {githubIcon} alt = {"Project Img "+title}/>
          <span>View on Github</span>
        </a>
    </div>
  )
}

export default ProjectCard