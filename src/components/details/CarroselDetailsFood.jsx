import React, { useEffect, useState } from 'react';
import { allMealsList } from '../../service/apis';
import '../../css/details.css';

function CarroselDetailsFood() {
  const [recomendado, setRecomendado] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    allMealsList()
      .then((resp) => setRecomendado(resp.meals.slice(0, 6)))
      .catch((error) => alert('Algo inesperado aconteceu:', error));
    setIsLoading(false);
  }, []);
  return (
    <div>
      <h3>Recomendadas</h3>
      <div className="carroussel">
        {!isLoading &&
          recomendado.map((recomendations, index) => (
            <div key={recomendations.idMeal} data-testid={`${index}-recomendation-card`}>
              <h3 data-testid={`${index}-recomendation-title`}>{recomendations.strMeal}</h3>
              <img
                data-testid={`${index}-card-img`}
                alt="food"
                src={recomendations.strMealThumb}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default CarroselDetailsFood;
