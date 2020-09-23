import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import FilterByType from '../components/details/FilterByType';
import FavoriteCard from '../components/details/FavoriteCard';
import FavoriteContext from '../context/FavoriteContext';
// import RecipeContext from '../context/RecipeContext';
import '../css/favorite.css';

function FavoriteRecipes() {
  const { readFromStorage } = useContext(FavoriteContext);
  const [reload, setReload] = useState(false);
  const [recipes, setRecipes] = useState(readFromStorage());
  useEffect(() => {
    setRecipes(readFromStorage());
  }, [reload]);
  // 
  const handletype = (type) => {
    switch (type) {
      case 'comidas':
        setRecipes(readFromStorage().filter((caso) => caso.type === type));
      case 'bebidas':
        setRecipes(readFromStorage().filter((caso) => caso.type === type));
      default:
        setRecipes(readFromStorage());
      break;
    };
  };
  return (
    <div className="">
      <Header title="Receitas Favoritas" />
      <div className="body-page">
        <p>Tela de Receitas Favoritas</p>
        <FilterByType func={handletype} />
        {(!recipes || recipes.length === 0) ? (
          <div>
            <p>Você não tem nenhuma receita favoritada!</p>
          </div>
          ) : (
            recipes.map((item, idx, array) => (
              <FavoriteCard
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
            ),
          )
        )}
      </div>
    </div>
  );
}
export default FavoriteRecipes;
