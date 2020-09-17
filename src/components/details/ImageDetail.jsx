import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ImageDetail extends Component {
  render() {
    const { strOption, thumb } = this.props;
    return (
      <div className="image-details">
        <img alt={strOption} src={thumb} data-testid="recipe-photo" />
      </div>
    );
  }
}

export default ImageDetail;


ImageDetail.propTypes = {
  strOption: PropTypes.string.isRequired,
  thumb: PropTypes.string.isRequired,
};
