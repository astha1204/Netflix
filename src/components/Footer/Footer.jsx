import React from 'react'
import './Footer.css'
import yicon from '../../assets/youtube_icon.png'
import ticon from '../../assets/twitter_icon.png'
import iicon from '../../assets/instagram_icon.png'
import ficon from '../../assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className='footer '>
      <div className="footer-icons">
        <img src={yicon} alt=""/>
        <img src={ticon} alt=""/>
        <img src={ficon} alt=""/>
        <img src={iicon} alt=""/>
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Terms</li>
        <li>Jobs</li>
        <li>Legal Notices</li>
      </ul>
      <p className='copyright-text'>@ 1997-2025 Netflix,Inc.</p>
    </div>
  )
}

export default Footer
