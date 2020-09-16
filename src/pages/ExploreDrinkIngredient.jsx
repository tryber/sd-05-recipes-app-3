import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecipeContext from '../context/RecipeContext';
import { drinkIngredientsList } from '../service/apis';

function ExploreDrinkIngredient() {
  const { data, setData, fetching, setFetching } = useContext(RecipeContext);
  const [drinkIngrList, setDrinkIngrList] = useState([]);
  const [listLoading, setListLoading] = useState(true);

  useEffect(() => {
    drinkIngredientsList()
      .then((resp) => setDrinkIngrList(resp.drinks.slice(0,12)))
      .catch((error) => alert('Algo inesperado aconteceu:', error));
    setListLoading(false);
  }, []);
  // objeto retornado pela api: pegar drinkIngrList.strIngredient1

  return (
    <div>
      <Header title="Explorar Ingredientes" />
      {!listLoading &&
        drinkIngrList.map((ingr, index) => (
          <div
            className=""
            key={ingr.strDrink}
            data-testid={`${index}-ingredient-card`}
            // onClick={(ingr)=> functionToRedirectToFilteredMainDrinks(ingr)}
          >
            <img
              className="thumbnail"
              data-testid={`${index}-card-img`}
              src={`https://www.thecocktaildb.com/images/ingredients/${ingr.strIngredient1}-Small.png`}
              alt="thumbnail do ingrediente"
            />
            <p data-testid={`${index}-card-name`}>{ingr.strIngredient1}</p>
          </div>
        ))}
      ;
      <Footer />
    </div>
  );
}

export default ExploreDrinkIngredient;
