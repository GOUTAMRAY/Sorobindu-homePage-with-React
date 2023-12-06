import { MdOutlinePhoneEnabled , MdOutlineMailOutline} from "react-icons/md";
import { Link } from "react-router-dom";
import "./Topbar.scss"

const Topbar = () => {
  return (
    <>
         <div className="top-bar">
        <div className="container top-bar-container">
          <div className="top-bar-left">
             <ul>
              <li><span> <MdOutlinePhoneEnabled /> </span> +8801889972995 </li>
              <li><span><MdOutlineMailOutline /></span>info@sorobindu.com</li>
             </ul>
          </div>
          <div className="top-bar-right">
            <Link to="/"> Login </Link>
            <Link to="/"> Logout </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Topbar;





