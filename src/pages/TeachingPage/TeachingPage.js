import Header from "../../components/Header/Header";
import "./TeachingPage.scss";
import claire from "../../assets/images/claire-about.png";


export default function TeachingPage() {
  return (
    <>
      <Header />

      <main className="teaching">

          <h1 className="mobile-title">Teaching and Outreach</h1>

        <div className="img">
          <img className="img__img" src={claire} alt="Claire Ward" />
        </div>

        <div className="main-text">
          <h1 className="teaching__title">Teaching and Outreach</h1>
          <p className="teaching__text">
            Claire is an experienced and creative music leader in a variety of
            settings. Since 2019 Claire has worked with Live Music Now on a
            number of projects and residencies in care homes and schools for
            children with additional needs. She is a regular contributor to
            Opera Prelude’s outreach programmes and enjoys curating programmes
            which are accessible and engaging to different audiences.
          </p>

          <p className="teaching__text">
            As a voice instructor, Claire holds a Distinction in the LRAM, the
            vocal pedagogy certificate from the Royal Academy of Music, an MA
            from the Royal Academy of Music and a First Class Honours degree in
            Music and French from Durham University. She has taught across the
            UK, France and Switzerland, for organisations including Brent Music
            Service, Blackheath Conservatoire and Summer Camps at Institut Le
            Rosey. She regularly prepares students for exams, Oxbridge choral
            scholarship auditions, competitions and performances. She enjoys
            helping students grow in confidence, improve technique and explore a
            variety of repertoire and does so with a supportive and tailored
            approach.
          </p>

          <h3 className="teaching__heading">Quotes from students</h3>
          <p className="teaching__text">
            “Claire’s teaching has completely changed the way I sing. Her
            enthusiastic and fresh approach to singing completely opened me up
            and my singing has taken leaps and bounds with her help. I am now a
            choral scholar at St.John’s College, Oxford and her help to prepare
            for the audition process was indispensable.”
          </p>

          <p className="teaching__text">
            “Claire has taught our children piano for many years now. Her
            positive and encouraging approach has meant they have stuck at it
            through secondary school while many of their peers have given up.
            Claire’s calm and approachable exterior, hides a very well
            organised, professional musician. We have been particularly
            impressed with how seamlessly she has adapted to the technological
            requirements of online teaching, including getting our daughter
            through her first online exam during the lockdown”
          </p>
        </div>
      </main>

      {/* <FooterNav /> */}
    </>
  );
}
