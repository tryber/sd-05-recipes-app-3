import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { mealIngredientsList, filterByMealIngredients } from '../service/apis';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecipeContext from '../context/RecipeContext';
// import '../css/explore.css';

function ExploreFoodIngredient() {
  const { setData, setFetching } = useContext(RecipeContext);
  const [mealIngrList, setMealIngrList] = useState([]);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    mealIngredientsList()
      .then((resp) => setMealIngrList(resp.meals.slice(0, 12)))
      .catch((error) => alert('Algo inesperado aconteceu:', error));
  }, []);

  const handleClick = (chosenIngredient) => {
    filterByMealIngredients(chosenIngredient)
      .then((resp) => setData(resp.meals))
      .catch((error) => alert('Algo inesperado aconteceu:', error));
    setFetching(false);
    setRedirect(true);
  };

  return (
    <div>
      <Header title="Explorar Ingredientes" />
      <section className="list-of-cards">
        {mealIngrList.map((ingr, index) => (
          <button
            key={ingr.strIngredient}
            data-testid={`${index}-ingredient-card`}
            onClick={(ingr) => handleClick(ingr.strIngredient)}
          >
            <img
              data-testid={`${index}-card-img`}
              src={`https://www.themealdb.com/images/ingredients/${ingr.strIngredient}-Small.png`}
              alt=""
            />
            <p data-testid={`${index}-card-name`}>{ingr.strIngredient}</p>
          </button>
        ))}
      </section>
      {redirect && <Redirect to="/comidas" />}
      {/* ainda tem o problema que MainFood pega outros dados no didmount - fazer um setDataIngr ou algo diferenciado no Main */}
      <Footer />
    </div>
  );
}

export default ExploreFoodIngredient;
