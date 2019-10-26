import React, { Component } from 'react';
import { Link } from "react-router-dom";
import $ from 'jquery'
import Fade from 'react-reveal/Fade';

import ShowPage from '../components/ShowPage.js'

import portrait from './images/image1.jpg'
import bees from './images/image2.jpeg'
import pond from './images/image3.jpeg'
import image4 from './images/IMG_7817.jpg'
import image5 from './images/IMG_7818.jpg'
import image6 from './images/IMG_7819.jpg'
import image7 from './images/IMG_7820.jpg'
import image8 from './images/IMG_7821.jpg'
import image9 from './images/IMG_7822.jpg'
import image10 from './images/IMG_7823.jpg'
import image11 from './images/IMG_7826.jpg'

export default class MainGallery extends Component {

// All of Heather's artwork is stored in state
  constructor(props) {
    super(props);
    this.state = {
      images: {
        0: {
          img: portrait,
          desc: "portrait",
          price: "price here",
          url: "/portrait",
          id: 0
        },
        1: {
          img: bees,
          desc: "bees",
          price: "price here",
          url: "/bees",
          id: 1
        },
        2: {
          img: pond,
          desc: "pond",
          price: "price here",
          url: "/pond",
          id: 2
        },
        3: {
          img: image4,
          desc: "mermaid",
          price: "price here",
          url: "/image3",
          id: 2
        },
        4: {
          img: image5,
          desc: "mermaid",
          price: "price here",
          url: "/image3",
          id: 2
        },
        5: {
          img: image6,
          desc: "plants",
          price: "price here",
          url: "/image3",
          id: 2
        },
        6: {
          img: image7,
          desc: "cacti",
          price: "price here",
          url: "/image3",
          id: 2
        },
        7: {
          img: image8,
          desc: "flowers",
          price: "price here",
          url: "/image3",
          id: 2
        },
        8: {
          img: image9,
          desc: "clouds",
          price: "price here",
          url: "/image3",
          id: 2
        },
        9: {
          img: image10,
          desc: "bees",
          price: "price here",
          url: "/image10",
          id: 2
        },
        10: {
          img: image11,
          desc: "mermaid",
          price: "price here",
          url: "/image3",
          id: 2
        },
      },
      current_card: null
    }
  }

  changeHeader = () => {
    $('.navtitle').text("Heather Brown Cadalzo")
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
          {this.displayCards()}
        </div>
        <div className="noimage"></div>
      </div>
    );
  };

}
