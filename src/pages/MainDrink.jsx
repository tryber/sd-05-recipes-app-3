import React, { useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { allDrinksList } from '../service/apis';
import RecipeContext from '../context/RecipeContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Drink from '../components/Drink';
import '../components/card_recipe.css';

function MainDrink() {
  const { data, setData, setFetching, fetching, setPage } = useContext(RecipeContext);
  console.log(data);
  // let previous = false;
  // if (!data) previous = true;
  useEffect(
    () => {
      allDrinksList()
        .then((response) => {
          if (response !== null) setData(response.drinks);
          // console.log(response)
        })
        .catch((error) => alert('Algo inesperado aconteceu:', error));
      setPage('MainDrink');
      setFetching(false);
    },
    [
      /* previous */
    ]
  );
  if (fetching) return <div className="loading">Loading...</div>;
  // if (data === null) {
  //   return (
  //     <div>
  //       <p>Redirecting...</p>
  //       {alert('Não foi possível encontrar uma receita para esse filtro.')}
  //     </div>
  //   );
  // }
  return data.length === 1 ? (
    <div>
      <Redirect to={`/bebidas/${data[0].idDrink}`} />
    </div>
  ) : (
    <div>
      <Header title="Bebidas" />
      <div className="list-of-cards">
        {data.map((item, i) => (i < 12 ? <Drink key={item.idDrink} drink={item} /> : false))}
      </div>
      <Footer />
    </div>
  );
}

export default MainDrink;
