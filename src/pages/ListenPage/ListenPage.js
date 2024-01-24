import ListenHeader from "../../components/ListenHeader/ListenHeader";
import "./ListenPage.scss";
import handel from "../../assets/audio/handel.mp3";
import sondheim from "../../assets/audio/sondheim.mp3";
import ReactPlayer from "react-player";
import { useState, useRef } from "react";
import handelImg from "../../assets/images/handel.jpg";
import sondheimImg from "../../assets/images/sondheim.jpg";
import FooterNav from "../../components/FooterNav/FooterNav";

const ListenPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef();

  const handleClick = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <ListenHeader />

      <main className="listen">
        <h1 className="listen__title">LISTEN</h1>

        <section className="audio">
          <div className="audio-player">
            <img
              className="audio-img"
              src={handelImg}
              alt="Handel"
              onClick={handleClick}
            />
            <ReactPlayer url={handel} playing={isPlaying} ref={playerRef} />
          </div>

          <div className="audio-player">
            <img
              className="audio-img"
              src={sondheimImg}
              alt="Handel"
              onClick={handleClick}
            />
            <ReactPlayer url={sondheim} playing={isPlaying} ref={playerRef} />
          </div>
        </section>

        {/* <section> */}

        <div className="video-and-description-mobile">
          <iframe
            className="listen__video--top"
            width="360"
            height="215"
            src="https://www.youtube.com/embed/wHwnQIxDlls?si=C8owbKP9N2LPEzuu?controls=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
            allowFullScreen
          ></iframe>
        </div>

        <div className="video-and-description-tablet">
          <iframe
            className="listen__video--top"
            width="760"
            height="515"
            src="https://www.youtube.com/embed/wHwnQIxDlls?si=C8owbKP9N2LPEzuu?controls=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
            allowFullScreen
          ></iframe>
        </div>

        <div className="video-and-description-mobile">
          <iframe
            width="360"
            height="215"
            src="https://www.youtube.com/embed/EUS0OJFNIAU?si=VwnK45bbvcQMGpMz"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>

        <div className="video-and-description-tablet">
          <iframe
            width="760"
            height="515"
            src="https://www.youtube.com/embed/EUS0OJFNIAU?si=Cr6PMWCFyOq30RlW"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>

        <div className="video-and-description-mobile">
          <iframe
            width="360"
            height="215"
            src="https://www.youtube.com/embed/5wApb61GNIk?si=FXMU6iVTNIeU4APf"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>

        <div className="video-and-description-tablet">
          <iframe
            className="listen__video"
            width="760"
            height="515"
            src="https://www.youtube.com/embed/5wApb61GNIk?si=dUBulD8eU8mbeEml?controls=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
            allowFullScreen
          ></iframe>
        </div>

        {/* </div> */}

        {/* </section> */}
      </main>
      <FooterNav />
    </>
  );
};

export default ListenPage;
