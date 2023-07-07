import { Link } from "react-router-dom";
import { useSelector } from "react-redux"

const Title = () => (

 

  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4"
    />
  </a>
);

const Header = () => {

  const cardItems = useSelector((store) => store.cart.itmes)
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <Link to = "/"><li style={{padding: "10px", margin:"10px"}}>Home</li></Link>
          <Link to = "/about"><li style={{padding: "10px", margin:"10px"}} >About Us</li></Link>
          <Link to = "Contact"><li style={{padding: "10px", margin:"10px"}}>Contact</li></Link>
          <Link to ="Instamart"><li style={{padding: "10px", margin:"10px"}}>InstaMart  {cardItems.length} items</li></Link>
          <Link to ="Game"><li style={{padding: "10px", margin:"10px"}}>Game</li></Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
