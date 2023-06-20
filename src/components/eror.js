import { useRouteError } from "react-router-dom";

//useroutererror is a hook

const Error = () => {
  const err = useRouteError();
 const {status, statusText} = err;

  return (
    <div>
      <h1 style={{ fontWeight: "bold" , color:"red"}}>OOPS!!</h1>
      <p>Something WENT WRONG</p>
      <h1>{status + ":" + statusText}</h1>
    </div>
  );
};

export default Error;
