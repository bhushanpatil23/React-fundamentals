import rightArrow from '../../assets/right-arrow.svg'
import ProjectCard from '../../components/ProjectCard.jsx'
import './MainBody.css'
import YellowBorder from '../../components/YellowBorder.jsx'
import TechStackCard from '../../components/TechStackCard.jsx'


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

  const techStackList = [
    {name : "React", imgUrl :"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"},
    {name : "Node.js", imgUrl :"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"},
    {name : "Express.js", imgUrl : "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"},
    {name : "JavaScript", imgUrl : "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"},
    {name : "Kafka", imgUrl : "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg"},
    {name : "Redis", imgUrl : "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg"},
    {name : "Docker", imgUrl : "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"},
    {name : "Kubernetes", imgUrl : "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg"},
    {name : "AWS", imgUrl : "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"}
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

    <section className="tech-stack-section">
      <h2>Technologies that I know</h2>
      <p className="tech-stack-description">I have listed some of my top skills here, I know more of course!</p>

      <div className="tech-stack-container">
        {techStackList.map(techStack => <TechStackCard {...techStack} key={techStack.name}/>)}
      </div>

    </section>

  </main>
  )
}

export default MainBody