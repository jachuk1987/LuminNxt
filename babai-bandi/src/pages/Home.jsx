import React from "react";
import "../styles/responsive-Home.css";

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
          style={{ backgroundImage: "url('./asset/catering_img.png')", height: 400 }}
        >
          CATERING
        </div>
        <div
          className="feature-box"
          style={{ backgroundImage: "url('./asset/menu_img.png')", height: 400 }}
        >
          MENU
        </div>
        <div
          className="feature-box"
          style={{ backgroundImage: "url('./asset/about us_img.png')", height: 400 }}
        >
          ABOUT US
        </div>
      </section>

      {/* Trusted Section */}
      <section className="trusted-section">
        <div className="trusted-image-wrapper">
          <img src="./asset/content _img.png" alt="trusted" className="trusted-img" />
        </div>
        <div className="trusted-content">
          <h2>TRUSTED AND EXPERIENCED</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
            in culpa qui officia deserunt mollit anim id est laborum.
            <br /><br />
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
            veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
            porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
          </p>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-section">
        <div className="testimonial-container">
          <div className="testimonial-left">
            <h2>
              “Don’t just <br />
              take our <br />
              word for it; <br />
              hear it from <br />
              them <br />
              instead.”
            </h2>
          </div>

          <div className="testimonial-right">
            <div className="testimonial-box">
              <img src="./asset/testimonial_img.png" alt="user" />
              <p>
                “The flavors from this Indian food truck ‘Babai Bandi’ in Dallas is a
                delightful journey through authentic spices and recipes! Every bite is
                a celebration of taste that keeps me coming back for more!”
              </p>
            </div>
          </div>
        </div>
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
