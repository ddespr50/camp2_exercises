import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Route,
  Link
} from 'react-router-dom';


const Home = () => (
  <div>
    <h6>This is the homepage</h6>
  </div>
)

const About = () => (
  <div>
    <h6>More information about the app</h6>
  </div>
)

const Article = () => (
  <div>
    <h6>You can find here some articles here</h6>
  </div>
)

class BasicExampleRoute extends Component {
  render() {
    return (
      <div>
        <h1>First app about Route</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/article">Article</Link></li>
        </ul>

        <hr/>

        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/article" component={Article}/>
      </div>
    );
  }
}

export default BasicExampleRoute;
