import React from 'react'
import { useNavigate } from "react-router-dom"
function ProjectItem({ image, name, id }) {

  
  const navigate = useNavigate();
  console.log(name)

  // Hopping/navigating to own project page
  const hop = () => {
    navigate("/project/" + id)
  }

  return (
    <section className='projectItem' onClick={hop}>
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1>{name}</h1>
    </section>
  )
}

export default ProjectItem