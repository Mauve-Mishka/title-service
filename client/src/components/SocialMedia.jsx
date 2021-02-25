import React from 'react';
import FontAwesome from '@fortawesome/fontawesome-free/js/all.js';

export default class SocialMedia extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className = 'social-media'>
        <button className = 'social-media-button'><i class="fas fa-upload"></i><span className = 'social-media-button-label'>Share</span></button>
        <button className = 'social-media-button'><i class="far fa-heart"></i><span className = 'social-media-button-label'>Save</span></button>
      </div>
    );
  }
}