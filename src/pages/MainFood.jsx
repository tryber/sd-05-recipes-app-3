import React, { useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { allMealsList } from '../service/apis';
import RecipeContext from '../context/RecipeContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Food from '../components/Food';

function MainFood() {
  const { data, setData, setFetching, fetching, setPage } = useContext(RecipeContext);
  let previous = false;
  if (!data) previous = true;
  useEffect(() => {
    allMealsList().then((response) => setData(response.meals))
    .catch((error) => alert('Algo inesperado aconteceu:', error.message));
    setPage('MainFood');
    setFetching(false);
  }, [previous]);

  if (fetching) return <div className="loading">Loading...</div>;
  if (data !== null) {
  return (data.length === 1) ? (
    <div>
      <Redirect to={`/comidas/${data[0].idMeal}`} />
    </div>
    ):(
    <div>
      <Header title="Comidas" />
      <div className="list-of-cards">
        {data.map((item) => (
          <Food key={item.idMeal} food={item} />
        ))
        }
      </div>
      <Footer />
    </div>
  )
}
}
export default MainFood;

  //   return (
  //     <div>
  //       <p>Redirecting...{console.log(data)}</p>
  //       {alert('Não foi possível encontrar uma receita para esse filtro.')}
  //     </div>
  //   );
  // }