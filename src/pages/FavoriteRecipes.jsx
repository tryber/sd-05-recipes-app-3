import React, { useContext } from 'react';
import Header from '../components/Header';
import FilterByType from '../components/details/FilterByType';
import FavoriteCard from '../components/details/FavoriteCard';
import FavoriteContext from '../context/FavoriteContext';
// import RecipeContext from '../context/RecipeContext';

function FavoriteRecipes() {
  const { loadFromStorage } = useContext(FavoriteContext);
  const recipes = loadFromStorage();
  // console.log(recipes);
  return (
    <div className="">
      <Header title="Receitas Favoritas" />
      <div className="body-page">
        <p>Tela de Receitas Favoritas</p>
        <FilterByType func={() => console.log('handleClick')} />
        {!recipes || recipes.length === 0 ? (
          <div>
            <p>Você não tem nenhuma recipa favoritada!</p>
          </div>
        ) : (
          recipes.map((item, idx, array) => (
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
          ))
        )}
      </div>
    </div>
  );

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
}
export default FavoriteRecipes;
