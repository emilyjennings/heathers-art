import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";

import MainGallery from './containers/Main'
import Gallery1 from './components/Gallery1'
import Gallery2 from './components/Gallery2'
import Contact from './components/Contact'
import About from './components/About'
import Footer from './components/Footer'
import Header from './containers/Header'
import ShowPage from './components/ShowPage'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronUp, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons'

library.add(faChevronUp, faTimes, faInstagram, faLinkedin, faFacebook)


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="app">

          <Header />

          <Route exact path="/" component={MainGallery} />
          <Route exact path="/mermaids" component={Gallery1} />
          <Route exact path="/forsale" component={Gallery2} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about" component={About} />

          <Route exact path="/portrait" component={ShowPage} />
          <Route exact path="/bees" component={ShowPage} />
          <Route exact path="/pond" component={ShowPage} />


          <Footer />

        </div>
      </BrowserRouter>

    );
  }
}

export default App;
