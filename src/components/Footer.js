
import { SocialIcon } from 'react-social-icons';
function Footer() {
  return (
    <footer className='footer'>
      <div className='socialMedia'>
        <SocialIcon url="https://github.com/Eero556" fgColor='white' />
        <SocialIcon url="https://www.linkedin.com/in/eero-kantonen-7389a3209/" fgColor='white' />
        <SocialIcon url="mailto: eero.kantonen@elisanet.fi" />
      </div>
      <p>&copy; 2022 Eero Kantonen</p>
    </footer>
  )
}

export default Footer