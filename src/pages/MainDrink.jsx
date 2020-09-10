import React from 'react';
import { Redirect } from 'react-router-dom';
import Drink from '../components/Drink';
import { drinks } from '../service/drinks';


function MainDrink() {
  const array = [...drinks,
    {
      teste: 'a variavel array deve receber uma requisicao da api',
      idMeal: 1,
    },
  ];
  // caso nao encontre nehuma receita, retorna uma alerta.
  if (array.length === 0) {
    return (
      <div>
        {alert('Sinto muito, não encontramos nenhuma receita para esses filtros.')}
      </div>
    );
  }
  return (array.length === 1) ?
    <Redirect to={`/bebidas/${array[0].idDrink}`} >
      {/* caso encontre uma unica receita redireciona para a pagina de datalhes desta receita. */}
    </Redirect>

  // caso retorne mais de uma resultado na pesquisa
  // retorna uma tema com doze cards contendo foto e nome da receita
    : (
      <div className="list-of-cards">
        {/* MainDrink Page */}
        {array.map((item) => (
          <Drink drink={item} key={item.idDrink} />
        ))
        }
      </div>
    );
}

export default MainDrink;
