import { createContext } from "react";

const users = createContext({
    user1:{
        name:"dummy",
        email:"dummy@gmail.,com"
    }
})

//for debugging

users.displayName ="userContext"

export default users;