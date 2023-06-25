import { useState, useEffect } from "react";

const isOnline = () => {
  const [status, setStatus] = useState(true);

  const handleOnline = () => {
    setStatus(false);
  };
  const handleOffline = () => {
    setStatus(true);
  };

  useEffect(() => {
    window.addEventListener("offline", handleOnline);
    window.addEventListener("online", handleOffline);

    return () =>{
        window.removeEventListener("offline" , handleOffline)
        window.removeEventListener("online" , handleOnline)
    }
  }, []);


  return status;
};
export default isOnline;
