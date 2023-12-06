
import { CiMobile1 } from "react-icons/ci"; 
import { IoIosPlay } from "react-icons/io";
import "./Banner.scss"

const Banner = () => {
  return (
    <>
        <div className="banner">
        <div className="container banner-container">
          <div className="banner-content-left">
             <h3 className="sb-title"> স্বরবিন্দু - SoroBindu </h3>
             <h1 className="sb-title-ab"> <span> শিক্ষা </span>  হোক মজায় মজায়... </h1>
             <h3 className="text-abc"> আর নয় ভয়, শিখুন ইনোভেটিভ আর ফানি পদ্ধতিতে </h3>
             <div className="text-button">
                <i className="mobile-icon"> <CiMobile1 />  </i> 
                <input type="text" placeholder="মোবাইলঃ 01889972995" />
                <button className="detal-btn"> আরো জানতে চাই </button>
             </div>
             
             <div className="video-button">
                <div className="play-icon-left">    
                  <p className="play-icon"><IoIosPlay /></p>
                </div>
                <div className="play-icon-right">
                  <p> স্বরবিন্দু কি ? </p>
                  <p> কিভাবে কাজ করে ? </p>
                </div>
           
             </div>
          </div>
          <div className="banner-content-right">
               <img src="https://sorobindu.com/wp-content/uploads/2022/03/SoroBindu-Jillur-rahman-Banner-3.png" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner;



