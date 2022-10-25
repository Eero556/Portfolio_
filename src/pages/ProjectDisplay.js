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
        <h1>Used techologies</h1>
        <p>{project.skills}</p>
        <div>
          <a href={project.link}><GitHub/><label>More at github</label></a>
        </div>
        
        <Link className='link' to={"/projects"}>Back to projects</Link>
    </div>
  )
}

export default ProjectDisplay