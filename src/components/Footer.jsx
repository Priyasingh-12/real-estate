import React, { useState } from 'react'
import { FaFacebook } from 'react-icons/fa6'
import { FaGoogle } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa6'
import { FaTwitter } from 'react-icons/fa'
import './footer.css' 

const Footer = () => {
    return ( 
        <>
             <footer className="footer">
      <div className="footer_row">
        <div className="footer_col">
          <h4 className="footer_col_heading">Info</h4>
          <ul className="footer_col_list_parent">
            <li className="footer_col_lists"><a className="footer_col_links" href="/">About Us</a></li>
            <li className="footer_col_lists"><a className="footer_col_links" href="/">Compressions</a></li>
            <li className="footer_col_lists"><a className="footer_col_links" href="/">Customers</a></li>
            <li className="footer_col_lists"><a className="footer_col_links" href="/">Service</a></li>
            <li className="footer_col_lists"><a className="footer_col_links" href="/">Collection</a></li>
          </ul>
        </div>

        <div className="footer_col">
          <h4 className="footer_col_heading">Explore</h4>
          <ul className="footer_col_list_parent">
            <li className="footer_col_lists"><a className="footer_col_links" href=" /">Free Designs</a></li>
            <li className="footer_col_lists"><a className="footer_col_links" href=" /">Latest Designs</a></li>
            <li className="footer_col_lists"><a className="footer_col_links" href=" /">Themes</a></li>
            <li className="footer_col_lists"><a className="footer_col_links" href=" /">Popular Designs</a></li>
            <li className="footer_col_lists"><a className="footer_col_links" href=" /">Art Skills</a></li>
            <li className="footer_col_lists"><a className="footer_col_links" href=" /">New Uploads</a></li>
          </ul>
        </div>

        <div className="footer_col">
          <h4 className="footer_col_heading">Legal</h4>
          <ul className="footer_col_list_parent">
            <li className="footer_col_lists"><a className="footer_col_links" href=" /">Customer Agreement</a></li>
            <li className="footer_col_lists"><a className="footer_col_links" href=" /">Privacy Policy</a></li>
            <li className="footer_col_lists"><a className="footer_col_links" href=" /">GDPR</a></li>
            <li className="footer_col_lists"><a className="footer_col_links" href=" /">Security</a></li>
            <li className="footer_col_lists"><a className="footer_col_links" href=" /">Testimonials</a></li>
            <li className="footer_col_lists"><a className="footer_col_links" href=" /">Media Kit</a></li>
          </ul>
        </div>

        <div className="footer_col">
          <h4 className="footer_col_heading">Newsletter</h4>
          <p>
            Subscribe to our newsletter for a weekly dose
            of news, updates, helpful tips, and
            exclusive offers.
          </p>
          <form action=" /">
            <input type="text" placeholder="Your email" required/>
            <button type="submit">SUBSCRIBE</button>
          </form>
          <div className="icons">
          <a href='/' className='social-icon'>
              <FaFacebook className='my-auto mx-auto' />
            </a>
            <a href='/' className='social-icon'>
              <FaTwitter className='my-auto mx-auto' />
            </a>
            <a href='/' className='social-icon'>
              <FaGoogle className='my-auto mx-auto' />
            </a>
            <a href='/' className='social-icon'>
              <FaLinkedin className='my-auto mx-auto' />
            </a>
          </div>
        </div>
      </div>
    </footer>
        </>
     );
}
 
export default Footer;