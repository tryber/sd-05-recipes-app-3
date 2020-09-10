import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RecipeContext from './RecipeContext';

const RecipeProvider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDrink, setIsDrink] = useState(false);
  const [fetching, setFetching] = useState(false);
  const [data, setData] = useState([]);

  const context = {
    email,
    setEmail,
    password,
    setPassword,
    isDrink,
    setIsDrink,
    fetching,
    setFetching,
    data,
    setData,
  };

  return <RecipeContext.Provider value={context}>{children}</RecipeContext.Provider>;
};

export default RecipeProvider;

RecipeProvider.propTypes = {
  children: PropTypes.objectOf(Object).isRequired,
};
