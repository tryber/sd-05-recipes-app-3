import React, { Component } from 'react';
import PropTypes from 'prop-types';

class IngredientDetail extends Component {
  // constructor(props){
  //   super(props);
  // }
  render() {
    const { ingredient, measure } = this.props;
    return (
      <div className="ingredients-details">
        <h4>Ingredients</h4>
        <div>
          {ingredient.map((item, index) => (
            <p data-testid={`${index}-ingredient-name-and-measure`}>
              {item} : {measure[index]}
            </p>
          ))}
        </div>
      </div>
    );
  }
}

export default IngredientDetail;

IngredientDetail.propTypes = {
  ingredient: PropTypes.string.isRequired,
  measure: PropTypes.string.isRequired,
};
