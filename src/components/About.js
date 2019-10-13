import React, { Component } from 'react';
import $ from 'jquery'

import heather from '../containers/images/heather.PNG'

export default class About extends Component {

  changeHeader = () => {
    $('.navtitle').text("About Heather")
    $('.navstick').hide()
  }

  render() {
    return (
      <div className="aboutcontainer">
        <div className="aboutimage">
          <img src={heather}></img>
        </div>
        <div className="bio">
          text content here - bio of some kind
        </div>
      </div>
    );
  };

  componentDidMount(){
    {this.changeHeader()}
  }
}
