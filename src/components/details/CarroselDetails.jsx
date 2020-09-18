import React, { useEffect, useState } from 'react';
import { allDrinksList } from '../../service/apis';
import '../../css/details.css';

function CarroselDetails() {
  const [recomendado, setRecomendado] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    allDrinksList()
      .then((resp) => setRecomendado(resp.drinks.slice(0, 6)))
      .catch((error) => alert('Algo inesperado aconteceu:', error));
    setIsLoading(false);
  }, []);
  return (
    <div>
      <h3>Recomendadas</h3>
      <div className="carroussel">
        {!isLoading &&
          recomendado.map((recomendations, index) => (
            <div key={recomendations.idDrink} data-testid={`${index}-recomendation-card`}>
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
