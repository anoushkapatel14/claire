import { Link } from "react-router-dom";
import "./Nav.scss";

export default function Nav() {
  return (
    <header className="nav">
    
      <div className="nav-links">
        <Link to="/about" className="nav-links__link">
          About
        </Link>
        <Link to="/events" className="nav-links__link">
          Events
        </Link>
        <Link to="/listen" className="nav-links__link">
          Listen
        </Link>
        <Link to="/teaching" className="nav-links__link">
          Teaching
        </Link>
        <Link to="/contact" className="nav-links__link">
          Contact
        </Link>
      </div>

      <div className="nav-titles">
        <h1 className="nav-titles__main">Claire Ward</h1>

        <p className="nav-titles__sop">Soprano</p>
      </div> 

    </header>
  );
}
