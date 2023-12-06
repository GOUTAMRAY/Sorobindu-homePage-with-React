import { MdFlightClass } from "react-icons/md";
import { GrCloudSoftware } from "react-icons/gr";
import { PiExam } from "react-icons/pi";
import { CgWebsite } from "react-icons/cg";
import { PiCertificateLight } from "react-icons/pi";
import { MdSupportAgent } from "react-icons/md";


import "./Course.scss"

const Course = () => {
  return (
    <>
      <div className="our-course">
        <div className="container our-course-container">
           <h2 className="cousre-abc"> আমাদের র্কোস সমূহ </h2>
          <div className="course-item-data">
           
            <div className="course-item-box">
                <img src="https://sorobindu.com/wp-content/uploads/2022/06/HTML-Css-Bootstrap-1.jpg" alt="" />
                <h2 className="title"> HTML, CSS & Bootstrap Live Class </h2>
                <div className="course-desc">
                  <div className="course-left">
                     <ul>
                      <li> <span> <MdFlightClass /> </span> ৩০ লাইভ ক্লাস </li>
                      <li><span> <GrCloudSoftware /> </span>নিজস্ব সফটওয়্যার </li>
                      <li> <span> <PiExam /> </span> ফাইনাল এক্সাম </li>
                     </ul>
                  </div>
                  <div className="course-right">
                       <ul>
                          <li> <span><CgWebsite /> </span> ১৫+ লাইভ ওয়েবসাইট </li>
                          <li> <span> <PiCertificateLight /> </span> কোর্স সার্টিফিকেট </li>
                          <li> <span> <MdSupportAgent /> </span> কো-ইন্সট্রাক্টর সাপোর্ট </li>
                        </ul>
                  </div>
                </div>
                <button className="register-btn"> Register Now </button>
            </div>
            <div className="course-item-box">
                <img src="https://sorobindu.com/wp-content/uploads/2022/06/WP-Fundamental-768x768.jpg" alt="" />
                <h2 className="title"> WordPress Fundamental  Live Class  </h2>
                <div className="course-desc">
                  <div className="course-left">
                     <ul>
                      <li> <span> <MdFlightClass /> </span> ৪০+ লাইভ ক্লাস </li>
                      <li><span> <GrCloudSoftware /> </span>নিজস্ব সফটওয়্যার </li>
                      <li> <span> <PiExam /> </span> ফাইনাল এক্সাম </li>
                     </ul>
                  </div>
                  <div className="course-right">
                       <ul>
                          <li> <span><CgWebsite /> </span> ১৫+ লাইভ ওয়েবসাইট </li>
                          <li> <span> <PiCertificateLight /> </span> কোর্স সার্টিফিকেট </li>
                          <li> <span> <MdSupportAgent /> </span> কো-ইন্সট্রাক্টর সাপোর্ট </li>
                        </ul>
                  </div>
                </div>
                <button className="register-btn"> Register Now </button>
            </div>
            <div className="course-item-box">
                <img src="https://sorobindu.com/wp-content/uploads/2022/06/Advance-wordpress-768x768.jpg" alt="" />
                <h2 className="title"> WordPress Advance To Marketplace  </h2>
                <div className="course-desc">
                  <div className="course-left">
                     <ul>
                      <li> <span> <MdFlightClass /> </span> ৫৫+ লাইভ ক্লাস </li>
                      <li><span> <GrCloudSoftware /> </span>নিজস্ব সফটওয়্যার </li>
                      <li> <span> <PiExam /> </span> ফাইনাল এক্সাম </li>
                     </ul>
                  </div>
                  <div className="course-right">
                       <ul>
                          <li> <span><CgWebsite /> </span> ১৫+ লাইভ ওয়েবসাইট </li>
                          <li> <span> <PiCertificateLight /> </span> কোর্স সার্টিফিকেট </li>
                          <li> <span> <MdSupportAgent /> </span> কো-ইন্সট্রাক্টর সাপোর্ট </li>
                        </ul>
                  </div>
                </div>
                <button className="register-btn"> Register Now </button>
            </div>
         
        
          </div>
        </div>
      </div>
    </>
  )
}

export default Course;















