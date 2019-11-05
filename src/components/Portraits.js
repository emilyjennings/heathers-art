import React, { Component } from 'react';
import $ from 'jquery'

import image1 from '../containers/images/portrait1.png'

class Portraits extends Component {

  state = {
    images: [image1]
  }

  changeHeader = () => {
    $('.navtitle').text("Mermaids")
  }

  render() {
    return (
      <div className="show">
        <div className="showimage"><img src={image1} id="imageid" alt="" /></div>
      </div>
    );
  };

  componentDidMount(){
    {this.changeHeader()}
  }

}

export default Portraits
