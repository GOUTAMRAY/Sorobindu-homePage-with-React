
import Layout from "../components/Layout/Layout";
import Admin from "../pages/admin/Admin"
import Category from "../pages/admin/pages/Category";
import Post from "../pages/admin/pages/Post";
import Role from "../pages/admin/pages/Role";
import User from "../pages/admin/pages/User";

// create private router 
const privateRouter = [
 {
  element : <Layout />,
  children : [
    {
      path : "/admin",
      element: <Admin />,
      children : [
        {
          path : "user",
          element : <User />
        },
        {
         path: "post",
         element : <Post />
        },
        {
          path : "category",
          element: <Category />    
        },
        {
          path : "role",
          element : <Role />
        }
      ]

      
    },
  ]
 }

]


// export 
export default privateRouter;














