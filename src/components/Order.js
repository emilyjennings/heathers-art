import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery'


const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

export default class Contact extends Component {


// changes the header subtitle
  changeHeader = () => {
    $('.navtitle').text("How to Order")
  }

  parallaxFooter = () => {
    $(window).scroll(function(){
      $(".footer-img").css("background-position", "0% "  + (($(window).scrollTop() / 13)) + "%");
    });
  }


  componentDidMount(){
    {this.changeHeader()}
    {this.parallaxFooter()}
  }


// contact form as per code given by netlify's form docs
  render() {
    return (
      <div className="contactpage">
        <div className="contactcontainer">
        <div className="bio">
          How to order:
        </div>
        <div className="formcaption">When you're ready, <Link to="/contact">contact me.</Link></div>

        <div className="space"></div>

        </div>
      </div>
    );
  };


}
