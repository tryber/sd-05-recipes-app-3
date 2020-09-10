import React,{ useEffect, useContext } from 'react';
import { foodIngredientAPI } from '../service/apis';
import RecipeContext from '../context/RecipeContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

function MainFood() {
  const { data, setData, fetching, setFetching } = useContext(RecipeContext);
  useEffect(() => {
    setFetching(true);
    foodIngredientAPI("chicken").then((response) => setData(response.meals));
    setFetching(false);
  }, []);
  return (
    <div>
      <Header />
      <p>MainFood Page</p>
      {data.map((item) =>
      <div> 
        <h2>{item.strMeal}</h2>
        <img src={item.strMealThumb} width="200px" />
      </div>
      )}
      {console.log(data)}
      <Footer />
    </div>
  );
}

export default MainFood;
