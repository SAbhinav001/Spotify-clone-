import { useEffect, useState } from "react";

const contact = () => {
  const credentials = { username: "", email: "", password: "" };
  const [Ncredentials, SetNcredentials] = useState(credentials);
  const [error, setError] = useState({});
  const [isValid, setValid] = useState(false)
  const[xyz, setXyx] = useState("");

  const handleForm = (e) => {
    const { name, value } = e.target;
    SetNcredentials({ ...Ncredentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    setError(Validate(Ncredentials));
    setValid(true)
    // if(Object.keys(error).length === 0 && isValid){
    //             setXyx("Success")
    //         }

  };

useEffect(()=>{
    if(Object.keys(error).length === 0 && isValid){
        setXyx("Success")
    }
// error .length

//    else if (Object.keys(error).length != 0 && isValid){
//     setXyx("Not Success")
// }
}, [error])


  const Validate = (values) => {
    const err = {};

    if (values.username.length === 0) [(err.username = "username reuqired")];
    if (!values.email) {
      err.email = "email reuqired";
    }
    if (!values.password) {
      err.password = "passwrod reuqired";
    }
    return err;
  };

  return (
    <div>
      <h1>contact US</h1>
      <pre>{JSON.stringify(Ncredentials, undefined, 2)}</pre>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <br />
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={Ncredentials.username}
            onChange={handleForm}
          />
        </div>
        <h2>{error.username}</h2>
        <div>
          <label>Email</label>
          <br />
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={Ncredentials.email}
            onChange={handleForm}
          />
        </div>
        <h2>{error.email}</h2>
        <div>
          <label>Password</label>
          <br />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={Ncredentials.password}
            onChange={handleForm}
          />
        </div>
        <h2>{error.password}</h2>
        <div>
          <button>Submit</button>
        </div>
        <h1>{xyz}</h1>
      </form>
    </div>
  );
};

export default contact;
