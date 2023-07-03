import { createContext } from "react";
import { useState } from "react";

export const users = createContext();

export const UserContext = (props) => {

  const [user, setUser] = useState({
    name: "abhinav",
    email: "dummy@gmial.com",
  });

  return (
    <users.Provider value={{
        user:user,
        setUser:setUser,
    }}>
    {props.children}
    </users.Provider>
  )
};
