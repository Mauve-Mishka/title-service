import React from 'react';
import axios from 'axios';
import TitleHeader from './TitleHeader.jsx';
import TitleDetail from './TitleDetail.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roomId: '',
      titleName: '',
      isSaved: false,
      location: '',
      reviewScore: 0.0
    }
  }

  componentDidMount() {
    let url = window.location.href;
    let urlParts = url.split('/');
    axios.get(`/rooms/${urlParts[4]}/title`)
    .then((res) => {
      let setter = res.data[0];
      this.setState({
        roomId: urlParts[4],
        titleName: setter.titleName,
        isSaved: setter.isSaved,
        location: setter.location,
        reviewScore: setter.reviewScore
      });
    })
  }

  render() {
    return (
      <div className = 'title-main'>
      <TitleHeader headerValue = {this.state.titleName} />
      <TitleDetail stateObject = {this.state} />
      </div>
    );
  }
}