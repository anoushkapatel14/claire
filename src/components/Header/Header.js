import "./Header.scss";
import { Link } from "react-router-dom";


export default function Header () {
    return (
        <header className="header">
      <div className="header-titles">
        <Link to="/" className="header-titles__main">Claire Ward</Link>

        <Link to="/" className="header-titles__sop">Soprano</Link>
      </div>

      <div className="header-links">
        <Link to="/about" className="header-links__link">
          About
        </Link>
        <Link to="/events" className="header-links__link">
          Events
        </Link>
        <Link to="/listen" className="header-links__link">
          Listen
        </Link>
        <Link to="/teaching" className="header-links__link">
          Teaching 
        </Link>
        <Link to="/contact" className="header-links__link">
          Contact
        </Link>
      </div>
    </header>
    )
}