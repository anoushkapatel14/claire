import FooterNav from "../../components/FooterNav/FooterNav";
import Nav from "../../components/Nav/Nav";
import "./HomePage.scss";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="background-hero-image"></div>
        
        <Nav />
        <FooterNav />
      </section>
    </>
  );
}
