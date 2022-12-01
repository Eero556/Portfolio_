import React from 'react'
import Email from "@material-ui/icons/Email"
import LinkedIn from "@material-ui/icons/LinkedIn"
import Github from "@material-ui/icons/GitHub"
import "../Styles/Home.css"
import Picture from "../Assets/Jeero.jpg"
import { skillList } from "../helpers/Skills"

function Home() {
  return (
    <main className='home'>
      <section className='about'>
        <img src={Picture} alt="Eero" />
        <h3>Hi, My Name is Eero Kantonen</h3>
        <p>Software Developer</p>
        <span>Email: eero.kantonen@elisanet</span>
        <span>Phone: +358451361822</span>
        <div className='prompt'>
            <li><a className='btn btn-primary btn-lg btn-floating bg-dark' href='https://www.linkedin.com/in/eero-kantonen-7389a3209/'><LinkedIn /></a></li>
            <li><a className='btn btn-primary btn-lg btn-floating bg-dark' href='https://github.com/Eero556'><Github /></a></li>
            <li><a className='btn btn-primary btn-lg btn-floating bg-dark' href="mailto: eero.kantonen@elisanet.fi"><Email /></a></li>
        </div>
      </section>
      <h1>Skills</h1>
      <section className='skills'>
        {skillList.map((skill, index) => {
          return <div key={index} className='skillsItem'>
            <li>
              <h2 className='skill-title'>{skill.Title}</h2>
              <span className='skill-desc'>{skill.Desc}</span>
            </li>
          </div>
        })}

      </section>

    </main>
  )
}

export default Home