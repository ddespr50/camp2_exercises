import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class DogApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: ""
    };
  }

  componentDidMount() {
    this.refresh();
  }

  refresh(){
    console.log("refresh");
    return fetch('https://random.dog/woof.json',
    {method : 'get'})
      .then(response => response.json())
      .then(data => {
        this.setState({
          url: data.url
        });
      })
  }

  render() {
    return (
      <div>
        <div className="App">
          <div> Bonjour , le chien </div>
          <img src= {this.state.url} />
        </div>
        <div>
        <button  onClick={() => this.refresh()} >Refresh</button>
        </div>
      </div>
    );
  }
}

export default DogApp;
