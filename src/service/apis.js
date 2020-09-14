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


export const drinkIngredientAPI = (ingrediente) => (
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingrediente}`)
    .then((response) => (
      response
        .json()
        .then((data) => (response.ok ? Promise.resolve(data) : Promise.reject(data)))
    ))
);

export const drinkNameAPI = (nome) => (
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nome}`)
    .then((response) => (
      response
        .json()
        .then((data) => (response.ok ? Promise.resolve(data) : Promise.reject(data)))
    ))
);

export const drinkLetterAPI = (primeiraLetra) => (
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${primeiraLetra}`)
    .then((response) => (
      response
        .json()
        .then((data) => (response.ok ? Promise.resolve(data) : Promise.reject(data)))
    ))
);

export const allMealsList = () => (
  fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    .then((response) => (
      response
        .json()
        .then((data) => (response.ok ? Promise.resolve(data) : Promise.reject(data)))
    ))
);

export const allDrinksList = () => (
  fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
    .then((response) => (
      response
        .json()
        .then((data) => (response.ok ? Promise.resolve(data) : Promise.reject(data)))
    ))
);

export const randomMealsApi = () => (
  fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then((response) => (
      response.json()
        // .then((data) => console.log(data))
        .then((data) => ((response.ok && data !== null) ? Promise.resolve(data)
        : Promise.reject(data)))
    ))
);

export const randomDrinksApi = () => (
  fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then((response) => (
      response.json()
        // .then((data) => console.log(data))
        .then((data) => ((response.ok && data !== null) ? Promise.resolve(data) :
        Promise.reject(data)))
    ))
);

export const mealsCategories = () => (
  fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
    .then((response) => (
      response.json()
        // .then((data) => console.log(data))
        .then((data) => ((response.ok && data !== null) ? Promise.resolve(data) :
        Promise.reject(data)))
    ))
);

export const drinkCategories = () => (
  fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
    .then((response) => (
      response.json()
        // .then((data) => console.log(data))
        .then((data) => ((response.ok && data !== null) ? Promise.resolve(data) :
        Promise.reject(data)))
    ))
);
