import React from 'react'
import LinkedIn from "@material-ui/icons/LinkedIn"
import Github from "@material-ui/icons/GitHub"
import Email from "@material-ui/icons/Email"
import "../Styles/Footer.css"
function Footer() {
  return (
    <footer className='footer'>
        <div className='socialMedia'>
            <a className='btn btn-primary btn-lg btn-floating bg-dark' href='https://www.linkedin.com/in/eero-kantonen-7389a3209/'><LinkedIn/></a>
            <a className='btn btn-primary btn-lg btn-floating bg-dark' href='https://github.com/Eero556'><Github /></a>
            <a className="btn btn-primary btn-lg btn-floating bg-dark" href = "mailto: eero.kantonen@elisanet.fi"><Email/></a>
        </div>
        <p>&copy; 2022 Eero Kantonen</p>
    </footer>
  )
}

export default Footer