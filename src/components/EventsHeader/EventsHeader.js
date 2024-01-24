import "./EventsHeader.scss";
import { Link } from "react-router-dom";


export default function EventsHeader () {
    return (
        <header className="events-header">
      <div className="events-header-titles">
        <Link to="/" className="events-header-titles__main">Claire Ward</Link>

        <Link to="/" className="events-header-titles__sop">Soprano</Link>
      </div>

      <div className="events-header-links">
        <Link to="/about" className="events-header-links__link">
          About
        </Link>
        <Link to="/events" className="events-header-links__link">
          Events
        </Link>
        <Link to="/listen" className="events-header-links__link">
          Listen
        </Link>
        <Link to="/teaching" className="events-header-links__link">
          Teaching
        </Link>
        <Link to="/contact" className="events-header-links__link">
          Contact
        </Link>
      </div>
    </header>
    )
}