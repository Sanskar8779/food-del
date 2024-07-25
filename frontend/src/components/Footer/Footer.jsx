import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img className="logo-img" src={assets.logo} alt="" />
            <p>CravePoint is an innovative restaurant app that connects users with a curated selection of local eateries, offering diverse cuisine options for delivery and takeout. Its user-friendly interface and personalized recommendations make it easy to discover and enjoy the best dining experiences in your area.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91-123-456-7890</li>
                <li>contact@cravepoint.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright {new Date().getFullYear()} © CravePoint.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
