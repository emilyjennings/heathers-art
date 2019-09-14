import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";

import MainGallery from './containers/Main'
import Gallery1 from './components/Gallery1'
import Gallery2 from './components/Gallery2'
import Contact from './components/Contact'
import About from './components/About'

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="app">
         <MainGallery />

          <Route exact path="/" component={MainGallery} />
          <Route exact path="/gallery1" component={Gallery1} />
          <Route exact path="/gallery2" component={Gallery2} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about" component={About} />

        </div>
      </BrowserRouter>

    );
  }
}

export default App;
