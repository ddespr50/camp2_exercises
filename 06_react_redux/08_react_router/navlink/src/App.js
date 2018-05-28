import React, { Component } from 'react';
import './App.css';
import {
  NavLink,
  Route,
  Link,
  Switch
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

const Articles = () => (
  <div>
    <h6>You can find here some articles</h6>
    <ul>
    <li><NavLink to="/articles/42" activeClassName="selected">Article 42</NavLink></li>
    <li><NavLink to="/articles/1337" activeClassName="selected">Article 1337</NavLink></li>
    </ul>
  </div>
)

const Article42 = (props) => (
  <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget lacus vitae purus luctus luctus.</div>
)

const Article1337 = (props) => (
  <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et maximus urna, id tincidunt purus.</div>
)

const User = (props) => (
  <div>
    <div>{props.match.params.user}</div>
    <img className="photo" src="https://scontent-frt3-2.xx.fbcdn.net/v/t31.0-8/10916328_10152942124204854_1615500087149760975_o.jpg?_nc_cat=0&oh=9a730461e8efba7735da86906ef16501&oe=5B762A36"/>
  </div>
)
class BasicExampleRouteWithNavlink extends Component {
  render() {
    return (
      <div>
        <h3>First app about Route</h3>
        <ul>
          <li><NavLink exact to="/" activeClassName="selected">Home </NavLink></li>
          <li><NavLink to="/about" activeClassName="selected">About</NavLink></li>
          <li><NavLink to="/articles" activeClassName="selected">Articles</NavLink></li>
          <li><NavLink to="/Damien" activeClassName="selected">User</NavLink></li>
        </ul>
        <hr/>

        <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route exact path="/articles" component={Articles}/>
        <Route path="/articles/42" component={Article42}/>
        <Route path="/articles/1337" component={Article1337}/>
        <Route exact path="/:user" component={User}/>
        </Switch>


      </div>
    );
  }
}

export default BasicExampleRouteWithNavlink;
