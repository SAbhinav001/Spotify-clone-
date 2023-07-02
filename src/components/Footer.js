import { useContext } from "react";
import userContext from "../utils/userContext"


const Footer = () => {
    const { user1} = useContext(userContext)
    return(
    <h3>{user1.name} + {user1.email}</h3>
    )}

export default Footer;