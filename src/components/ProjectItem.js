import React from 'react'
import { useNavigate } from "react-router-dom"

function ProjectItem({ image, name, id,date }) {

  
  const navigate = useNavigate();
  

  // Hopping/navigating to own project page
  const hop = () => {
    navigate("/project/" + id)
  }

  return (
    <section className='projectItem' onClick={hop}>
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1>{name}</h1>
      <span className='projectdisplaySpan'>Made {date}</span>
    </section>
  )
}

export default ProjectItem