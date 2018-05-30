import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {

  increment = () => {
    this.props.dispatch({type: 'INCREMENT'})

  }

  incrementMax = () => {
    this.props.dispatch({type: 'INCREMENT+10'})

  }

  decrement = () => {
    this.props.dispatch({type: 'DECREMENT'})

  }

  decrementMax = () => {
    this.props.dispatch({type: 'DECREMENT-10'})

  }

  render() {
    return (
      <div>
        <h2>Counter with redux</h2>
        <div>
          <button type="button" className="btn btn-outline-danger" onClick={this.decrementMax}>--</button>
          <button type="button" className="btn btn-outline-primary" onClick={this.decrement}>-</button>
          <span>{this.props.count}</span>
          <button type="button" className="btn btn-outline-primary" onClick={this.increment}>+</button>
          <button type="button" className="btn btn-outline-danger" onClick={this.incrementMax}>++</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(reduxState) {
  return {
    count: reduxState.count
  };
}

export default connect(mapStateToProps)(Counter);
