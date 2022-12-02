import React from 'react'
import ProjectItem from '../components/ProjectItem'
import "../Styles/project.scss"
import {projectList} from "../helpers/ProjectList"
function projects() {
  return (
    <section className='projects'>
      <h1> My projects</h1>
      <div className='projectList'>
        {projectList.map((project, index) => {
          return <ProjectItem key={index} id={index} name={project.name} image={project.image}/>
        })}
      </div>
    </section>
  )
}

export default projects