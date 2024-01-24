import Header from "../../components/Header/Header";
import FooterNav from "../../components/FooterNav/FooterNav";
import "./AboutPage.scss";
import claire from "../../assets/images/claire-teaching3.png";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="about">
        <div className="text-box">
          <h1 className="about__title">ABOUT</h1>

          <div className="mobile-img-div">
            <img className="mobile-img" src={claire} alt="Claire Ward" />
          </div>

          <p>
            Claire is a British/Irish soprano with a varied career as both a
            soloist and an ensemble singer. Claire is City Music Foundation
            Artist 2022-2024 as well as a young artist with Opera Prelude and a
            performer on the Live Music Now programme. Recent highlights include
            making her debut at Queen Elizabeth Hall with the Orchestra of the
            Age of Enlightenment conducted by John Wilson, and at Cadogan Hall
            in Bach’s B Minor Mass with Thames Philharmonic Choir.
          </p>

          <p>
            <span className="bold">A creative collaborator,</span> in January 2023, Claire devised Handel’s
            Europe, a programme of Handel Cantatas and German Arias presented in
            a chamber format. Through this project, The Portrait Players was
            formed. The ensemble brings 17th and 18th century music to modern
            audiences with engaging programmes informed by historical
            characters. The group continues to grow in popularity, recently
            making its debut at St. Martin-in-the-fields and is a member of the
            Brighton Early Music Festival Live! Scheme for 2023-2024. You can
            find out more about The Portrait Players here.
            https://theportraitplayers.co.uk
          </p>

          <p>
            <span className="bold"> As an ensemble singer, </span>Claire is a 2023-2024 Monteverdi apprentice,
            joining The Monteverdi Choir in tours across Europe, working with
            John Eliot Gardiner and Dinis Sousa. Further ensemble work includes
            projects with The Choir of the OAE (John Wilson), The Gabrieli
            Consort (Paul McCreesh), Britten Sinfonia Voices (Eamon Dougan) and
            Figure Ensemble (Freddie Waxman).
          </p>

          <p>
            <span className="bold">On the concert platform,</span> Claire performed Bach Cantatas as part of
            the Snape Maltings Proms 2019, conducted by Philippe Herreweghe and
            as a student, regularly performed in the Kohn Foundation/RAM Bach
            Cantata series with solo highlights of Bach’s Wedding Cantata BVW
            202 in June 2017 and Mass in F major in October 2018, as well as
            Bach’s Matthew Passion with Trevor Pinnock. Further concert
            highlights include Poulenc Gloria, Brahms Requiem, Smyth Mass in D,
            Macdowall Magnificat, Haydn Nelson Mass as well as Mozart Exultate
            Jubilate and Mass in C Minor in De Montfort Hall, Leicester.
          </p>

          <p>
           <span className="bold">An instinctive linguist,</span>  Claire made her Oxford Song Festival debut
            with pianist Guy Murgatroyd in 2019, returning to the festival in
            2021. She has a growing interest in translation, both of song and
            opera, since her studies at the Conservatoire de Toulouse and
            regularly creates her own translations of songs and arias for
            concert programmes.
          </p>
          <p>
            <span className="bold">In the world of opera</span> Claire has worked with companies including
            Opera Holland Park, The Grange Festival and Nevill Holt Opera. At
            Opera Holland Park she performed the role of Frantik in The Cunning
            Little Vixen and in the chorus of Tchaikovsky’s Eugene Onegin. In
            2019 she understudied the role of Susanna in Le Nozze di Figaro at
            The Grange Festival, and during the same year sang the role of Venus
            in John Blow’s Venus and Adonis with the Royal Academy of Music.
          </p>

          <p>
            Claire is a graduate of the Royal Academy of Music (MA Vocal
            Studies, DipRAM, LRAM), Durham University (BA French and Music), and
            the Conservatoire à Rayonnement Régional de Toulouse (singing and
            piano accompaniment). In November 2023 she was a semi-finalist in
            the Concours Corneille International Baroque Competition, was a
            Britten Pears Young Artist for 2019, a semi-finalist in the Somerset
            Song Prize 2017 and a finalist in the Oxford Lieder Young Artist
            Platform 2017.
          </p>

          <p>
            When not singing, Claire is an amateur triathlete and loves to swim
            in open (but not too cold) water.
          </p>
        </div>
        <div className="img-div">
          <img className="img-div__img" src={claire} alt="Claire" />{" "}
        </div>
      </main>
      <FooterNav />
    </>
  );
}
