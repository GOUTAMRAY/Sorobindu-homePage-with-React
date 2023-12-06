
import { CiYoutube } from "react-icons/ci";
import { TbBrandZoom } from "react-icons/tb";

import "./BottomFoter.scss";

const BottomFoter = () => {
  return (
    <>
       <div className="bottom-footer">
        <div className="container bootom-container">
          <div className="bottom-all-data">
              <h2> নিজে কিছু করি, অন্যকেও কিছু করার সুযোগ করে দেই ! </h2>
              <p>আজকে যা শিখেন, সেটা আপনার সারাজীবন কাজে লাগবে। চলেন নিজেকে সময় দেই, নিজের জন্য ইনভেস্ট করি। অন্যের জন্য বসে থাকা নয়, নিজের ক্যারিয়ার নিজেই গড়ি... </p>
              <div className="bottom-button">
                 <button className="you-btn"> <span> <CiYoutube /> </span> Check YouTube </button>
                 <button className="you-btn"> <span> <TbBrandZoom /> </span> Check All Course </button>
              </div>
          </div>
        </div>
       </div>
    </>
  )
}
     
export default BottomFoter;





















