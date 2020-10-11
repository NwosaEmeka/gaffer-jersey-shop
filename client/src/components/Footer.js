import React from 'react'
import { FaEnvelope, FaPhone } from 'react-icons/fa'

function Footer() {
  return (
    <div className="footer">
      <div className="contact">
        <div className="contact__item">
          <a className="icon" href="tel:+60102544276">
            <FaPhone />
          </a>
          <a className="contact__link" href="tel:+60102544276">+60-102544276</a>
        </div>
        <div className="contact__item">
          <a className="icon" href="mailto:mykev.paul@gmail.com">
            <FaEnvelope />
          </a> 
          <a className="contact__link" href="mailto:mykev.paul@gmail.com">gafferJersey@mail.com</a>
        </div>
      </div>
    < div className="footer__copyright">
      &copy; {new Date().getFullYear()} Gaffer Jersey. All Rights Reserved
    </div>
    </div>
  )
}

export default Footer
