import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import FilterByType from '../components/details/FilterByType';
import FavoriteCard from '../components/details/FavoriteCard';
import FavoriteContext from '../context/FavoriteContext';
// import RecipeContext from '../context/RecipeContext';
import '../css/favorite.css';

function FavoriteRecipes() {
  const { readFromStorage } = useContext(FavoriteContext);
  // const isItFavorite = readFromStorage().some((itIs) => itIs.id === id);
  const [reload, setReload] = useState(false);
  // const loadRecipes = readFromStorage();
  const [filter, setFilter] = useState('all');
  const [recipes, setRecipes] = useState([]);
  console.log('antes: ', recipes, filter);
  useEffect(() => {
    setRecipes(readFromStorage());
  }, [reload]);
  const handletype = (type) => {
    setFilter(type);
    // switch (type) {
    // case 'comida':
    //   return setRecipes([...readFromStorage().filter((caso) => caso.type === filter)]);
    // case 'bebida':
    //   return setRecipes([...readFromStorage().filter((caso) => caso.type === filter)]);
    // case 'all':
    //    return setRecipes([...readFromStorage()]);//.filter((caso) => caso.type !== filter);
    // default: break;
    // }
  };

  return (
    <div className="">
      <Header title="Receitas Favoritas" />
      <div className="body-page">
        <p>Tela de Receitas Favoritas</p>
        <FilterByType func={handletype} />
        {!recipes || recipes.length === 0 ? (
          <div>
            <p>Você não tem nenhuma recipa favoritada!</p>
          </div>
        ) : (
        recipes.map((item, idx, array) => (
          <FavoriteCard
            // key={idx}
            index={idx}
            id={item.id}
            type={item.type}
            area={item.area}
            category={item.category}
            alcoholicOrNot={item.alcoholicOrNot}
            name={item.name}
            image={item.image}
            recipes={array}
            setReload={setReload}
            reload={reload}
          />
          ))
          )}
        </div>
      </div>
    );
}
export default FavoriteRecipes;

/*
      (!recipes || recipes.length === 0) ? (
        <div>
        <p>Você não tem nenhuma recipa favoritada!</p>
        </div>
) : (
  <div className="">
    <Header title="Receitas Favoritas" />
    <div className="body-page">
      <p>Tela de Receitas Favoritas</p>
      <FilterByType func={() => console.log('handleClick')} />
      {recipes.map((item, idx, array) => (
        <FavoriteCard
          index={idx}
          id={item.id}
          image={item.image}
          name={item.name}
          type={item.type}
          area={item.area}
          category={item.category}
          alcoholicOrNot={item.alcoholicOrNot}
          recipes={array}
        />
      ))}
    </div>
  </div>
); */
