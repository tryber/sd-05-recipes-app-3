import React, { useContext } from 'react';
import React, { useEffect, useContext } from 'react';
import { allMealsList } from '../service/apis';
import RecipeContext from '../context/RecipeContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

function MainFood() {
  const { data, setData, setFetching } = useContext(RecipeContext);
  useEffect(() => {
    setFetching(true);
    allMealsList().then((response) => setData(response.meals));
    setFetching(false);
  }, []);
  return (
    <div>
      <Header />
      <p>MainFood Page</p>
      {data.map((item) =>
        <div>
          <h2>{item.strMeal}</h2>
          <img src={item.strMealThumb} alt="meal thumb" width="200px" />
        </div>,
      )}
      <Footer />
    </div>
  );
}

export default MainFood;
