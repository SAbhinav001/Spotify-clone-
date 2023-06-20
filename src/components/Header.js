import { Link } from "react-router-dom";

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


  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <Link to = "/"><li>Home</li></Link>
          <Link to = "/about"><li>About Us</li></Link>
          <li><Link to = "/Contact">Contact</Link></li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
