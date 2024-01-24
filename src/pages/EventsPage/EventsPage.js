import React, { useState } from "react";
import Header from "../../components/Header/Header";
import "./EventsPage.scss";
import claire2 from "../../assets/images/claire-events-cropped.png";

export default function EventsPage() {
  const [showTable, setShowTable] = useState(false);

  const toggleTableVisibility = () => {
    setShowTable(!showTable);
  };

  return (
    <>
      <Header />

      <main className="events">
        <div className="table-title-div">
          <h1 className="events__title">UPCOMING EVENTS</h1>

          <div className="events__table">
            <table className="table">
              <tr>
                <th className="table__headings">Date</th>
                <th className="table__headings">Event</th>
                <th className="table__headings">Location</th>
                <th className="table__headings">Tickets</th>
              </tr>
              <tr>
                <td className="table__details">13th February 2024, 7.30pm</td>
                <td className="table__details">
                  Soloist: Recital: A Madness Most Discreet, with The Portrait
                  Players
                </td>
                <td className="table__details">
                  Music at 22 Mansfield Street, London
                </td>
                <td className="table__details--last">Further details tbc</td>
              </tr>
              <tr>
                <td className="table__details">
                  29th February – March 3rd 2024{" "}
                </td>
                <td className="table__details">
                  Choir: Brahms’ Requiem with The Monteverdi Choir and Dinis
                  Sousa
                </td>
                <td className="table__details">The Concertgebouw, Amsterdam</td>
                <td className="table__details--last">
                  <a className="table__link"
                    href="https://monteverdi.co.uk/brahms-ein-deutsches-requiem"
                    target="_blank"
                  >
                    https://monteverdi.co.uk/brahms-ein-deutsches-requiem
                  </a>
                </td>
              </tr>

              <tr>
                <td className="table__details">12th March 2024, 1pm</td>
                <td className="table__details">
                  Soloist: Recital: Les Femmes Ilustres, with The Portrait
                  Players
                </td>
                <td className="table__details">Northumberland University </td>
                <td className="table__details--last">Further details tbc</td>
              </tr>

              <tr>
                <td className="table__details">5th-7th April 2024 </td>
                <td className="table__details">
                  Belinda in Dido and Aenaes with The Bellot Ensemble
                </td>
                <td className="table__details">
                  Overstrand Festival of Early Music, Norfolk{" "}
                </td>
                <td className="table__details--last">
                  <a className="table__link"
                  href="https://www.tofem.uk/concerts" target="_blank">
                    https://www.tofem.uk/concerts
                  </a>
                </td>
              </tr>

              <tr>
                <td className="table__details">18th April 2024 </td>
                <td className="table__details">
                  Choir: Final Recital – Monteverdi Choir Apprentice Scheme
                  2023-2024{" "}
                </td>
                <td className="table__details">Venue tbc </td>
                <td className="table__details--last">Further details tbc</td>
              </tr>

              <tr>
                <td className="table__details">23rd April 2024, 7.30pm </td>
                <td className="table__details">
                  Soloist: Recital: ‘Shakespeare in song’ with The Portrait
                  Players
                </td>
                <td className="table__details">
                  Chenies Manor House, Amersham Music Festival{" "}
                </td>
                <td className="table__details--last">
                  <a className="table__link"
                  href="https://www.amershamfestival.org" target="_blank">
                    https://www.amershamfestival.org
                  </a>
                </td>
              </tr>

              <tr>
                <td className="table__details">7th May 2024, 12.30pm </td>
                <td className="table__details">
                  Soloist: Recital: Notes from the Silence: Italian Women
                  Composers of the 17th Century with The Portrait Players
                </td>
                <td className="table__details">
                  Stone Hall, West Horsley: Surrey Hills Music Festival{" "}
                </td>
                <td className="table__details--last">
                  <a className="table__link"
                  href="https://shimf.co.uk" target="_blank">
                    https://shimf.co.uk
                  </a>
                </td>
              </tr>
            </table>
          </div>

          <div className="btn-div">
            <button
              className="events__previous-button"
              onClick={toggleTableVisibility}
            >
              Click for previous events
            </button>
          </div>

          <div
            className={`events__previous-events-table ${
              showTable ? "visible" : "hidden"
            }`}
          >
            <table className="table">
              <tr>
                <th className="table__headings">Date</th>
                <th className="table__headings">Event</th>
                <th className="table__headings">Location</th>
              </tr>
              <tr>
                <td className="table__details">25th November 2023</td>
                <td className="table__details">
                  Soloist: A Madness Most Discreet with The Portrait Players,
                  The Workshop Series
                </td>
                <td className="table__details--last">Cliffe Hall, Lewes.</td>
              </tr>
              <tr>
                <td className="table__details">24th November 2023 </td>
                <td className="table__details">
                  Soloist: Charms and Torments of Love with Opera Prelude, The
                  Portrait Players and Xavier Hetherington (tenor)
                </td>
                <td className="table__details--last">
                  Christchuch, Henley on Thames.
                </td>
              </tr>

              <tr>
                <td className="table__details">11th November 2023 </td>
                <td className="table__details">
                  Soloist: Recital with City Music Foundation, and The Portrait
                  Players
                </td>
                <td className="table__details--last">
                  St. Nicholas Church, Bookham.
                </td>
              </tr>

              <tr>
                <td className="table__details">3rd November 2023 </td>
                <td className="table__details">
                  Soloist: Recital with City Music Foundation, and The Portrait
                  Players
                </td>
                <td className="table__details--last">
                  St. Martin-in-the-fields, London
                </td>
              </tr>

              <tr>
                <td className="table__details">21st October 2023</td>
                <td className="table__details">
                  Soloist: Brighton Early Music Festival, BREMF Live! Showcase
                  with The Portrait Players{" "}
                </td>
                <td className="table__details--last">
                  St. George’s Church, Brighton
                </td>
              </tr>

              <tr>
                <td className="table__details">
                  22nd August-2nd September 2023
                </td>
                <td className="table__details">
                  Choir: Berlioz – Les Troyens, The Monteverdi Choir conducted
                  by Dinis Sousa
                </td>
                <td className="table__details--last">
                  Festival Berlioz, La Cote St-André, Salzburger Festspiele,
                  Opéra Royal – Chateau de Versailles, Berliner Festspiele, BBC
                  Proms Royal Albert Hall.
                </td>
              </tr>

              <tr>
                <td className="table__details">29th July 2023 </td>
                <td className="table__details">
                  Choir: Elgar’s Dream of Gerontius with The Gabrieli Consort{" "}
                </td>
                <td className="table__details--last">
                  Fairfield Halls, Croydon
                </td>
              </tr>

              <tr>
                <td className="table__details">14th June 2023 </td>
                <td className="table__details">
                  Soloist: 900 Years of Music and Medicine with City Music
                  Foundation
                </td>
                <td className="table__details--last">
                  The Great Hall, Barts Heritage, London
                </td>
              </tr>

              <tr>
                <td className="table__details">7th & 8th June 2023 </td>
                <td className="table__details">
                  Sacharissa in Princess Ida, Or Castle Adamant. Orchestra of
                  the Age of Enlightenment conducted by John Wilson
                </td>
                <td className="table__details--last">
                  Queen Elizabeth Hall, London
                </td>
              </tr>

              <tr>
                <td className="table__details">3rd June 2023 </td>
                <td className="table__details">
                  Soloist: Charms and Torments of Love with Kristiina Watt
                  (theorbo) and Xavier Hetherington (tenor)
                </td>
                <td className="table__details--last">Private Event</td>
              </tr>

              <tr>
                <td className="table__details">April 2023 </td>
                <td className="table__details">
                  Choir: Bach B Minor Mass with The Monteverdi Choir
                </td>
                <td className="table__details--last">
                  The Sage – Gateshead, Bozar – Brussels, Philharmonie de
                  Luxembourg, Alte Opera – Frankfurt, St-Martin-in-the-fields,
                  London
                </td>
              </tr>

              <tr>
                <td className="table__details">25th March 2023, 7pm </td>
                <td className="table__details">
                  Soprano soloist: Bach: B Minor Mass with Thames Philharmonic
                  Choir{" "}
                </td>
                <td className="table__details--last">Cadogan Hall, London</td>
              </tr>

              <tr>
                <td className="table__details">
                  14th & 15th March 2023, 7.30pm{" "}
                </td>
                <td className="table__details">
                  Soprano soloist: THIS IS MY BODY: Membra Jesu Nostri with
                  Figure Ensemble, Swiss Church, London
                </td>
                <td className="table__details--last">Swiss Church, London</td>
              </tr>

              <tr>
                <td className="table__details">7th February 2023, 6.30pm </td>
                <td className="table__details">
                  Soprano soloist: Charms and Torments of Love, the intimacy of
                  Baroque with Opera Prelude
                </td>
                <td className="table__details--last">Christchuch, Chelsea</td>
              </tr>

              <tr>
                <td className="table__details">4th February 2023, 7pm </td>
                <td className="table__details">
                  Soprano soloist: Handel’s Europe with The Portrait Players
                </td>
                <td className="table__details--last">
                  University College Chapel, Oxford
                </td>
              </tr>

              <tr>
                <td className="table__details">28th January 2023, 7pm </td>
                <td className="table__details">
                  Soprano soloist: Handel’s Europe with The Portrait Players{" "}
                </td>
                <td className="table__details--last">
                  St. George’s Westcombe Park, London
                </td>
              </tr>

              <tr>
                <td className="table__details">18th January 2023, 1pm </td>
                <td className="table__details">
                  Soprano soloist: Handel’s Europe with The Portrait Players{" "}
                </td>
                <td className="table__details--last">
                  St. Bart’s Great Hall, London
                </td>
              </tr>

              <tr>
                <td className="table__details">10th December 2022, 7.30pm </td>
                <td className="table__details">
                  Soprano soloist: Poulenc Gloria with Thames Philharmonic Choir{" "}
                </td>
                <td className="table__details--last">
                  All Saints Church, Kingston
                </td>
              </tr>

              <tr>
                <td className="table__details">4th December 2022, 3pm </td>
                <td className="table__details">
                  Soprano soloist and choir: Handel Messiah with Nevill Holt
                  Opera
                </td>
                <td className="table__details--last">
                  The Monastery, Manchester
                </td>
              </tr>

              <tr>
                <td className="table__details">3rd December 2022, 7pm </td>
                <td className="table__details">
                  Soprano soloist and choir: Handel Messiah with Nevill Holt
                  Opera
                </td>
                <td className="table__details--last">Nevill Holt Theatre</td>
              </tr>

              <tr>
                <td className="table__details">1st December 2022, 6pm </td>
                <td className="table__details">
                  Soprano soloist: Opera Prelude Christmas Schools’ Concert
                </td>
                <td className="table__details--last">Christchurch, Henley</td>
              </tr>

              <tr>
                <td className="table__details">12th November 2022, 7pm </td>
                <td className="table__details">
                  Soprano soloist and choir: Charpentier Messe pour les
                  trépassés and Fauré Requiem with Figure Ensemble{" "}
                </td>
                <td className="table__details--last">Union Chapel, London</td>
              </tr>

              <tr>
                <td className="table__details">21st October 2022, 11am</td>
                <td className="table__details">
                  Lecture Recital: Lost In Translation with Opera Prelude
                </td>
                <td className="table__details--last">Christchurch, Henley</td>
              </tr>
            </table>
          </div>
        </div>

        <div className="main-img-div">
          <img className="events__img" src={claire2} alt="Claire" />
        </div>
      </main>
    </>
  );
}
