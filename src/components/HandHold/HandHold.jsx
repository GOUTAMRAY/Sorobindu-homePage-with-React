
import { FaHandshake,FaRecordVinyl  } from "react-icons/fa";
import { BsPlugin } from "react-icons/bs";
import { CiRead } from "react-icons/ci";
import { GrCloudSoftware } from "react-icons/gr";
import { MdOutlineSupportAgent , MdAssignment,MdContentCopy } from "react-icons/md";
import { GiTeamIdea } from "react-icons/gi";
import { TbLiveView } from "react-icons/tb";
import { SiQuickbooks, SiCodereview } from "react-icons/si";

import "./HandHold.scss"

const HandHold = () => {
  return (
    <>
        <div className="hand-holding-section">
        <div className="container hand-holding-container">
          <h2 className="hand-support-img"> হ্যান্ড হোল্ডিং সাপোর্ট, কেন একটি ভালোবাসার নাম </h2>
          <div className="handle-single-box">
             <div className="box-theme">
                 <span> <FaHandshake /> </span>
                 <div className="hand">
                  <h3> মার্কেটপ্লেস সাপোর্ট </h3>
                  <p> মার্কেটপ্লেস সাপোর্ট টিম দ্বারা ৩ মাস / লাইফ টাইম মার্কেটপ্লেস সাপোর্ট </p>
                 </div>
             </div>
             <div className="box-theme">
                 <span> <BsPlugin /> </span>
                 <div className="hand">
                  <h3> থিম, প্লাগিন সাপোর্ট </h3>
                  <p> থাকছে সকল ধরনের থিম, প্লাগিন এবং রিসোর্সের লাইফ টাইম সাপোর্ট </p>
                 </div>
             </div>
             <div className="box-theme">
                 <span> <CiRead /> </span>
                 <div className="hand">
                  <h3> ফ্রী রি-এডমিশন</h3>
                  <p> সফটওয়্যারে সাকসেস স্কোর ৭০% এর নিচে থাকলে আনলিমিটেড রি-এডমিশন </p>
                 </div>
             </div>
             <div className="box-theme">
                 <span> <MdContentCopy /> </span>
                 <div className="hand">
                  <h3> কন্টেন্ট অ্যাক্সেস </h3>
                  <p> লাইফ টাইম সফটওয়্যার, কন্টেন্ট, রেকর্ডেড ক্লাসের অ্যাক্সেস </p>
                 </div>
             </div>
          </div>
          <div className="handle-single-box"> 
             <div className="box-theme">
                 <span><GrCloudSoftware /> </span>
                 <div className="hand">
                  <h3> নিজস্ব সফটওয়্যার</h3>
                  <p>স্টুডেন্ট দের জন্য নিজস্ব LMS সফটওয়্যার, স্মার্ট ট্রাকিং লার্নিং সিস্টেম </p>
                 </div>
             </div>
             <div className="box-theme">
                 <span> <MdOutlineSupportAgent /> </span>
                 <div className="hand">
                  <h3> কো-ইন্সট্রাক্টর সাপোর্ট </h3>
                  <p> ১২pm-১২am ওয়ান বাই ওয়ান পার্সোনাল কো-ইন্সট্রাক্টর সাপোর্ট</p>
                 </div>
             </div>
             <div className="box-theme">
                 <span> <GiTeamIdea /> </span>
                 <div className="hand">
                  <h3> ব্যাচের মাধ্যমে ক্লাস </h3>
                  <p>  মাত্র ৮০-১০০ স্টুডেন্ট নিয়ে ছোট ছোট ব্যাচে বিভক্ত করে ক্লাস নেয়া হয় </p>
                 </div>
             </div>
             <div className="box-theme">
                 <span> <TbLiveView /></span>
                 <div className="hand">
                  <h3> লাইভ ক্লাস </h3>
                  <p> অভিজ্ঞ টিচার দ্বারা সপ্তাহের ৩ দিন জুমের মাধ্যমে লাইভ ক্লাসের ব্যবস্থা </p>
                 </div>
             </div>
          </div>
          <div className="handle-single-box">
             <div className="box-theme">
                 <span> <SiQuickbooks /> </span>
                 <div className="hand">
                  <h3> ক্লাস কুইজ </h3>
                  <p> প্রতিটা ক্লাসে ২ ধরনের কুইজ থাকে, ক্লাসের আগে এবং ক্লাসের পরে </p>
                 </div>
             </div>
             <div className="box-theme">
                 <span><MdAssignment /> </span>
                 <div className="hand">
                  <h3> ক্লাস এসাইনমেন্ট </h3>
                  <p>  প্রতিটা ক্লাসে একটা ফুল ওয়েবসাইটের এসাইনমেন্ট থাকে </p>
                 </div>
             </div>
             <div className="box-theme">
                 <span> <SiCodereview /> </span>
                 <div className="hand">
                  <h3> এসাইনমেন্ট রিভিউ </h3>
                  <p>   কো-ইন্সট্রাক্টর দ্বারা প্রতিটা এসাইনমেন্ট রিভিউ, মারকিং এবং ফিডব্যাক </p>
                 </div>
             </div>
             <div className="box-theme">
                 <span> <FaRecordVinyl /> </span>
                 <div className="hand">
                  <h3> ক্লাস রেকর্ড </h3>
                  <p>  প্রতিটা লাইভ ক্লাসের রেকর্ড প্রোভাইড করা হয় সফটওয়্যারে </p>
                 </div>
             </div>
          </div>
        </div>
       </div>
    </>
  )
}

export default HandHold;


