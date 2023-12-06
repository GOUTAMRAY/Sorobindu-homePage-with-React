
import Home from "../pages/home/Home"
import About from "../pages/about/About"
import Team from "../pages/team/Team"

import Blog from "../pages/blog/Blog"
import Contact from "../pages/contact/Contact";
import Layout from "../components/Layout/Layout";


// create public router 
const publicRouter = [
  {
    element: <Layout />,
    children : [
      {
        path : "/",
        element: <Home />
      },
      {
        path : "/about",
        element: <About />
      },
      {
        path : "/team",
        element: <Team />
      },
      
    
      {
        path : "/blog",
        element: <Blog />
      },
      {
        path : "/contact",
        element: <Contact />
      },
    ]
  }
  
]


// export 
export default publicRouter;










