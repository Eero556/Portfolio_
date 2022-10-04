import React from 'react'
import LinkedIn from "@material-ui/icons/LinkedIn"
import Github from "@material-ui/icons/GitHub"
import Email from "@material-ui/icons/Email"
import "../Styles/Footer.css"
function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <a href='https://www.linkedin.com/in/eero-kantonen-7389a3209/'><LinkedIn className='linkedin'/></a>
            <a href='https://github.com/Eero556'><Github className='github'/></a>
            <a href = "mailto: eero.kantonen@elisanet.fi"><Email/></a>
        </div>
        <p>&copy; 2022 Eero Kantonen</p>
    </div>
  )
}

export default Footer