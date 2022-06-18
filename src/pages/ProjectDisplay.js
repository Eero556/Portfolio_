import React from 'react'
import {useParams} from "react-router-dom"
import {projectList} from "../helpers/ProjectList"
import GitHub from '@material-ui/icons/GitHub';
import "../Styles/ProjectDisplay.css"

function ProjectDisplay() {
    const {id} = useParams();
    const project = projectList[id]
  return (
    <div className='project'>
        <h1>{project.name}</h1>
        <img src={project.image} alt="kuva"/>
        <p>{project.skills}</p>
        <a href='https://github.com/Eero556'><GitHub/></a>
    </div>
  )
}

export default ProjectDisplay