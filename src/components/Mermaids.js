import React, { Component } from 'react';
import $ from 'jquery'

import image1 from '../containers/images/mermaids/IMG_7817.jpg'
import image2 from '../containers/images/mermaids/IMG_7818.jpg'
import image3 from '../containers/images/mermaids/mermaid.png'
import image4 from '../containers/images/mermaids/mermaid4.png'
import image5 from '../containers/images/mermaids/Beautiful.png'
import image6 from '../containers/images/mermaids/blueMermaid.jpg'
import image7 from '../containers/images/mermaids/screenshot.png'


class Mermaids extends Component {

  state = {
    images: [image1, image2, image3, image4, image5, image6, image7]
  }

  changeHeader = () => {
    $('.navtitle').text("Mermaids")
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
          default:
            $('#imageid').attr('src', image1)
        }
      }
    })
  }

  // changeImage = () => {
  //   $('.forwardarrow').on({
  //     'click': function() {
  //       let i = 1
  //       const images = this.state.images
  //       for ( i = 1; i < images.length; i++ ) {
  //         if ($('#imageid').attr('src') == 'image' + i) {
  //           $('#imageid').attr('src', 'image' + '${i+1}')
  //         }
  //       }
  //     }
  //   })
  // }

  backImage = () => {
    $('.backarrow').on({
      'click': function() {
        switch ($('#imageid').attr('src')) {
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
            $('#imageid').attr('src', image7)
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

export default Mermaids
