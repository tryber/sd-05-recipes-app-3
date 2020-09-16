import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { drinkIngredientsList, filterByDrinkIngredients } from '../service/apis';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecipeContext from '../context/RecipeContext';
// import '../css/explore.css';

function ExploreDrinkIngredient() {
  const { setData, setFetching } = useContext(RecipeContext);
  const [drinkIngrList, setDrinkIngrList] = useState([]);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    drinkIngredientsList()
      .then((resp) => setDrinkIngrList(resp.drinks.slice(0, 12)))
      .catch((error) => alert('Algo inesperado aconteceu:', error));
  }, []);
  // objeto retornado pela api: pegar .strIngredient1

  const handleClick = (chosenIngredient) => {
    filterByDrinkIngredients(chosenIngredient)
      .then((resp) => setData(resp.drinks))
      .catch((error) => alert('Algo inesperado aconteceu:', error));
    setFetching(false);
    setRedirect(true);
  };

  return (
    <div>
      <Header title="Explorar Ingredientes" />
      <section className="list-of-cards">
        {drinkIngrList.map((ingr, index) => (
          <div
            key={ingr.strDrink}
            data-testid={`${index}-ingredient-card`}
            onClick={(ingr) => handleClick(ingr.strIngredient1)}
          >
            <img
              className=""
              data-testid={`${index}-card-img`}
              src={`https://www.thecocktaildb.com/images/ingredients/${ingr.strIngredient1}-Small.png`}
              alt=""
            />
            <p data-testid={`${index}-card-name`}>{ingr.strIngredient1}</p>
          </div>
        ))}
      </section>
      {redirect && <Redirect to="/bebidas" />}
      {/* ainda tem o problema que MainDrinks pega outros dados no didmount */}
      <Footer />
    </div>
  );
}

export default ExploreDrinkIngredient;
// [ HA ] - Consultation of PR https://github.com/tryber/sd-05-recipes-app-4/pull/46/files
