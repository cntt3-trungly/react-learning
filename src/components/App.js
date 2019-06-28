import React, { Component } from 'react';
import HeadTitle from './HeadTitle';
import Products from './Product';
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <HeadTitle />
        <div className="container">
          <div className="row">
            <Products
              product_name='Bút chì'
              product_price='500000'
              image='http://channel.mediacdn.vn/2019/6/28/photo-1-15616990644991682841763.jpg' />
            <Products
              product_name='Bút bi'
              product_price='100000'
              image='https://kenh14cdn.com/zoom/280_175/2019/6/28/gif-4-15616969719491971969447-crop-15617045186841915171446.gif' />

          </div>
        </div>

      </div>
    );
  }
}

export default App;

