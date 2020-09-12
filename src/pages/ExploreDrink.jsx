import React, { useContext, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { randomDrinksApi } from '../service/apis';
import RecipeContext from '../context/RecipeContext';
import Footer from '../components/Footer';
import Header from '../components/Header';

function ExploreDrink(props) {
  const { data, setData, setFetching, fetching } = useContext(RecipeContext);
  const [surprise, setSurprise] = useState(false);
  const { idRecipe } = props.match.params;
  // const randomIndex = Math.floor(Math.random() * data.length);

  const randomRecipeDetail = () => {
    randomDrinksApi()
      .then((response) => setData(response.drinks))
      .catch((error) => alert('Algo inesperado aconteceu:', error));
    setFetching(false);
    setSurprise(true);
  };
  return (
    <div>
      <Header title="Explorar bebidas" />
      <div className="explore-buttons">
        <Link to="/explorar/bebidas/ingredientes">
          <button type="button" data-testid="explore-by-ingredient">
            Por Ingredientes
          </button>
        </Link>
        <button type="button" data-testid="explore-surprise" onClick={() => randomRecipeDetail()}>
          Me Surpreenda!
        </button>
      </div>
      {!fetching && surprise && data.length > 0 && <Redirect to={`/bebidas/${data[0].idDrink}`} />}
      <Footer />
    </div>
  );
}

export default ExploreDrink;
