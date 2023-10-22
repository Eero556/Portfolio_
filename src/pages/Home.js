import React from 'react'
import Picture from "../Assets/Jeero.jpg"
import { skillList } from "../helpers/Skills"
import { SocialIcon } from 'react-social-icons';
function Home() {
  return (
    <main className='home'>
      <section className='about'>
        <img src={Picture} alt="Eero" />
        <h3 className=''>Hi, My Name is Eero Kantonen</h3>
        <p>Software Developer</p>
        <span>Email: eero.kantonen11@gmail.com</span>
        <span>Phone: +358 451 361 822</span>
      </section>
      <div className='prompt'>
        
        <div className='d-flex flex-column align-items-center socialContainer'>
        <span className='hiddenTip mb-3'>Github</span>
          <SocialIcon className='socialLink' target="_blank" url="https://github.com/Eero556" fgColor='white' />
        </div>
        <div className='d-flex flex-column align-items-center ml-4 socialContainer'>
          <span className='hiddenTip mb-3'>Email</span>
          <SocialIcon className='socialLink' target="_blank" url="mailto: eero.kantonen11@gmail.com" />
        </div>
        <div className='d-flex flex-column align-items-center socialContainer'>
          <span className='hiddenTip mb-3'>Linkedin</span>
          <SocialIcon className='socialLink' target="_blank" url="https://www.linkedin.com/in/eero-kantonen-7389a3209/" fgColor='white' />
        </div>
        
      </div>
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