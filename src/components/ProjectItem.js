import React from 'react'
import {useNavigate} from "react-router-dom"
function ProjectItem({image, name, id}) {

    const navigate = useNavigate();
    // Hopping/navigating to own project page
    const hop = () =>{
        navigate("/project/" + id)
    }

  return (
    <div className='projectItem' onClick={hop}>
        <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
            <h1>{name}</h1>
    </div>
  )
}

export default ProjectItem