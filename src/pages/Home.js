import React from 'react'
import Picture from "../Assets/Jeero.jpg"
import { skillList } from "../helpers/Skills"
import { motion } from "framer-motion"
import { SocialIcon } from 'react-social-icons';
function Home() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='home'>
      <section className='about'>
        <img src={Picture} alt="Eero" />
        <h3 className=''>Hi, My Name is Eero Kantonen</h3>
        <p>Software and Web Developer</p>
        <span>Email: eero.kantonen@elisanet.fi</span>
        <span>Phone: +358 451 361 822</span>
        <div className='prompt'>
          <SocialIcon target="_blank" url="https://github.com/Eero556" fgColor='white' />
          <SocialIcon target="_blank" url="https://www.linkedin.com/in/eero-kantonen-7389a3209/" fgColor='white' className='btn btn-lg btn-floating' />
          <SocialIcon target="_blank" url="mailto: eero.kantonen@elisanet.fi" />
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