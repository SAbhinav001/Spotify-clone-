import { useContext } from "react";
import {users} from "../utils/userContext"


const Footer = () => {
   const {user} = useContext(users);
    return(
       
      <div>
        <h2>{user.name}</h2>
        <h2>footer</h2>
        </div>  
    
    )}

export default Footer;