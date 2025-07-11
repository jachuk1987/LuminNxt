// src/Components/Menu.jsx
import React, { useState } from "react";
import "../styles/styles.css";
import gallery1 from "../asset/gallery1.png";
import gallery2 from "../asset/gallery2.png";
import gallery3 from "../asset/gallery3.png";
import gallery4 from "../asset/gallery4.png";

const tabData = {
  "Main Dishes": [
    { name: "Chicken Biryani", desc: "Spicy rice with tender chicken", price: "$14.99" },
    { name: "Paneer Butter Masala", desc: "Cottage cheese in creamy tomato gravy", price: "$13.49" },
    { name: "Butter Chicken", desc: "Tender chicken in creamy tomato sauce", price: "$15.49" },
    { name: "Veg Pulao", desc: "Flavored rice with mixed vegetables", price: "$11.99" },
    { name: "Chole Bhature", desc: "Chickpeas curry with fried bread", price: "$12.99" },
    { name: "Andhra Chicken Curry", desc: "Hot and spicy regional chicken curry", price: "$14.49" },
    { name: "Mutton Rogan Josh", desc: "Kashmiri lamb curry with rich spices", price: "$16.99" },
  ],
  "Salads": [
    { name: "Garden Salad", desc: "Baby beets, goat cheese, carrots, radishes", price: "$12.99" },
    { name: "Heirloom Tomato Salad", desc: "with fresh basil and balsamic vinaigrette", price: "$12.99" },
    { name: "Papaya Salad", desc: "with lots of chilies and lime", price: "$12.99" },
    { name: "Prosciutto & Shaved Pear Salad", desc: "with pecorino, baby spinach, herbs & toasted pine nuts", price: "$12.99" },
    { name: "Vegetable Salad", desc: "Pine nuts, roquefort, dates, asian pear, heirloom apples", price: "$12.99" },
    { name: "Wild Arugula Salad", desc: "with parmesan cheese, garlic and lemon vinaigrette", price: "$12.99" },
    { name: "Kale and Quinoa", desc: "Sunflower seeds, red peppers, parmesan", price: "$12.99" },
  ],
  "Drinks": [
    { name: "Mango Lassi", desc: "Sweet mango yogurt drink", price: "$4.99" },
    { name: "Masala Chai", desc: "Traditional Indian spiced tea", price: "$3.49" },
    { name: "Lemon Soda", desc: "Refreshing lemon and soda with mint", price: "$2.99" },
    { name: "Filter Coffee", desc: "Authentic South Indian strong coffee", price: "$2.49" },
    { name: "Rose Milk", desc: "Chilled milk infused with rose syrup", price: "$3.99" },
    { name: "Buttermilk", desc: "Spiced yogurt-based cooler", price: "$2.49" },
    { name: "Tender Coconut", desc: "Fresh coconut water straight from the shell", price: "$3.49" },
  ],
  "Desserts": [
    { name: "Gulab Jamun", desc: "Milk-solid dumplings soaked in rose syrup", price: "$5.99" },
    { name: "Rasmalai", desc: "Cheese patties in sweetened milk", price: "$6.49" },
    { name: "Kaju Katli", desc: "Cashew fudge with silver leaf", price: "$5.49" },
    { name: "Mango Kulfi", desc: "Frozen mango milk dessert", price: "$4.99" },
    { name: "Jalebi", desc: "Deep fried syrup-soaked swirls", price: "$4.49" },
    { name: "Payasam", desc: "South Indian sweet milk pudding", price: "$4.99" },
    { name: "Carrot Halwa", desc: "Grated carrots cooked in milk & sugar", price: "$5.49" },
  ],
};

function Menu() {
  const [activeTab, setActiveTab] = useState("Salads");

  return (
    <>
      {/* Hero Section */}
      <div className="menu-hero">
        <div className="discover">DISCOVER</div>
        <h1>OUR MENU</h1>
        <p>Curious about how our dishes elevate from good to great? Let's start the tale of our mouthwatering foods.</p>
      </div>

      {/* Menu Tabs */}
      <div className="menu-tabs">
        {Object.keys(tabData).map((tab) => (
          <span
            key={tab}
            className={activeTab === tab ? "active" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </span>
        ))}
      </div>

      {/* Menu Items */}
      <div className="menu-items">
        {tabData[activeTab].map(({ name, desc, price }, i) => (
          <div className="menu-item" key={i}>
            <div>
              <h4>{name}</h4>
              <p>{desc}</p>
            </div>
            <div className="price">{price}</div>
          </div>
        ))}
      </div>

      {/* Gallery */}
      <div className="gallery">
        <h2>GALLERY</h2>
        <p>Photos of our food and our events</p>
        <div className="gallery-images">
          {[gallery1, gallery2, gallery3, gallery4].map((img, i) => (
            <img src={img} alt={`Gallery ${i + 1}`} key={i} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Menu;
