import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../css/details.css';

class CardDetail extends Component {
  // constructor(props){
  //   super(props);
  // }
  render() {
    const { strOption, strCategory, alc, strArea, type } = this.props;
    return (
      <div className="card-body">
        <div className="card-details">
          <h1 data-testid="recipe-title">{strOption}</h1>
          <h3 data-testid="recipe-category">
            {type === 'comida' ? (`${strArea} - ${strCategory}`) : (alc)}
          </h3>
        </div>
      </div>
    );
  }
}

export default CardDetail;

CardDetail.propTypes = {
  strOption: PropTypes.string.isRequired,
  alc: PropTypes.string,
  strCategory: PropTypes.string,
  strArea: PropTypes.string,
  type: PropTypes.string.isRequired,
};

CardDetail.defaultProps = {
  strArea: 'origin',
  strCategory: '',
  alc: '',
};
