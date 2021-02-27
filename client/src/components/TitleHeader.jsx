import React from 'react';

export default class TitleHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>✪ {this.props.headerValue}</div>
    );
  }
}