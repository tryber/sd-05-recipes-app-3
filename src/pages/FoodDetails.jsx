import React from 'react';

function FoodDetails({ match }) {
  const { idRecipe } = match.params;

  return (
    <div>
      FoodDetails Page
      <p>{idRecipe}</p>
    </div>
  );
}

export default FoodDetails;
