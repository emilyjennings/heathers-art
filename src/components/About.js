import React, { Component } from 'react';
import $ from 'jquery'

import heather from '../containers/images/heather.PNG'

export default class About extends Component {

  changeHeader = () => {
    $('.navtitle').text("About Heather")
    $('.navstick').hide()
  }

  render() {
    return (
      <div className="aboutcontainer">
        <div className="aboutimage">
          <img src={heather}></img>
        </div>
        <div className="bio">
        Heather Brown Cadalzo began her artistic journey when she began studying under master painter Elaine Sgambati at age 14. Bartering time working at her studio in Island Heights, NJ for lessons, Heather became an apprentice of sorts and learned to paint in oils with a focus on impressionistic representation of light/shadow.
        Knowing she was choosing art for her life focus, Heather went on to receive her Bachelor of Fine Art/Illustration from the School of Visual Arts (SVA) in New York, NY in 2002.
        <br></br>
        Heather returned to NJ and was blessed with her first daughter, Willow. She taught under her mentor and found her love of teaching young artists.
        Portraiture was always a favorite, and for years following art school, she created commissioned paintings for countless private collections. She became involved in the local Monmouth County galleries and the Art Alliance, serving on the board for 5 years.
        <br></br>
        In 2006, joined by her new business partner Rose Killmer, she opened Inspired Minds Fine Art School LLC in Lincroft, NJ. It has now grown into 2 locations (Lincroft and Brielle), with over 130 students per session, a team of talented art educators and a legacy of alumni students. She truly enjoys sharing her artistic knowledge with art students to give them the tools to develop their ideas and emotions visually.
        2012 Heather married her soulmate, Brandon Cadalzo. Not only is he her grounding force, but a supportive partner, always cheering her on and holding down the fort when the chaos of this busy life takes over.
        <br></br>
        In 2015 she received her Master’s of Science in Occupational Therapy and shortly after welcomed her second daughter, Leia, into the world.
        <br></br>
        She currently juggles her valued life roles of mother, wife, business owner/artist, and OT- while balancing health, creativity, and forever planning her next project.

        </div>
      </div>
    );
  };

  componentDidMount(){
    {this.changeHeader()}
  }
}
