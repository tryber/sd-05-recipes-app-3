import React, { useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { allDrinksList } from '../service/apis';
import RecipeContext from '../context/RecipeContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Drink from '../components/Drink';

function MainDrink() {
  const { data, setData, setFetching, fetching, setPage } = useContext(RecipeContext);
  let previous = false;
  if (!data) previous = true;
  useEffect(() => {
    allDrinksList().then((response) => setData(response.drinks));
    setPage('MainDrink');
    setFetching(false);
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
    <div>{/* caso encontre uma unica receita redireciona para a pagina de datalhes desta receita. */}
      <Redirect to={`/bebidas/${data[0].idDrink}`} />
    </div>
  : (
    <div>
      <Header />
      <div className="list-of-cards">
        {data.map((item) => (
         <Drink key={item.idDrink} drink={item} />
        ))
        }
      </div>
      <Footer />
    </div>
  );
}

export default MainDrink;
