import React from 'react'
import Email from "@material-ui/icons/Email"
import LinkedIn from "@material-ui/icons/LinkedIn"
import Github from "@material-ui/icons/GitHub"
import "../Styles/Home.scss"
import Picture from "../Assets/Jeero.jpg"
import { skillList } from "../helpers/Skills"
import {motion} from "framer-motion"

function Home() {
  return (
    <motion.main initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className='home'>
      <section className='about'>
        <img src={Picture} alt="Eero" />
        <h3 className=''>Hi, My Name is Eero Kantonen</h3>
        <p>Software Developer</p>
        <span>Email: eero.kantonen@elisanet.fi</span>
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

    </motion.main>
  )
}

export default Home