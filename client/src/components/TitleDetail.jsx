import React from 'react';
import SocialMedia from './SocialMedia.jsx';

export default class TitleDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className = 'title-detail-container'>
        <div className = 'title-detail'>
          {/* <div className = 'title-detail-score'>{this.props.stateObject.reviewScore}</div> */}
          <div className = 'title-detail-location'><a href='_blank'>{this.props.stateObject.location}</a></div>
        </div>
        <SocialMedia />
      </div>
    );
  }
}