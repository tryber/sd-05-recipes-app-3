import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RecipeContext from './RecipeContext';

const RecipeProvider = ({ children }) => {
  const [user, setUser] = useState({
    userData: {
      email : '',
      password: '',
    },
  });
  const [checked, setChecked] = useState(false);

  const context = {
    user,
    email: user.userData.email,
    password: user.userData.password,
    setUser,
    checked,
    setChecked,
  };

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
