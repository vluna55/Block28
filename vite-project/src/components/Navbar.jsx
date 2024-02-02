import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navbar">
      <Link to={`/home`}>Home</Link>

      <Link to={`/blue`}>Blue</Link>

      <Link to={`/red`}>Red</Link>

      <Link to={`/green`}>Green</Link>

      <Link to={`/orange`}>Orange</Link>
    </div>
  );
};

export default Navbar;
