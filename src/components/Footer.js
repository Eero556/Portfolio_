
import { SocialIcon } from 'react-social-icons';
function Footer() {
  return (
    <footer style={{backgroundColor: '#1c1c1c'}} className="text-center text-white mt-4">
      <div className="container p-4 pb-0">
        <section className="mb-0 d-flex justify-content-center gap-3">
        <SocialIcon className='socialLink' target="_blank" url="https://github.com/Eero556" fgColor='white' />
        <SocialIcon className='socialLink' target="_blank" url="https://www.linkedin.com/in/eero-kantonen-7389a3209/" fgColor='white' />
        <SocialIcon className='socialLink' target="_blank" url="mailto: eero.kantonen@elisanet.fi" />
        </section>
      </div>
      <div className="text-center p-3">
        © 2022 Copyright:
        <p className="text-white">Eero Kantonen</p>
      </div>
    </footer>
  )
}

export default Footer