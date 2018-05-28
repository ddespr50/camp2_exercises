import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import _ from "underscore";
import products from './Products.js';

class Productstable extends Component {
  constructor(props) {
    super(props)
    this.state = {products: products, sort: 'ASC'}
  }

  sortBy (column){
    let sortedProducts = this.state.products;
    if(this.state.sort === 'ASC'){
      sortedProducts = _.sortBy(this.state.products, column);
      this.setState({sort : 'DESC'});
    }else{
      sortedProducts = _.sortBy(this.state.products, column).reverse();
      this.setState({sort : 'ASC'});
    }
      this.setState({products : sortedProducts})
  }

  render() {
    return (
      <div>
      <table className="table table-striped table-secondary text-center">
        <thead>
          <tr>
            <th scope="col" onClick={this.sortBy.bind(this, "decathlon_id")}>Decathlon_id</th>
            <th scope="col" onClick={this.sortBy.bind(this, "title")}>Title</th>
            <th scope="col" onClick={this.sortBy.bind(this, "price")}>Price</th>
          </tr>
        </thead>
        <tbody>
        {this.state.products.map(product =>
          <tr key={product.decathlon_id}>
            <td>{product.decathlon_id}</td>
            <td>{product.title}</td>
            <td>{product.price}</td>
          </tr>
        )}
        </tbody>
      </table>
      </div>
    );
  }
}

export default Productstable;
