import React, { Component } from 'react';
import $ from 'jquery'

import image1 from '../containers/images/portrait1.png'
import image2 from '../containers/images/yogaportraits/Heart_Fish.jpg'
import image3 from '../containers/images/yogaportraits/Root_Twist.jpg'
import image4 from '../containers/images/yogaportraits/Sacral.jpg'
import image5 from '../containers/images/portraits/Myles.png'
import image6 from '../containers/images/portraits/Naomi.png'
import image7 from '../containers/images/portraits/Samuel.png'
import image8 from '../containers/images/portraits/Willow.png'

class Portraits extends Component {

  state = {
    images: [image1, image2, image3, image4, image5, image6, image7, image8]
  }

  changeHeader = () => {
    $('.navtitle').text("Portraits")
  }

  changeImage = () => {
    $('.forwardarrow').on({
      'click': function() {
        switch ($('#imageid').attr('src')) {
          case image1:
            $('#imageid').attr('src', image2)
            break;
          case image2:
            $('#imageid').attr('src', image3)
            break;
          case image3:
            $('#imageid').attr('src', image4)
            break;
          case image4:
            $('#imageid').attr('src', image5)
            break;
          case image5:
            $('#imageid').attr('src', image6)
            break;
          case image6:
            $('#imageid').attr('src', image7)
            break;
          case image7:
            $('#imageid').attr('src', image8)
            break;
          default:
            $('#imageid').attr('src', image1)
        }
      }
    })
  }

  backImage = () => {
    $('.backarrow').on({
      'click': function() {
        switch ($('#imageid').attr('src')) {
          case image8:
            $('#imageid').attr('src', image7)
            break;
          case image7:
            $('#imageid').attr('src', image6)
            break;
          case image6:
            $('#imageid').attr('src', image5)
            break;
          case image5:
            $('#imageid').attr('src', image4)
            break;
          case image4:
            $('#imageid').attr('src', image3)
            break;
          case image3:
            $('#imageid').attr('src', image2)
            break;
          case image2:
            $('#imageid').attr('src', image1)
            break;
          default:
            $('#imageid').attr('src', image8)
        }
       }
    })
  }

  render() {
    return (
      <div className="show">
        <div className="backarrow"><i class="fas fa-arrow-left"></i></div>
        <div className="showimage"><img src={this.state.images[0]} id="imageid" alt="" /></div>
        <div className="forwardarrow"><i class="fas fa-arrow-right"></i></div>
      </div>
    );
  };

  componentDidMount(){
    {this.changeHeader()}
    {this.changeImage()}
    {this.backImage()}
  }
}

export default Portraits
