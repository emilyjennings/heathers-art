import React, { Component } from 'react';
import { Link } from "react-router-dom";
import $ from 'jquery'
import Fade from 'react-reveal/Fade';

import ShowPage from '../components/ShowPage.js'

import image1 from './images/image1.jpg'
import image2 from './images/image2.jpeg'
import image3 from './images/image3.jpeg'

export default class MainGallery extends Component {

// All of Heather's artwork is stored in state
  constructor(props) {
    super(props);
    this.state = {
      images: {
        0: {
          img: image1,
          desc: "image 1",
          price: "price here",
          url: "/image1",
          id: 0
        },
        1: {
          img: image2,
          desc: "image 2",
          price: "price here",
          url: "/image2",
          id: 1
        },
        2: {
          img: image3,
          desc: "image 3",
          price: "price here",
          url: "/image3",
          id: 2
        },
      },
      current_card: null
    }
  }

  changeHeader = () => {
    $('.navtitle').text("Heather Cadalzo")
    // $('.navstick').show()
  }

  // Used to render the gallery images
  displayCards = () => {
    return Object.values(this.state.images).map(image =>
      <Fade up>
        <div className="clearfix">
          <Link to={image.url} onClick={() => this.setState({ current_card: image.id})}>
            <div className="cardborder">
              <div className="imageborder" id={image.id}>
                <img src={image.img} alt="" />
              </div>
              <div className="caption">{image.desc}</div>
            </div>
          </Link>
        </div>
      </Fade>
    )
  }

  componentDidMount(){
    {this.changeHeader()}
  }


  render() {
    return (
      <div className="gallery">
        <div className="projectspage">
          {this.state.current_card != null ? <ShowPage current_card={this.state.current_card} images={this.state.images} /> : this.displayCards()}
        </div>
        <div className="noimage"></div>
      </div>
    );
  };

}
