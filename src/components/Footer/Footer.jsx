
import { FaFacebook } from "react-icons/fa6";
import { CiYoutube } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import "./Footer.scss"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="top-footer">
            <div className="container top-footer-container">
              <div className="top-footer-box">
                  <img src="https://sorobindu.com/wp-content/uploads/2022/03/Sorobindu-logo.png" alt="" />
                  <h6> 01889972995 / 01889972999 </h6>
                  <div className="para">
                    <p> Suihari Kacha Bazar, Dinajpur Sadar, Dinajpur</p>
                    <p> Trade Licence No: 73/New (Dinajpur Pourosova) </p>
                  </div>
                
                  <div className="social-media-all">
                    <ul>
                      <li> <FaFacebook /></li>
                      <li> <CiYoutube /></li>
                      <li> <FaInstagram /> </li> 
                      <li> <FaTwitter /> </li> 
                    </ul>
                  </div>
              </div>
              <div className="top-footer-item">
                  <h5 className="abt"> About </h5>
                   <div className="title-foot">
                      <ul className="footer-ul">
                        <li className="foot-li"> <Link to=""> About Us </Link></li>
                        <li className="foot-li"> <Link to=""> Privacy Policy </Link></li>
                        <li className="foot-li"> <Link to=""> Terms & Conditions </Link></li>
                        <li className="foot-li"> <Link to=""> Refund Policy </Link></li>
                      </ul>
                   </div>
              </div>
              <div className="top-footer-item">
                  <h5 className="abt"> Course </h5>
                   <div className="title-foot">
                      <ul className="footer-ul">
                        <li className="foot-li"> <Link to=""> Web Design & Freelancing </Link></li>
                        <li className="foot-li"> <Link to="">Spoken English </Link></li>
                        <li className="foot-li"> <Link to="">PHP & Laravel </Link></li>
                        <li className="foot-li"> <Link to=""> JavaScript & MERN </Link></li>
                      </ul>
                   </div>
              </div>
              <div className="top-footer-item">
                  <h5 className="abt">Support </h5>
                   <div className="title-foot">
                      <ul className="footer-ul">
                        <li className="foot-li"> <Link to=""> Download Resource</Link></li>
                        <li className="foot-li"> <Link to=""> Blog </Link></li>
                        <li className="foot-li"> <Link to=""> FAQs</Link></li>
                        <li className="foot-li"> <Link to="">SoroBindu Software </Link></li>
                      </ul>
                   </div>
              </div>
          
            </div>
      </div>

      <div className="footer">
        <div className="container footer-container">
          <div className="footer-content">
            <img src="https://sorobindu.com/wp-content/uploads/2022/01/SSLCommerz-Pay-With-logo-All-Size-03-2048x73.png" alt="" />
            <p> © 2023 SoroBindu OPC. All Rights Reserved By <span> Goutam Ray </span> </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer;














