import React from 'react'
import './Footer.css';
const Footer = () => {
  return (
    <><div className='footer'>
          <div className='footer-logo'>
              <img src="" alt="" />
          </div>
           <ul className="footer-link">
              <li>Company</li>
               <li>Offices</li>
               <li>Contact</li>
          </ul>
           <div className='footer-social-icon'>
              <div className='footer-icons-container'>
                  <i className='icofont-whatsapp'></i>
              </div>
              <div className='footer-icons-container'>
                  <i className='icofont-facebook'></i>
              </div>
              <div className='footer-icons-container'>
                  <i className='icofont-pinterest'></i>
              </div>
              <div className='footer-icons-container'>
                  <i className='icofont-instagram'></i>
              </div>
          </div>
      </div>
      <div className="footer-copyright">
              <hr/>
              <p>Copyright @ 2023-All Right Reserved</p>
          </div></>
  )
}

export default Footer