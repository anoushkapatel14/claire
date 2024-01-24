import "./FooterNavMobileWhite.scss";
import instagram from "../../assets/images/instagram-white.png";
import { Link } from "react-router-dom";
import twitter from "../../assets/images/twitter-white.png";
import youtube from "../../assets/images/youtube-white.png";

export default function FooterNavMobileWhite() {
  return (
    <footer className="footer-mobile-white">
      <div className="footer-mobile-white__div">
        <Link to="https://www.instagram.com/cgeoward/?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr">
          <img className="footer-mobile-white__logo" src={instagram} alt="instagram logo" />
        </Link>

        <Link to="https://twitter.com/clairegeosop">
          <img className="footer-mobile-white__logo" src={twitter} alt="twitter logo" />
        </Link>

        <Link to="https://www.youtube.com/@clairewardsoprano">
          <img className="footer-mobile-white__logo" src={youtube} alt="youtube logo" />
        </Link>
      </div>
    </footer>
  );
}
