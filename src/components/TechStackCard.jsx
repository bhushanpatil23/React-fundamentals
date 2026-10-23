import './TechStackCard.css'

const TechStackCard = ({imgUrl, name}) => {
  return (
    <div className="tech-stack-card">
        <img src={imgUrl} alt={`${name} logo`} />
    </div>
  )
}

export default TechStackCard