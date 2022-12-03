import React from 'react'
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion";
function ProjectItem({ image, name, id }) {

  
  const navigate = useNavigate();
  

  // Hopping/navigating to own project page
  const hop = () => {
    navigate("/project/" + id)
  }

  return (
    <motion.section whileHover={{scale: 1.2}} className='projectItem' onClick={hop}>
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1>{name}</h1>
      <p>Date</p>
    </motion.section>
  )
}

export default ProjectItem