import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
  return (
    <div className="home-container">

      <div className="header">
        <h1><span className='W'>WELCOME</span> to Our Website</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis bibendum tellus eu fringilla bibendum.</p>
        <Link to="/login">
          <button className='Button'>Book Now</button>
        </Link>
      </div>

      
      <div className="background-image-container">
        <img
          src="/photo3.jpg"
          alt="Background"
          className="background-image"
        />
    
    
      </div>

    
      <div className="image-gallery">
        <div className="image-item">
          <img src="/photo2.jpg" alt="Image 1" />
          <div className="image-item-text">
            <p className='p'>GREAT FOOD</p>
          </div>
        </div>
        <div className="image-item">
          <img src="/photo9.jpg" alt="Image 2" />
          <div className="image-item-text">
            <p className='p'>STAYCATIONS</p>
          </div>
        </div>
        <div className="image-item">
          <img src="/photo7.jpg" alt="Image 3" />
          <div className="image-item-text">
            <p className='p'>SPA</p>
          </div>
        </div>
      </div>

    
      <div className="info-container">
        <div className="info-item">
         <span className="lorem-text">Contact</span>
         <br />
          us whenever you have any questions. we are here for you.
        </div>
        <div className="info-item">
          <p>Our Contacts</p>
          <br />
          <p>+254664567</p>
          <br />
          <p>+254664567</p>
        </div>
        <div className="info-item">
          <p>Subscribe to our newsletter</p>
          <form className="newsletter-form">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="email" placeholder="Email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Footer */}
      
      <footer className="footer-container">
        <div className="footer-social">
          <div className="social-icons">
            <a href="https://facebook.com">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://twitter.com">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://instagram.com">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          </div>
        </div>
      <br />
        <div className="footer-copyright">
        <p>&copy; {new Date().getFullYear()} impala. All rights reserved.</p>
        </div>
      </footer>
  

      
    </div>
  );
};

export default Home;

