import React, { Component } from 'react';
import $ from 'jquery'

import portrait from '../containers/images/image1.jpg'
import bees from '../containers/images/image2.jpeg'
import pond from '../containers/images/image3.jpeg'



class ShowPage extends Component {

  changeHeader = () => {
    $('.navtitle').text(this.props.current_card)
    // $('.navlinks').hide()
  }

  render() {
    const images = this.props.images
    const current_card = this.props.current_card
    return (
      <div className="image-show-border">
        <div className="image-border">
          <div className="show-img"><img src={portrait} alt="" /></div>
        </div>
        <div className="buttons">
          <div className="goback" onClick={() => window.history.back()}><a href="">go back</a></div>
        </div>
      </div>
    );
  };

  componentDidMount(){
    {this.changeHeader()}
  }

}

export default ShowPage
