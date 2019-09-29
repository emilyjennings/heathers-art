import React, { Component } from 'react';
import { Link } from "react-router-dom";
import $ from 'jquery'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class NavBar extends Component {

  scrollTop = () => {
      $(window).scrollTop(0);
  }

  render() {
    return (
      <div className="nav">
        <div className="navlinks">
          <Link to="/contact" onClick={() => this.scrollTop()}><div className="contactlink">Contact</div></Link>
          <Link to="/about" onClick={() => this.scrollTop()}><div className="contactlink">About Heather</div></Link>
          <Link to="/" onClick={() => this.scrollTop()}><div className="homelink">Home</div></Link>
        </div>
        <div className="socialmedia">
          <a href="#"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
          <a href="#"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
          <a href="#"><FontAwesomeIcon icon={['fab', 'facebook']} /></a>
        </div>
      </div>
    );
  }

}

// <button className="hamburger">&#9776;</button>
// <div className="mobile-navlinks">
//   <Link to="/contact" onClick={() => this.scrollTop()}><div className="contactlink">Contact</div></Link>
//   <Link to="/about" onClick={() => this.scrollTop()}><div className="contactlink">About Heather</div></Link>
//   <Link to="/" onClick={() => this.scrollTop()}><div className="homelink">Home</div></Link>
//   <div className="cross"><Link to=""><FontAwesomeIcon icon={['fas', 'times']} /></Link></div>
// </div>
