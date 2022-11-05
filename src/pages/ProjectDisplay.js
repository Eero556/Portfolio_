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
    <section className='project'>
        <h1>{project.name}</h1>
        <iframe className='videoframe' src={project.video} frameborder="0" title="Veed Recording - 5 November 2022" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        <h1>Used techologies</h1>
        <p>{project.skills}</p>
        <h1>About</h1>
        <p>{project.about}</p>
        <div>
          <a href={project.link}><GitHub/><label>source code</label></a>
        </div>
        <Link className='link' to={"/projects"}><button>Back to Projects</button></Link>
    </section>
  )
}

export default ProjectDisplay