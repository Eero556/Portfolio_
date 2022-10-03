import React from 'react'
import ProjectItem from '../components/ProjectItem'
import "../Styles/Project.css"
import {projectList} from "../helpers/ProjectList"
function projects() {
  return (
    <div className='projects'>
      <h1> My projects</h1>
      <div className='projectList'>
        {projectList.map((project, index) => {
          return <ProjectItem key={index} id={index} name={project.name} image={project.image}/>
        })}
      </div>
    </div>
  )
}

export default projects