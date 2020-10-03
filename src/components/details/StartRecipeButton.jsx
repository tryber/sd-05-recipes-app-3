import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../css/details.css';

const loadStorage = (type, id) => {
  let storage = JSON.parse(
    localStorage.getItem('InProgressRecipes' || '{ meals: {}, cocktails: {} }'));
  console.log('storage:', storage);
  if (type === 'comida') {
    return !storage || storage === null
      ? localStorage.setItem(
          'InProgressRecipes',
          JSON.stringify({ meals: { [id]: [] }, cocktails: {} })
        )
      : storage.meals[id];
  }
  if (type === 'bebida') {
    return !storage || storage === null
      ? localStorage.setItem(
          'InProgressRecipes',
          JSON.stringify({ meals: {}, cocktails: { [id]: [] } })
        )
      : storage.cocktails[id];
  }
};

class StartRecipeButton extends Component {
  constructor(props) {
    super(props);
    const { type, id } = this.props;
    this.state = {
      status: loadStorage(type, id),
    };
  }

  render() {
    const { literals } = this.props;
    const { status } = this.state;
    console.log('Iniciar receita? ', status);
    return (
      <div className="start-recipe-button">
        <Link to={literals}>
          <button id="btn" data-testid="start-recipe-btn">
            {!status ? 'Iniciar Receita' : 'Continuar Receita'}
          </button>
        </Link>
      </div>
    );
  }
}

export default StartRecipeButton;

StartRecipeButton.propTypes = {
  literals: PropTypes.string.isRequired,
};
