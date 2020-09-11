export const lookUpIdMeal = (id) => (
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((response) => (
      response
        .json()
        .then((data) => (response.ok ? Promise.resolve(data) : Promise.reject(data)))
    ))
);

export const lookUpIdDrink = (id) => (
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((response) => (
      response
        .json()
        .then((data) => (response.ok ? Promise.resolve(data) : Promise.reject(data)))
    ))
);

export const foodIngredientAPI = (ingrediente) => (
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingrediente}`)
    .then((response) => (
      response
        .json()
        .then((data) => (response.ok ? Promise.resolve(data) : Promise.reject(data)))
    ))
);

export const foodNameAPI = (nome) => (
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${nome}`)
    .then((response) => (
      response
        .json()
        .then((data) => (response.ok ? Promise.resolve(data) : Promise.reject(data)))
    ))
);

export const foodLetterAPI = (primeiraLetra) => (
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${primeiraLetra}`)
    .then((response) => (
      response
        .json()
        .then((data) => (response.ok ? Promise.resolve(data) : Promise.reject(data)))
    ))
);


export const drinkIngredientAPI = (ingrediente) => {
  return fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingrediente}`)
    .then((response) => (
      response
        .json()
        .then((data) => (response.ok ? Promise.resolve(data) : Promise.reject(data)))
    ))
  };

export const drinkNameAPI = (nome) => {
 return  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nome}`)
    .then((response) => (
      response
        .json()
        .then((data) => (response.ok ? Promise.resolve(data) : Promise.reject(data)))
    ))
    };

export const drinkLetterAPI = (primeiraLetra) => {
  return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${primeiraLetra}`)
    .then((response) => (
      response
        .json()
        .then((data) => (response.ok ? Promise.resolve(data) : Promise.reject(data)))
    ))
  };

export const allMealsList = () => {
  return fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    .then((response) => (
      response
        .json()
        .then((data) => (response.ok ? Promise.resolve(data) : Promise.reject(data)))
    ))
  };

export const allDrinksList = () => {
  return fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
    .then((response) => (
      response
        .json()
        .then((data) => (response.ok ? Promise.resolve(data) : Promise.reject(data)))
    ))
  };

export const fetchMealsAPI = (radio, search) => {
  if (radio === 'Ingrediente') return foodIngredientAPI(search);
  if (radio === 'Nome') return foodNameAPI(search);
  if (radio === 'Primeira letra') return foodLetterAPI(search);
  return;
};

export const fetchDrinksAPI = (radio, search) => {
  if (radio === 'Ingrediente') return drinkIngredientAPI(search);
  if (radio === 'Nome') return drinkNameAPI(search);
  if (radio === 'Primeira letra') return drinkLetterAPI(search);
  return;
};
