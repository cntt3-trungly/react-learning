import React, { Component } from 'react';
import HeadTitle from './HeadTitle';
import Products from './Product';
import  './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <HeadTitle />
        <div className="container">
          <div className="row">
            <Products/>
            <Products/>
            <Products/>
            <Products/>
          </div>
        </div>

      </div>
    );
  }
}

export default App;

