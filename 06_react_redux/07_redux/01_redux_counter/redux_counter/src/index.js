import React from 'react';
import { render } from 'react-dom';
import Counter from './Counter';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


const initialState = {
  count: 0
};

function reducer(state = initialState, action) {

  switch(action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    case 'INCREMENT+10':
      return{
        count: state.count + 10
      };
    case 'DECREMENT-10':
      return{
        count: state.count - 10
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <Counter/>
  </Provider>
);

render(<App />, document.getElementById('root'));
