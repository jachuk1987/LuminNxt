// src/Components/Menu.jsx
import React from "react";
import "../styles/responsive-Menu.css";
import gallery1 from "../asset/gallery1.png";
import gallery2 from "../asset/gallery2.png";
import gallery3 from "../asset/gallery3.png";
import gallery4 from "../asset/gallery4.png";

function Menu() {
  return (
    <>

      {/* Hero Section */}
      <div className="hero">
        <div className="discover">DISCOVER</div>
        <h1>OUR MENU</h1>
        <p>Curious about how our dishes elevate from good to great? Let's start the tale of our mouthwatering foods.</p>
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
          ["Garden Salad", "Baby beets, goat cheese, carrots, radishes"],
          ["Heirloom Tomato Salad", "with fresh basil and balsamic vinaigrette"],
          ["Papaya Salad", "with lots of chilies and lime"],
          ["Prosciutto & Shaved Pear Salad", "with pecorino, baby spinach, herbs & toasted pine nuts"],
          ["Vegetable Salad", "Pine nuts, roquefort, dates, asian pear, heirloom apples"],
          ["Wild Arugula Salad", "with parmesan cheese, garlic and lemon vinaigrette"],
          ["Kale and Quinoa", "Sunflower seeds, red peppers, parmesan"]
        ].map(([title, desc], i) => (
          <div className="menu-item" key={i}>
            <div>
              <h4>{title}</h4>
              <p>{desc}</p>
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
          {[gallery1, gallery2, gallery3, gallery4].map((img, i) => (
            <img src={img} alt={`Gallery${i + 1}`} key={i} />
          ))}
        </div>
      </div>

    </>
  );
}

export default Menu;
