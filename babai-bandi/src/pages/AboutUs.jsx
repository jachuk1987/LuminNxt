import React from "react";
import "../styles/styles.css";
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
    <div className="about-us-container">
      {/* Section 1: Intro */}
      <section className="intro-section">
        <div className="intro-text">
          <h1 className="main-heading">About Us</h1>
          <h2 className="sub-heading">How it started!</h2>
          <p>
            Fusce felis semper sed tristique etm velit nes vitae tempor.
            Aliquam suscipit male kusada viverra etiam facilisyses vitae magnis.
            Pellentesque or dolor dui ac cursus porta. Egetu ut bibendum at duis egestas.
            <br /><br />
            Perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
            sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
            adipisci velit.
          </p>
        </div>
        <div className="intro-image">
          <img src={abtImg1} alt="Chefs Cooking" />
        </div>
      </section>

      {/* Section 2: Gallery */}
      <section className="image-gallery">
        <img src={abtImg2} alt="Customer ordering food" />
        <img src={abtImg3} alt="Customer at menu board" />
      </section>

      {/* Section 3: Description Below Gallery */}
      <section className="gallery-description">
        <p>
          Semper sed tristique etm velit nes vitae tempor.
          Aliquam suscipit male kusada viverra etiam facilisyses vitae magnis.
          Pellentesque or dolor dui ac cursus porta. Egetu ut bibendum at duis egestas.
          Perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, eaque ipsa quae ab illo inventore veritatis
          et quasi architecto beatae vitae dicta sunt explicabo.
          <br /><br />
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
          sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit.
          <br /><br />
          Aliquam suscipit male kusada viverra etiam facilisyses vitae magnis.
          Pellentesque or dolor dui ac cursus porta. Egetu ut bibendum at duis egestas.
          Perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam sit aspernatur aut odit aut fugit,
          sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.
        </p>
      </section>

      {/* Section 4: Features */}
      <section className="features-section">
        <div className="feature-box" style={{ backgroundImage: `url(${fresh})` }}>
          <div className="feature-label"></div>
        </div>
        <div className="feature-box" style={{ backgroundImage: `url(${best})` }}>
          <div className="feature-label"></div>
        </div>
        <div className="feature-box" style={{ backgroundImage: `url(${affordable})` }}>
          <div className="feature-label"></div>
        </div>
      </section>

      {/* Section 5: Team */}
      <section className="team-section">
        <h2>Our Professional Team</h2>
        <div className="team-members">
          <img src={team1} alt="Team Member 1" />
          <img src={team2} alt="Team Member 2" />
          <img src={team3} alt="Team Member 3" />
          <img src={team4} alt="Team Member 4" />
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
