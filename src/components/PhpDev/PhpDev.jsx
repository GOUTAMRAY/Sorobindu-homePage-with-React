
import { FaPhp ,FaDatabase, FaLaravel ,  FaGithub } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { MdDataObject } from "react-icons/md";
import "./PhpDev.scss"


const PhpDev = () => {
  return (
    <>
           <div className="php-dev">
      <div className="container php-dev-container">
         <div className="php-image-div">
            <img src="https://sorobindu.com/wp-content/uploads/2022/03/PHP-And-Laravel-Cource.jpg" alt="" />
         </div>
         <div className="php-image-content">
             <h3 className="free-php"> ফ্রী-তে শিখুন PHP & Laravel </h3>
             <h4 className="php-laravel"> PHP এবং Laravel শিখুন কমপ্লিট গাইডলাইনের সাথে বেসিক থেকে এডভান্স পর্যন্ত... </h4>
             <button className="detal-btn"> জয়েন করুন ফ্রীতে <span> <IoIosArrowForward /></span> </button>
         </div>
         <div className="php-image-desc">
            <ul>
               <li> <span> <FaPhp /> </span> বেসিক PHP প্রোগ্রামিং ল্যাংগুয়েজ (২০ ভিডিও ) </li>
               <li> <span> <FaDatabase /></span> MySQL ডাটাবেস & রিলেশনশিপ A টু Z (১৫ ভিডিও ) </li>
               <li> <span> <MdDataObject /> </span> অবজেক্ট ওরিয়েন্টেট PHP & MVC (১৫ টি ভিডিও ) </li>
               <li> <span> <FaLaravel /> </span> Laravel বেসিক থেকে এডভান্স (৩৫-৪০ টি ভিডিও ) </li>
               <li> <span> <FaGithub /> </span> বোনাস - Github, Carrer Session (৫ টি ভিডিও ) </li>
            </ul>
         </div>
      </div>
     </div>

    </>
  )
}

export default PhpDev















