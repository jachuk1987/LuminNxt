import React from "react";

const Menu = () => {
  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Roboto', sans-serif;
        }

        body {
          background-color: #fff;
          color: #000;
        }

        .top-bar {
          background-color: #310004;
          height: 53px;
          color: white;
          font-size: 12px;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding: 0 100px;
          gap: 10px;
        }

        .header {
          background-color: #8f000c;
          height: 230px;
          position: relative;
        }

        .logo {
          position: absolute;
          top: 0;
          left: 125px;
          width: 198px;
          height: 230px;
          object-fit: cover;
        }

        .nav {
          position: absolute;
          top: 118px;
          right: 125px;
          display: flex;
          gap: 30px;
          align-items: center;
        }

        .nav a {
          color: white;
          font-size: 16px;
          font-weight: 500;
          text-decoration: none;
        }

        .nav .active {
          font-weight: bold;
          text-decoration: underline;
        }

        .hero {
          background: url('https://c.animaapp.com/hykmc6c1/img/hero-bg.png') center/cover no-repeat;
          text-align: center;
          color: white;
          padding: 100px 20px;
          position: relative;
        }

        .hero .discover {
          background-color: red;
          padding: 6px 20px;
          display: inline-block;
          margin-bottom: 10px;
          font-weight: bold;
        }

        .hero h1 {
          font-size: 48px;
        }

        .hero p {
          margin-top: 10px;
          font-size: 18px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .menu-tabs {
          display: flex;
          justify-content: center;
          gap: 40px;
          margin: 40px 0 10px;
          font-weight: bold;
        }

        .menu-tabs span {
          cursor: pointer;
        }

        .menu-tabs .active {
          color: white;
          background-color: red;
          padding: 6px 16px;
          border-radius: 4px;
        }

        .menu-items {
          max-width: 900px;
          margin: auto;
          padding: 20px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px 40px;
        }

        .menu-item {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          border-bottom: 1px solid #ddd;
          padding-bottom: 10px;
        }

        .menu-item h4 {
          font-weight: 500;
        }

        .menu-item p {
          font-size: 13px;
          color: #555;
        }

        .menu-item .price {
          font-weight: bold;
          white-space: nowrap;
        }

        .gallery {
          text-align: center;
          padding: 60px 20px;
        }

        .gallery h2 {
          font-size: 32px;
          margin-bottom: 10px;
        }

        .gallery p {
          font-size: 16px;
          margin-bottom: 40px;
          color: #555;
        }

        .gallery-images {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .gallery-images img {
          width: 180px;
          height: 180px;
          object-fit: cover;
          border-radius: 10px;
        }

        .footer {
          background-color: #8f000c;
          color: white;
          padding: 60px 20px;
          text-align: center;
        }

        .footer button {
          padding: 15px 40px;
          background: transparent;
          color: white;
          border: 2px solid white;
          font-weight: bold;
          margin-bottom: 20px;
          cursor: pointer;
        }

        .footer nav a {
          color: white;
          margin: 0 10px;
          text-decoration: none;
        }

        .footer nav a:hover {
          text-decoration: underline;
        }
      `}</style>

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
          { title: "Garden Salad", desc: "Baby beets, goat cheese, carrots, radishes" },
          { title: "Heirloom Tomato Salad", desc: "with fresh basil and balsamic vinaigrette" },
          { title: "Papaya Salad", desc: "with lots of chilies and lime" },
          { title: "Prosciutto & Shaved Pear Salad", desc: "with pecorino, baby spinach, herbs & toasted pine nuts" },
          { title: "Vegetable Salad", desc: "Pine nuts, roquefort, dates, asian pear, heirloom apples" },
          { title: "Wild Arugula Salad", desc: "with parmesan cheese, garlic and lemon vinaigrette" },
          { title: "Kale and Quinoa", desc: "Sunflower seeds, red peppers, parmesan" },
        ].map((item, index) => (
          <div className="menu-item" key={index}>
            <div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
            <div className="price">$12.99</div>
          </div>
        ))}
      </div>

      {/* Gallery */}
      <div className="gallery">
        <h2>GALLERY</h2>
        <p>Photos of our food and our events</p>
        <div className="gallery-images">
          {[1, 2, 3, 4].map((i) => (
            <img key={i} src={`./asset/gallery${i}.png`} alt={`Gallery${i}`} />
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
    </>
  );
};

export default Menu;
