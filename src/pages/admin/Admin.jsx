import { Link, Outlet, useLocation } from "react-router-dom";
import PageHeader from "../../components/Pageheader/PageHeader";
import "./Admin.scss"
import { checkRoute } from "../../helpers/helper";

const Admin = () => {
  const location = useLocation();


  return (
    <>
    <PageHeader title={"Admin"} />
    <div className="container">
      <h2> Admin </h2>
      <div className="panel">
        <div className="left">
             <ul>
              <li> <Link to="user" className={checkRoute(location.pathname, "user") ? 'active' : ""}> Users </Link></li>
              <li> <Link to="post" className={checkRoute(location.pathname, "post") ? 'active' : ""}> Posts </Link></li>
              <li> <Link to="category" className={checkRoute(location.pathname, "category") ? 'active' : ""}> Category </Link></li>
              <li> <Link to="role" className={checkRoute(location.pathname, "role") ? 'active' : ""}> Roles </Link></li>
             </ul>
        </div>
        <div className="right">
            <Outlet />
        </div>
      </div>
    </div>
  
    </>
  )
}

export default Admin;
