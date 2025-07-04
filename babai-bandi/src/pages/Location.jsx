import React from 'react';
import '../styles/Location.css';

function Location() {
  return (
    <div>

      {/* Map */}
      <img className="map" src="https://c.animaapp.com/jqf5894E/img/image.png" alt="Map" />

      {/* Location Info */}
      <div className="info-card">
        <img src="https://c.animaapp.com/jqf5894E/img/image-1.png" alt="Food Truck" />
        <div className="info-details">
          <div className="info-item">
            <div>📍</div>
            <div>
              <h3>Address</h3>
              <p>1028 S Welch St, Denton, TX 76201, United States</p>
            </div>
          </div>
          <div className="info-item">
            <div>📞</div>
            <div>
              <h3>Call</h3>
              <p>+1 940-629-5571</p>
            </div>
          </div>
          <div className="info-item">
            <div>✉️</div>
            <div>
              <h3>Mail</h3>
              <p>babaibandi@gmail.com</p>
            </div>
          </div>
          <div className="info-item">
            <div>⏰</div>
            <div>
              <h3>Store Timings</h3>
              <p>
                Monday – Friday: 10.00 AM – 06.00 PM<br />
                Saturday – Sunday: 09.00 AM – 04.00 PM
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Catering Section */}
      <div className="catering-section">
        <h1>From Truck to Your Home, We Provide Catering with Our Unique Style.</h1>
        <img
          className="icon"
          src="https://c.animaapp.com/jqf5894E/img/game-icons-food-truck.svg"
          alt="Food Truck Icon"
        />
        {/* <div className="food-gallery">
          <img src="https://c.animaapp.com/jqf5894E/img/image-5-1.png" alt="Food" />
          <img src="https://c.animaapp.com/jqf5894E/img/image-6-1.png" alt="Food" />
          <img src="https://c.animaapp.com/jqf5894E/img/image-7-1.png" alt="Food" />
          <img src="https://c.animaapp.com/jqf5894E/img/image-5-1.png" alt="Food" />
          <img src="https://c.animaapp.com/jqf5894E/img/image-6-1.png" alt="Food" />
          <img src="https://c.animaapp.com/jqf5894E/img/image-7-1.png" alt="Food" />
        </div> */}
      </div>

    </div>
  );
}

export default Location;
