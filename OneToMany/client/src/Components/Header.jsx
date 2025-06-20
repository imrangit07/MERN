import { Link } from "react-router-dom";
import '../Css/Style.css'; 

const Header = () => {
    return (
        <div className="header-container">
            <Link to="/" className="nav-link">Home</Link>
            <span className="nav-separator">|</span>
            <Link to="/save" className="nav-link">User Save</Link>
            <span className="nav-separator">|</span>
            <Link to="/display" className="nav-link">Display</Link>
        </div>
    )
}

export default Header;