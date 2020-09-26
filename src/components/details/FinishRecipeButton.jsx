// finishRecipeButton
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../css/details.css';
// import DoneRecipes from '../../pages/DoneRecipes';
// const getDoneRecipe = () => {

// }

function finishRecipe(id, type, date) {
  // console.log(id, type, date);
  const recipesIds = JSON.parse(localStorage.getItem('idDoneRecipes' || []));
  if (recipesIds) localStorage.setItem('idDoneRecipes', JSON.stringify([...recipesIds, { id, type, date }]));
  else localStorage.setItem('idDoneRecipes', JSON.stringify([{ id, type, date }]));
  // console.log(JSON.parse(localStorage.getItem('idDoneRecipes')));
}

class FinishRecipeButton extends Component {
  // constructor(props){
  //   super(props);
  // }
  render() {
    const { literals, id, type } = this.props;
    const date = new Date().toLocaleDateString();
    console.log('data:', date);
    return (
      <div className="finish-recipe-button">
        <Link to={literals} onClick={({ target }) => finishRecipe(id, target.value, date)}>
          <button data-testid="finish-recipe-btn" type="button" id="btn" value={type} disabled>
            Finalizar Receita
          </button>
        </Link>
      </div>
    );
  }
}

export default FinishRecipeButton;

FinishRecipeButton.propTypes = {
  literals: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
