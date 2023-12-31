import { Link } from "react-router-dom";
import "../style.css";

const Navbar = () => {
  return (
    <nav id="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <img width="64" height="64" src="https://img.icons8.com/laces/64/000000/circled-b.png" alt="circled-b"/>
        </div>
        
      <ul type="none" className="navbar">
        <li className="nav-items">
          <Link className="nav-link" to={"/"}  >Home</Link>
        </li>
        <li className="nav-items">
          <Link className="nav-link" to={"/skills"}  >Skills</Link>
        </li>
        <li className="nav-items">
          <Link className="nav-link" to={"/projects"}  >Projects</Link>
        </li>
        <li className="nav-items">
          <Link className="nav-link" to={"/about"}  >About</Link>
        </li>
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;
