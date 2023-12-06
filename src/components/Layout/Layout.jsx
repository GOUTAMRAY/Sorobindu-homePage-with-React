
import Topbar from "../Topbar/Topbar"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import { Outlet } from "react-router-dom"




const Layout = () => {
  return (
    <>

    <Topbar />
    <Header />

    <Outlet />

    <Footer />

      
    </>
  )
}

export default Layout;













