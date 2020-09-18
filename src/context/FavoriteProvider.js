import React from 'react';
import PropTypes from 'prop-types';
import FavoriteContext from './FavoriteContext';

const saveInStorage = (favorite) => {
  console.log('receita a ser salva:', favorite);
  if (!localStorage.getItem('favoriteRecipes')) {
    localStorage.setItem('favoriteRecipes', JSON.stringify([favorite]));
    // console.log(JSON.parse(localStorage.getItem('favoriteRecipes')))
  } else {
    const recipes = [...JSON.parse(localStorage.getItem('favoriteRecipes'))];
    // console.log(recipes);
    const filteredRecipes = recipes.filter((card) => card.id !== favorite.id);
    localStorage.setItem('favoriteRecipes', JSON.stringify([...filteredRecipes, favorite]));
  }
};

function deleteFromStorage(toBeDeleted) {
  console.log('receita a ser apagada:', toBeDeleted);
  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  if (!localStorage.getItem('favoriteRecipes')) return false;
  const onlyFavorites = favoriteRecipes.filter((card) => card.id !== toBeDeleted.id);
  localStorage.setItem('favoriteRecipes', JSON.stringify([...onlyFavorites]));
  return true;
}

function FavoriteProvider({ children }) {
  const loadFromStorage = (usuario) => {
    // const { email } = JSON.parse(localStorage.getItem('user'));
    const user = JSON.parse(localStorage.getItem('user'));

    const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    // console.log('user: ', user.email, 'login: ', usuario, 'receitas salva:', favoriteRecipes);
    if (user.email === usuario && localStorage.getItem('favoriteRecipes')) {
      // console.log('voce de novo?', user.email, usuario);
    }
    return favoriteRecipes;
  };

  function isFavorite(favoriteRecipe, isItFavorite) {
    console.log('estado receita favorite?', !isItFavorite);
    return isItFavorite ? deleteFromStorage(favoriteRecipe) : saveInStorage(favoriteRecipe);
  }

  const Context = {
    deleteFromStorage,
    loadFromStorage,
    isFavorite,
  };

  return <FavoriteContext.Provider value={Context}>{children}</FavoriteContext.Provider>;
}

export default FavoriteProvider;

FavoriteProvider.propTypes = {
  children: PropTypes.objectOf(Object).isRequired,
};

// const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
// if (!favoriteRecipes) setRecipes([]);
// else  setRecipes([...favoriteRecipes]);
