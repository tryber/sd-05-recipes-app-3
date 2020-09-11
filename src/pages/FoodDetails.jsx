import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { lookUpIdMeal } from '../service/apis';
import RecipeContext from '../context/RecipeContext';
// import FoodDescriptions from '../components/FoodDescriptions';

function FoodDetails(props) {
  const { idRecipe } = props.match.params;
  const { fetching, setFetching, setDetails, details } = useContext(RecipeContext);
  const { strMealThumb, strMeal } = details[0];

  useEffect(() => {
    setFetching(true);
    lookUpIdMeal(idRecipe).then((food) => setDetails(food.meals));
    setFetching(false);
  }, []);
  console.log(details[0], fetching);
  return fetching ? (
    <div>Loading...</div>
  ) : (
    <div>
      FoodDetails Page
      <Header />
      <div className="card-recipe">
        <img alt={strMeal} className="card-recipe-image" src={strMealThumb} />
        <div className="card-recipe-body">
          <h3 className="card-recipe-name"> ID: {strMeal}</h3>
        </div>
        {/* <FoodDescriptions id={idRecipe} /> */}
      </div>
      <Footer />
    </div>
  );
}

export default FoodDetails;

FoodDetails.propTypes = {
  match: PropTypes.objectOf(Object).isRequired,
  params: PropTypes.objectOf(String).isRequired,
};
