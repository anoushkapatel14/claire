import "./ListenHeader.scss";
import { Link } from "react-router-dom";


export default function ListenHeader () {
    return (
        <header className="listen-header">
      <div className="listen-header-titles">
        <Link to="/" className="listen-header-titles__main">Claire Ward</Link>

        <Link to="/" className="listen-header-titles__sop">Soprano</Link>
      </div>

      <div className="listen-header-links">
        <Link to="/about" className="listen-header-links__link">
          About
        </Link>
        <Link to="/events" className="listen-header-links__link">
          Events
        </Link>
        <Link to="/listen" className="listen-header-links__link">
          Listen
        </Link>
        <Link to="/teaching" className="listen-header-links__link">
          Teaching
        </Link>
        <Link to="/contact" className="listen-header-links__link">
          Contact
        </Link>
      </div>
    </header>
    )
}