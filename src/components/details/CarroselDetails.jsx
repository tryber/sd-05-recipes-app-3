import React, { useEffect, useState } from 'react';
import { allDrinksList } from '../../service/apis';
import '../../css/details.css';

function CarroselDetails() {
  const [recomendado, setRecomendado] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // console.log(recomendado.length);
  useEffect(() => {
    setIsLoading(true);
    allDrinksList()
      .then((resp) => setRecomendado(resp.drinks.slice(0, 6)))
      .catch((error) => alert('Algo inesperado aconteceu:', error));
    if (recomendado) setIsLoading(false);
  }, [isLoading]);
  //
  return (
    <div>
      <h3>Recomendadas</h3>
      <div className="carroussel">
        {!isLoading &&
          recomendado.map((recomendations, index) => (
            <div
              key={recomendations.idDrink}
              data-testid={`${index}-recomendation-card`}
              className={'carroussel-card'}
            >
              <h3 data-testid={`${index}-recomendation-title`}>{recomendations.strDrink}</h3>
              <img
                data-testid={`${index}-card-img`}
                alt="drink"
                src={recomendations.strDrinkThumb}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default CarroselDetails;
