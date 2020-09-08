import React, { useState } from 'react';
import RecipeContext from './RecipeContext';

const RecipeProvider = ({ children }) => {
  const context = {}
    return (
      <RecipeContext.Provider value={context}>
        {children};
      </RecipeContext.Provider>
    );
};

export default RecipeProvider;
