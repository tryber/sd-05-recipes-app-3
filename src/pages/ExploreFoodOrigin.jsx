import React, { useEffect, useContext, useState } from 'react';
import { listAreasApi, allMealsList, filterByAreasApi } from '../service/apis';
import RecipeContext from '../context/RecipeContext';
import Footer from '../components/Footer';
import Food from '../components/Food';
import Header from '../components/Header';
import '../css/explore.css';

function ExploreFoodOrigin() {
  const { data, setData, fetching, setFetching } = useContext(RecipeContext);
  const [areaList, setAreaList] = useState([]);
  const [listLoading, setListLoading] = useState(true);
  // const [chosenArea, setChosenArea] = useState('');

  useEffect(() => {
    listAreasApi()
      .then((data) => setAreaList(data.meals))
      .catch((error) => alert('Algo inesperado aconteceu:', error));
    setListLoading(false);
  }, []);

  const renderAll = () => {
    allMealsList()
      .then((response) => setData(response.meals.slice(0, 12)))
      .catch((error) => alert('Algo inesperado aconteceu:', error));
    setFetching(false);
  }

  useEffect(() => {
    renderAll();
  }, []);

  const handleClick = (e) => {
    if (e.target.value === 'All') {
      renderAll();
    } else {
      filterByAreasApi(e.target.value)
        .then((data) => setData(data.meals.slice(0, 12)))
        .catch((error) => alert('Algo inesperado aconteceu:', error));
      setFetching(false);
    }
  };

  return (
    <div>
      <Header title="Explorar Origem" />
      <select className="select-origin" data-testid="explore-by-area-dropdown" onClick={(e) => handleClick(e)}>
        <option data-testid="All-option">All</option>
        {!listLoading &&
          areaList.map(({ strArea }) => (
            <option key={strArea} value={strArea} data-testid={`${strArea}-option`}>
              {strArea}
            </option>
          ))}
      </select>
      {!fetching && (
        <section className="list-of-cards">
          {data.map((item, index) => (
            <Food key={item.idMeal} food={item} idx={index} />
          ))}
        </section>
      )}
      <Footer />
    </div>
  );
}
// com certeza vai ter que refatorar esse return enorme

export default ExploreFoodOrigin;
