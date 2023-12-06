import { Link, useLocation } from "react-router-dom"
import "./Header.scss"
import { checkRoute } from "../../helpers/helper";

const Header = () => {
  const location = useLocation();

  return ( 
    <>
      <div className="header ">
        <div className="container header-container">
          <div className="header-left">
            <Link to="/"> 
              <img src="https://sorobindu.com/wp-content/uploads/2022/03/Sorobindu-logo-1.png" alt="" />
              </Link>
          </div>
          <div className="header-right">
            <ul>
              <li> <Link to="/" className={location.pathname === "/" ? 'active' : ""} > Home </Link> </li>
              <li> <Link to="/about" className={location.pathname === "/about" ? 'active' : ""}> About </Link></li>
              <li> <Link to="/blog" className={location.pathname === "/blog" ? 'active' : ""}> Blog </Link></li>
              <li> <Link to="/team" className={location.pathname === "/team" ? 'active' : ""}> Team </Link></li>
              <li> <Link to="/admin" className={checkRoute(location.pathname , "admin") ? "active" : ""}> Admin </Link></li>
              <li> <Link to="/contact" className={location.pathname === "/contact" ? 'active' : ""}> Contact </Link></li>
            </ul>
          </div>
        </div>
      </div>

    
    </>
  
  )
}

export default Header
