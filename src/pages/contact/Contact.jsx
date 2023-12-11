import PageHeader from "../../components/Pageheader/PageHeader";
import { FaMapMarkedAlt } from "react-icons/fa";
import { CiMobile1 } from "react-icons/ci";
import { MdMessage } from "react-icons/md"; 

import "./Contact.scss"

const Contact = () => {
  return (
    <>
      <PageHeader title={"Contact"} />

        <div className="contact">
          <div className="container contact-container">
            <div className="about-title">
              <h4 className="about-tt"> Home/Contact Us </h4>
              <h2 className="about-abb"> Contact Us </h2>
              </div>
          </div>
        </div>

       <div className="contact-details">
        <div className="container conact-details-container ">
          <div className="contact-text">
             <h1> Keep In Touch With Us. </h1>
             <div className="cc-box">
               <div className="address">
                  <span className="icon-bb"> <FaMapMarkedAlt /> </span>
                   <h3 className="address-ddd"> Address</h3>
               </div>
               <h5 className="number-nnn"> Chowrangi KachaBazar, Suihari, Dinajpur Sadar </h5>
             </div>

             <div className="cc-box">
               <div className="address">
                <span className="icon-bb"> <CiMobile1 /> </span>
                <h3 className="address-ddd"> Phone </h3>
               </div>
               <h5 className="number-nnn"> Mobile: <strong> (+88) 01889972995  </strong> </h5>
               <h5 className="number-nnn"> Another: <strong>(+88) 01889972999  </strong></h5>
             </div>

             <div className="cc-box">
               <div className="address">
                <span className="icon-bb" > <MdMessage /> </span>
                <h3 className="address-ddd"> Email </h3>
               </div>
               <h5 className="number-nnn"> support@sorobindu.com </h5>
               <h5 className="number-nnn" > info@sorobindu.com </h5>
             </div>

          </div>
          <div className="contact-map">
              <map name=""> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57498.01853401724!2d89.22080955181124!3d25.74987366343018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e32de6fca6019b%3A0x9fa496e687f818c8!2sRangpur!5e0!3m2!1sen!2sbd!4v1702317765067!5m2!1sen!2sbd" width="800" height="450"  allowfullscreen="" loading="lazy"></iframe> </map>
          </div>
        </div>
       </div>
    </>
  )
}

export default Contact;


















