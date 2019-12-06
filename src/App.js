import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";

import MainGallery from './containers/Main'
import Mermaids from './components/Mermaids'
import MiscWork from './components/MiscWork'
import Commissions from './components/Commissions'
import Portraits from './components/Portraits'
import Contact from './components/Contact'
import About from './components/About'
import Footer from './components/Footer'
import Header from './containers/Header'
import Order from './components/Order'

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
          <Route exact path="/mermaids" component={Mermaids} />
          <Route exact path="/commissions" component={Commissions} />
          <Route exact path="/misc" component={MiscWork} />
          <Route exact path="/portraits" component={Portraits} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about" component={About} />
          <Route exact path="/order" component={Order} />

          <Footer />

        </div>
      </BrowserRouter>

    );
  }
}

export default App;
