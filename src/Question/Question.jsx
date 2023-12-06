
import { CiCirclePlus } from "react-icons/ci";


import "./Question.scss"

const Question = () => {
  return (
    <>
       <div className="question">
        <div className="container question-container">
          <div className="q-title"> 
          <h2> জেনে নেই কমন কিছু প্রশ্ন এবং উত্তর... </h2>
          </div>
          <div className="question-box-all"> 
            <div className="question-box-left">
              <div className="plus-box">
                <li> আমি একদম নতুন, আমি কিভাবে কি করতে পারি ? </li>
                <span> <CiCirclePlus /></span>
              </div>
              <div className="plus-box">
                <li> লাইভ ক্লাস কি জিল্লুর ভাই নিজে নিবেন ? </li>
                <span> <CiCirclePlus /></span>
              </div>
              <div className="plus-box">
                <li> মার্কেট প্লেস সাপোর্ট কি এবং কিভাবে পাবো ? </li>
                <span> <CiCirclePlus /></span>
              </div>
              <div className="plus-box">
                <li> Day-0 না WordPress কোর্সে ভর্তি হবো ? </li>
                <span> <CiCirclePlus /></span>
              </div>
            </div>
            <div className="question-box-right">
              <div className="plus-box">
                <li> আমি শুধু HTML,CSS জানি,আমি এখন কি করবো? </li>
                <span> <CiCirclePlus /></span>
              </div>
              <div className="plus-box">
                <li> আপনাদের কি কি কোর্স আছে ? </li>
                <span> <CiCirclePlus /></span>
              </div>
              <div className="plus-box">
                <li> আমরা কি থিম প্লাগিন এর সাপোর্ট পাবো ? </li>
                <span> <CiCirclePlus /></span>
              </div>
              <div className="plus-box">
                <li> কোর্স শেষ হতে কত দিন সময় লাগবে ? </li>
                <span> <CiCirclePlus /></span>
              </div>
            </div>
          </div>
        </div>
       </div>
    </>
  )
}

export default Question;
















