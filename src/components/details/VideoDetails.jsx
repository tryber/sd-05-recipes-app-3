import React, { Component } from 'react';
import PropTypes from 'prop-types';

class VideoDetails extends Component {
  // constructor(props){
  //   super(props);
  // }
  render() {
    return (
      <div className="video-details">
        <video width="320" height="240" controls>
          <source src={this.props.youtube} type="video/mp4" data-testid="video" />
        </video>
      </div>
    );
  }
}

export default VideoDetails;


VideoDetails.propTypes = {
  youtube: PropTypes.string.isRequired,
};
