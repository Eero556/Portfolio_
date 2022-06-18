import React from 'react'
import Email from "@material-ui/icons/Email"
import LinkedIn from "@material-ui/icons/LinkedIn"
import Github from "@material-ui/icons/GitHub"
import Instagram from "@material-ui/icons/Instagram"
import "../Styles/Home.css"
import Picture from "../Assets/Jeero.jpg"
import {skillList} from "../helpers/Skills"



function Home() {

 
  return (
    <div className='home'>
      <div className='about'>
        <img src={Picture} alt="Eero"/>
        <h3>Hi, My Name is Eero Kantonen</h3>
        <p>Second year student at Jamk university of applied sciences</p>
        <div className='prompt'>
          <p>A software developer</p>
          <a href='https://www.instagram.com/jeeroooooo/'><Instagram/></a>
          <a href='https://www.linkedin.com/in/eero-kantonen-7389a3209/'><LinkedIn/></a>
          <a href='https://github.com/Eero556'><Github/></a>
          <a href = "mailto: eero.kantonen@elisanet.fi"><Email/></a>
          
        </div>
      </div>
      <div className='skills' key={"mo"} >
        <h1>Skills</h1>
        {skillList.map((skill) =>{
          return <div>
            <li key={"mo"}>
              <h2 className='skill-title'>{skill.Title}</h2>
              <span className='skill-desc'>{skill.Desc}</span>
            </li>
          </div>
        })}
      </div>
      
    </div>
  )
}

export default Home