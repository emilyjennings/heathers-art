import React, { Component } from 'react';
import $ from 'jquery'

import image1 from '../containers/images/image1.jpg'
import image2 from '../containers/images/image2.jpeg'
import image3 from '../containers/images/image3.jpeg'


class ShowPage extends Component {

  changeHeader = () => {
    $('.navtitle').text(this.props.images[this.props.current_card].desc)
    // $('.navlinks').hide()
  }

  render() {
    const images = this.props.images
    const current_card = this.props.current_card
    return (
      <div className="projectshowborder">
        <div className="projectborder">
          <div className="showimg"><img src={images[current_card].img} alt="" /></div>
          <div className="desc">{images[current_card].desc}</div>
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
