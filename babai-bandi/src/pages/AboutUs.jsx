import React from "react";
import "../styles/AboutUs.css";
import abtImg1 from "../asset/abt image 1.png";
import abtImg2 from "../asset/abt image 2.png";
import abtImg3 from "../asset/abt image 3.png";
import fresh from "../asset/fresh.png";
import best from "../asset/best.png";
import affordable from "../asset/affordable.png";
import team1 from "../asset/team1.png";
import team2 from "../asset/team2.png";
import team3 from "../asset/team3.png";
import team4 from "../asset/team4.png";

const AboutUs = () => {
  return (
    <>

      <div className="content">
        <h1>About Us</h1>
        <h2>How it started!</h2>
        <p>
          Fusce felis semper sed tristique etm velit nes vitae tempor. Vivamus tristique et malesuada velit.
          <br /><br />
          Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
        </p>
        <img className="content-img" src={abtImg1} alt="About" />
      </div>

      <div className="gallery">
        <img src={abtImg2} alt="Gallery1" />
        <img src={abtImg3} alt="Gallery2" />
      </div>

      <div className="gallery-desc">
        Semper sed tristique etm velit nes vitae tempor. Fusce felis semper.
        <br /><br />
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
        <br /><br />
        Aliquam suscipit malesuada viverra etiam fermentum est at fringilla.
      </div>

      <div className="features">
        <div style={{ backgroundImage: `url(${fresh})` }}></div>
        <div style={{ backgroundImage: `url(${best})` }}></div>
        <div style={{ backgroundImage: `url(${affordable})` }}></div>
      </div>

      <div className="team">
        <h2>Our Professional Team</h2>
        <div className="team-members">
          <img src={team1} alt="Team" />
          <img src={team2} alt="Team" />
          <img src={team3} alt="Team" />
          <img src={team4} alt="Team" />
        </div>
      </div>

    </>
  );
};

export default AboutUs;
