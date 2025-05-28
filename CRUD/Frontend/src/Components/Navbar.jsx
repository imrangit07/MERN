import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <span className="navbar-separator">|</span>
      <Link to="/insert">Insert</Link>
      <span className="navbar-separator">|</span>
      <Link to="/display">Display</Link>
      <span className="navbar-separator">|</span>
      <Link to="/update">Update</Link>
      <span className="navbar-separator">|</span>
      <Link to="/search">Search</Link>
    </nav>
  );
};

export default Navbar;