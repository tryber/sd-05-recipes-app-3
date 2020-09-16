import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CarroselDetails extends Component {
  // constructor(props){
  //   super(props);
  // }
  render() {
    return (
      <div className="recomendations-details">
        <h4>Recomendadas</h4>
        <div data-testid="0-recomendation-card">
          Aqui estarão os 6 cards
          {this.props.recomendations}
        </div>
      </div>
    );
  }
}

export default CarroselDetails;

CarroselDetails.propTypes = {
  recomendations: PropTypes.objectOf(Object).isRequired,
};
