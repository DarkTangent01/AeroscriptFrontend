import React from 'react';
import {Link} from '@material-ui/core';
import '../components/css/footer.css';


export default function Footer() {
  return (
    <div className="footer">
      <div className="inner-footer">

        <div className="footer-items">
          <h1>Aeroscript</h1>
          <p>Mail Us:</p>
          <p>Aeroscript Internet Private Limited,</p>
          <p>210 New Street Varanasi &</p>
          <p>Uttar Pradesh East</p>
          <p>Pin Code: 232101</p>
        </div>

        <div className="footer-items">
          <h3>About</h3>
          <div className="border1"></div>
          <ul>
            {/* <Link style={{textDecoration: 'none', }} href="/about" ><li> About Us</li></Link> */}
            <a href="/about"><li>About Us</li></a>
            <a href="/contact"><li>Contact Us</li></a>
            <a href="/stories"><li>Aeroscript Stroies</li></a>
            <a href="/press"><li>Press</li></a>
            <a href="/wholesale"><li>Aeroscript Wholesales</li></a>
            <a href="/corporate"><li>Coporate Information</li></a>
          </ul>
        </div>

        <div className="footer-items">
          <h3>Policy</h3>
          <div className="border1"></div>
          <ul>
            <a href="/returnpolicy"><li>Return Policy</li></a>
            <a href="/terms"><li>Terms Of Use</li></a>
            <a href="/security"><li>Security</li></a>
            <a href="/privacy"><li>Privacy</li></a>
            <a href="/sitemap"><li>Sitemap</li></a>
            <a href="/erp"><li>ERP Policy</li></a>
          </ul>
        </div>


        <div className="footer-items">
          <h3>Help</h3>
          <div className="border1"></div>
          <ul>
            <a href="/payments"><li>Payments</li></a>
            <a href="/shipping"><li>Shipping</li></a>
            <a href="/return"><li>Cancellation & Return</li></a>
            <a href="/faq"><li>FAQ</li></a>
            <a href="/report"><li>Report Infringement</li></a>
          </ul>


          <div className="social-media">
            <a href="/"><i className="fab fa-instagram"></i></a>
            <a href="/"><i className="fab fa-facebook"></i></a>
            <a href="/"><i className="fab fa-google-plus-square"></i></a>
          </div>
        </div>
      </div>


      <div className="footer-bottom">
        Aeroscript Shopping &reg; {new Date().getFullYear()}
      </div>
    </div>
  );
}
