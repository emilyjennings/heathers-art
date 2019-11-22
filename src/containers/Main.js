import React, { Component } from 'react';
import { Link } from "react-router-dom";
import $ from 'jquery'
import Fade from 'react-reveal/Fade';

import portrait1 from './images/portrait1.png'
import bees from './images/bees.png'
import mermaid4 from './images/mermaid4.png'
import beachwalk from './images/commissions/BeachWalk.jpg'

export default class MainGallery extends Component {

// All of Heather's artwork is stored in state
state = {
    images: {
        0: {
          img: mermaid4,
          desc: "mermaids",
          price: "price here",
          url: "/mermaids",
          id: 0
        },
        1: {
          img: portrait1,
          desc: "portraits",
          price: "price here",
          url: "/portraits",
          id: 1
        },
        2: {
          img: bees,
          desc: "miscellaneous",
          price: "price here",
          url: "/misc",
          id: 2
        },
        3: {
          img: beachwalk,
          desc: "commissions",
          price: "price here",
          url: "/commissions",
          id: 3

        }
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
          <Link to={image.url}>
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
        <div className="project_gallery">
          <div className="projectspage">
            {this.displayCards()}
          </div>
        </div>
        <div className="blank"></div>
      </div>
    );
  };

}
