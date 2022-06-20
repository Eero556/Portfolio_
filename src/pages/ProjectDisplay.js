import React from 'react'
import {useParams} from "react-router-dom"
import {projectList} from "../helpers/ProjectList"
import GitHub from '@material-ui/icons/GitHub';
import "../Styles/ProjectDisplay.css"
import {Link} from "react-router-dom"

function ProjectDisplay() {
    // useParams to get unique id
    const {id} = useParams();
    const project = projectList[id]
  return (
    <div className='project'>
        <h1>{project.name}</h1>
        <img src={project.image} alt="kuva"/>
        <p>{project.skills}</p>
        <a href='https://github.com/Eero556'><GitHub/></a>
        <Link className='link' to={"/projects"}>Back to projects</Link>
    </div>
  )
}

export default ProjectDisplay