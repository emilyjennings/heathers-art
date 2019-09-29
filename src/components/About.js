import React, { Component } from 'react';
import $ from 'jquery'

// import katie from './images/Katieslashrun.jpg'

export default class About extends Component {

  changeHeader = () => {
    $('.navsubtitle').text("about me")
    $('.navstick').hide()
  }

  render() {
    return (
      <div className="aboutcontainer">
        <div className="aboutimage">
          (an image of the artist here)
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
