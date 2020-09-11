import React from 'react';
import Header from '../components/Header';

function DrinkDetails({ match }) {
  const { idRecipe } = match.params;

  return (
    <div>
      DrinkDetails Page
      <p>{idRecipe}</p>
    </div>
  );
}

export default DrinkDetails;
