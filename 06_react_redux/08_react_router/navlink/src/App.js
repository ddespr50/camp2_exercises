import React, { Component } from 'react';
import './App.css';
import {
  NavLink,
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

const Articles = () => (
  <div>
    <h6>You can find here some articles</h6>
    <ul>
    <li><NavLink to="/articles/42" activeClassName="selected">Article 42</NavLink></li>
    <li><NavLink to="/articles/1337" activeClassName="selected">Article 1337</NavLink></li>
    </ul>
  </div>
)

const Article42 = () => (
  <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget lacus vitae purus luctus luctus. Donec aliquet accumsan orci, in finibus augue maximus in. Fusce rutrum efficitur mi ac vehicula. Nunc eleifend rutrum velit a molestie. Praesent rutrum lectus metus, quis laoreet eros feugiat a. Nam vel turpis ex. Donec egestas tortor facilisis nulla aliquam malesuada. Integer vitae nisi ac eros euismod condimentum vel et leo. Morbi condimentum leo vel libero blandit facilisis quis lobortis ligula. Ut elementum arcu dignissim nisl tincidunt ultricies. Mauris pellentesque lectus sit amet massa ullamcorper facilisis.
  </div>
)

const Article1337 = () => (
  <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et maximus urna, id tincidunt purus. Vestibulum et quam a eros porta varius sit amet sit amet augue. Donec facilisis turpis non ornare varius. Proin mollis tellus id elit hendrerit, sagittis maximus sapien fringilla. Aenean sodales commodo tortor ut convallis. Quisque facilisis eros vitae rutrum hendrerit. Nulla quis nibh at purus dignissim fermentum vitae nec lorem. Cras viverra ullamcorper leo ac pellentesque. Ut eget rutrum odio, at consequat sapien. Vivamus in turpis non urna ultricies vehicula.
</div>
)



class BasicExampleRouteWithNavlink extends Component {
  render() {
    return (
      <div>
        <h1>First app about Route</h1>
        <ul>
          <li><NavLink exact to="/" activeClassName="selected"
>Home </NavLink></li>
          <li><NavLink to="/about" activeClassName="selected"
>About</NavLink></li>
          <li><NavLink to="/articles" activeClassName="selected"
>Articles</NavLink></li>



        </ul>
        <hr/>

        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/articles" component={Articles}/>
        <Route exact path="/articles/42" component={Article42}/>
        <Route exact path="/articles/1337" component={Article1337}/>

      </div>
    );
  }
}

export default BasicExampleRouteWithNavlink;
