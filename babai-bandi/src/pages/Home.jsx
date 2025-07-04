import React from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <div>
      
      {/* Hero Section */}
      <section className="hero">
        <div className="subhead">Visit our Truck Today</div>
        <h1>BABAI BANDI</h1>
        <p>Locally Procured, Environmentally Responsible and Tasty</p>
      </section>

      {/* Features Section */}
      <section className="features">
        <div
          className="feature-box"
          style={{ backgroundImage: "url('./asset/catering_img.png')" }}
        >
          CATERING
        </div>
        <div
          className="feature-box"
          style={{ backgroundImage: "url('./asset/menu_img.png')" }}
        >
          MENU
        </div>
        <div
          className="feature-box"
          style={{ backgroundImage: "url('./asset/about us_img.png')" }}
        >
          ABOUT US
        </div>
      </section>

      {/* Trusted Section */}
      <section className="trusted-section">
        <img src="./asset/content _img.png" alt="trusted-image" />
        <div>
          <h2>TRUSTED AND EXPERIENCED</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            <br />
            <br />
            Sed ut perspiciatis unde omnis iste natus error...
          </p>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-section">
        <div className="quote">
          "Don't just take our word for it; hear it from them instead."
        </div>
        <img src="./asset/testimonial_img.png" alt="testimonial-image" />
        <p>
          The flavors from this Indian food truck "Babai Bandi" in Dallas is a
          delightful journey...
        </p>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div>
          <h3>ALL INQUIRIES:</h3>
          <p>Email: babaibandi@gmail.com</p>
          <p>Phone: +1 940-629-5571</p>
        </div>
        <div>
          <h3>Located in:</h3>
          <p>
            Ministerio De Poder - Asamblea Apostolica De La Fe En Cristo Jesus
          </p>
        </div>
        <div>
          <h3>Address:</h3>
          <p>
            1028 S Welch St, Denton, TX
            <br />
            76201, United States
          </p>
        </div>
      </section>

    </div>
  );
};

export default Home;
