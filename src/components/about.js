// use rafce for genrate template
import {Link, Outlet} from "react-router-dom"

const about = () => {
  return (
    <div>

        <h1>About</h1>
        <p>{" "}Hey, Welcome to routers</p>
        <Outlet /> 
        {/* or jiust use component here */}

        <Link to="profile"><button>Click here</button></Link>

    </div>
    
  )
}

export default about;