import React from 'react';
import { Link } from 'react-router-dom';
// import { Redirect } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

function ExploreDrink() {
  // const randomRecipeDetail = () => {
    // "a rota deve mudar para a tela de detalhes de uma receita,
    // que deve ser escolhida de forma aleatória através da API."
    // ou seja fazer fetch para receber um id avulso
    // e um Redirect:
    // <Redirect to="/comidas/{randomId}" />
  // };
  return (
    <div>
      <Header title="Explorar comidas" />
      <Link to="/explorar/bebidas/ingredientes">
        <button type="button" data-testid="explore-by-ingredient">
          Por Ingredientes
        </button>
      </Link>
      <button
        type="button"
        data-testid="explore-surprise"
        // onClick={() => randomRecipeDetail()}
      >
        Me Surpreenda!
      </button>
      <Footer />
    </div>
  );
}

export default ExploreDrink;
