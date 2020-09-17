import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
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
            <div data-testid={`${index}-recomendation-card`}>
              <img alt="drink" src={recomendations.strDrinkThumb} />
              <div>
                <h4 data-testid="recipe-category">{recomendations.strAlcoholic}</h4>
                <h4 data-testid={`${index}-recomendation-title`}>{recomendations.strDrink}</h4>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default CarroselDetails;

CarroselDetails.propTypes = {
  recomendations: PropTypes.arrayOf.isRequired,
};
