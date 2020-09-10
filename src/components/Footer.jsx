import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { drinkIcon } from '../images';
import { exploreIcon } from '../images';
import { mealIcon } from '../images';
import RecipeContext from '../context/RecipeContext';

function Footer() {
  const { setIsDrink } = useContext(RecipeContext);
  return (
    <footer className="footer" data-testid="footer">
      <Link to="/bebidas" data-testid="drinks-bottom-btn">
        <img src={drinkIcon} alt="drink" onClick={() => setIsDrink(true)}/>
      </Link>
      <Link to="/explorar" data-testid="explore-bottom-btn">
        <img src={exploreIcon} alt="explore" />
      </Link>
      <Link to="/comidas" data-testid="food-bottom-btn">
        <img src={mealIcon} alt="food" onClick={() => setIsDrink(false)}/>
      </Link>
    </footer>
  );
}

export default Footer;
