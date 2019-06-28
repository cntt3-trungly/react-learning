import React, { Component } from 'react';
import HeadTitle from './HeadTitle';
import Products from './Product';
import './App.css';
import axios from 'axios';
import AppProducts from './AppProduct';
//import dataProducts  from 'http://localhost:5000/getData01'
const getProductData = () =>
  axios.get('http://localhost:5000/getData01')
    .then((res) => res.data)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
  }
  componentWillMount() {
    if (this.state.data === null) {
      getProductData().then((res) => {
        this.setState({
          data: res
        });
      })
    }
  }

  printData = () => {
    if (this.state.data !== null) {
      return this.state.data.map((value, key) =>

        (<Products
          key={key}
          product_name={value.product_name}
          product_price={value.product_price}
          image={value.image} />)
        )
    }
  }
  render() {
    console.log(this.state.data);

    return (
      <div>
        <HeadTitle />
        <AppProducts/>
        <div className="container">
          <div className="row">
            {
              this.printData()
            }

          </div>
        </div>

      </div>
    );
  }
}

export default App;

