import React, { useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { allMealsList } from '../service/apis';
import RecipeContext from '../context/RecipeContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Food from '../components/Food';


function MainFood() {
  const { data, setData, setFetching, fetching } = useContext(RecipeContext);
  let previous = false;
  if (!data) previous = true;
  useEffect(() => {
    // setFetching(true);
    allMealsList().then((response) => !response ? true :  setData(response.meals))
    setFetching(false)
  }, [previous]);
  if (fetching) return <div className="loading">Loading...</div>
  if (data === null) {
    return (
      <div>
        <p>Redirecting...</p>
        {alert('Sinto muito, não encontramos nenhuma receita para esses filtros.')}
      </div>
    );
  }
  return (data.length === 1) ?
    <div>
    <Redirect to={`/comidas/${data[0].idMeal}`} />
    </div>
  : (
    <div>
      <Header />
      <div className="list-of-cards">
        {data.map((item) => (
         <Food key={item.idMeal} food={item} />
        ))
        }
      </div>
      <Footer />
    </div>
  );
}

export default MainFood;
