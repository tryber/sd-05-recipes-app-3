import React from 'react';
import { Redirect } from 'react-router-dom';
import Food from '../components/Food';
import { meals } from '../service/meals';

function MainFood() {
  const array = [...meals,
    {
      teste: 'a variavel array deve receber uma requisicao da api',
      idMeal: 2,
    },

  ];  // caso nao encontre nehuma receita, retorna uma alerta.
  if (array.length === 0) {
    return (
      <div>
        {alert('Sinto muito, não encontramos nenhuma receita para esses filtros.')}
      </div>
    );
  }
  return (array.length === 1) ?
    <Redirect to={`/comidas/${array[0].idMeal}`} >
      {/* caso encontre uma unica receita redireciona para a pagina de datalhes desta receita. */}
    </Redirect>

  // caso retorne mais de uma resultado na pesquisa
  // retorna uma tela com doze cards contendo foto e nome da receita
    : (
      <div className="list-of-cards">
        {array.map((item) => (
          <Food key={item.idMeal} food={item} />
        ))
        }
      </div>
    );
}

export default MainFood;
