import React from 'react';

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
