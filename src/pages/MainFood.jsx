import React, { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MainDrink from './MainDrink';
import RecipeContext from '../context/RecipeContext';

function MainFood() {
  const { isDrink } = useContext(RecipeContext);
  return (
    <section>
      {!isDrink && (
        <div>
          <Header />
          <p>MainFood Page</p>
          <Footer />
        </div>
      )}
      {isDrink && <MainDrink />}
    </section>
  );
}

export default MainFood;
