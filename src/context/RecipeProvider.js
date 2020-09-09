import React from 'react';
import PropTypes from 'prop-types';
import RecipeContext from './RecipeContext';

const RecipeProvider = ({ children }) => {
  const context = {};
  return (
    <RecipeContext.Provider value={context}>
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;

RecipeProvider.propTypes = {
  children: PropTypes.objectOf(Object).isRequired,
};
