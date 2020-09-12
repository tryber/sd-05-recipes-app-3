import React from 'react';
import { Link } from 'react-router-dom';
import { drinkIcon } from '../images';
import { exploreIcon } from '../images';
import { mealIcon } from '../images';
import '../components/Footer.css';

function Footer() {
  return (
    <footer className="footer" data-testid="footer">
      <div className="footBar">
        <div className="drink">
          <Link to="/bebidas" data-testid="drinks-bottom-btn">
            <img src={drinkIcon} alt="drink" />
          </Link>
        </div>
        <div className="explorer">
          <Link to="/explorar" data-testid="explore-bottom-btn">
            <img src={exploreIcon} alt="explore" />
          </Link>
        </div>
        <div className="food">
          <Link to="/comidas" data-testid="food-bottom-btn">
            <img src={mealIcon} alt="food" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
