import React, { Component } from 'react';
import './App.css';
import expenses from './expenses';
import users from './users';
import _ from 'underscore';


// App has `expenses` and `users` as props
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      expenses: expenses,
      users: users
    };
  }


  render() {
    return (
      <div className="App">
        <table class="table table-striped table-secondary text-center">
          <thead>
            <tr>
              <th scope="col" >What has been paid</th>
              <th scope="col" >By whom?</th>
            </tr>
          </thead>
          <tbody>
            {this.state.expenses.map((expense,index) => {
              const userFound = _.findWhere(this.state.users, {id: expense.who});
              let username="";
              if (userFound !== undefined){
                username = userFound.name;
              }
              return (
                <tr>
                  <td>{expense.what}</td>
                  <td>{username}</td>
                </tr>
            )
          }
          )
        }
          </tbody>
        </table>
      </div>
    )}
}




export default App;
