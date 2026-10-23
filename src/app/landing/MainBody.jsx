import React from 'react'
import rightArrow from '../../assets/right-arrow.svg'
import ProjectCard from '../../components/ProjectCard.jsx'
import './MainBody.css'
import YellowBorder from '../../components/YellowBorder.jsx'


const MainBody = () => {

  const projectList = [
    {
        title :"Uber Clone Application", 
        description:"In this uber clone application created backend of uber.", 
        imgUrl:"https://thumb.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/1920px-Uber_logo_2018.svg.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
        githubLink:"https://github.com/bhushanpatil23"   
    },
    {
      title: "The LinkedIn microservice project",
      description: "A microservice-based implementation of LinkedIn's core features.",
      imgUrl: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/aa/LinkedIn_2021.svg/1920px-LinkedIn_2021.svg.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
      githubLink: "https://github.com/bhushanpatil23"
    },
    {
      title: "AirBnB hotel Booking Clone",
      description: "A clone of the popular AirBnB hotel booking platform.",
      imgUrl: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1920px-Airbnb_Logo_B%C3%A9lo.svg.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
      githubLink: "https://www.airbnb.co.in/"
    }
  ]

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
      <YellowBorder>
        <h2>These are my projects</h2>
      </YellowBorder>
        
        <p>I build high quality projects of all shapes and sizes.</p>
        
        <div className="project-container">
          {projectList.map(project=> <ProjectCard {...project} key= {project.title}/>)}
        </div>

    </section>

  </main>
  )
}

export default MainBody