import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CardDetail extends Component {
  // constructor(props){
  //   super(props);
  // }
  render() {
    const { strOption, strCategory, strAlcoholic } = this.props;
    return (
      <div className="card-body">
        <div className="card-details">
          <h1 data-testid="recipe-title">{strOption}</h1>
          <h3 data-testid="recipe-category">
            {strAlcoholic} {strCategory}
          </h3>
        </div>
      </div>
    );
  }
}

export default CardDetail;

CardDetail.propTypes = {
  strOption: PropTypes.string.isRequired,
  strAlcoholic: PropTypes.string.isRequired,
  strCategory: PropTypes.string.isRequired,
};
