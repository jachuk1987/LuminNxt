import React from "react";
import "./Menu.css"; // Alternatively, move styles to this file

const Menu = () => {
  return (
    <div>
      {/* Top Bar */}
      <div className="top-bar">
        +1 940-629-5571 &nbsp; | &nbsp; Facebook &nbsp; | &nbsp; Instagram
      </div>

      {/* Header */}
      <div className="header">
        <img className="logo" src="./asset/logo.png" alt="Babai Bandi Logo" />
        <div className="nav">
          <a href="home.html">Home</a>
          <a href="about.html">About Us</a>
          <a href="location.html">Location</a>
          <a href="menu.html" className="active">Catering</a>
        </div>
      </div>

      {/* Hero Section */}
      <div className="hero">
        <div className="discover">DISCOVER</div>
        <h1>OUR MENU</h1>
        <p>
          Curious about how our dishes elevate from good to great? Let's start
          the tale of our mouthwatering foods.
        </p>
      </div>

      {/* Menu Tabs */}
      <div className="menu-tabs">
        <span>Main Dishes</span>
        <span className="active">Salads</span>
        <span>Drinks</span>
        <span>Desserts</span>
      </div>

      {/* Menu Items */}
      <div className="menu-items">
        {[
          {
            title: "Garden Salad",
            desc: "Baby beets, goat cheese, carrots, radishes",
          },
          {
            title: "Heirloom Tomato Salad",
            desc: "with fresh basil and balsamic vinaigrette",
          },
          {
            title: "Papaya Salad",
            desc: "with lots of chilies and lime",
          },
          {
            title: "Prosciutto & Shaved Pear Salad",
            desc: "with pecorino, baby spinach, herbs & toasted pine nuts",
          },
          {
            title: "Vegetable Salad",
            desc: "Pine nuts, roquefort, dates, asian pear, heirloom apples",
          },
          {
            title: "Wild Arugula Salad",
            desc: "with parmesan cheese, garlic and lemon vinaigrette",
          },
          {
            title: "Kale and Quinoa",
            desc: "Sunflower seeds, red peppers, parmesan",
          },
        ].map((item, idx) => (
          <div className="menu-item" key={idx}>
            <div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
            <div className="price">$12.99</div>
          </div>
        ))}
      </div>

      {/* Gallery Section */}
      <div className="gallery">
        <h2>GALLERY</h2>
        <p>Photos of our food and our events</p>
        <div className="gallery-images">
          {[1, 2, 3, 4].map((i) => (
            <img
              key={i}
              src={`./asset/gallery${i}.png`}
              alt={`Gallery${i}`}
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <button>REQUEST A QUOTE</button>
        <nav>
          <a href="home.html">Home</a>
          <a href="about.html">About Us</a>
          <a href="location.html">Location</a>
          <a href="menu.html">Catering</a>
          <a href="#">Contact Us</a>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
