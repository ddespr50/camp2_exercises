import React, { Component } from "react";

class ChatBot extends Component {
  constructor(props) {
    super(props);
    this.refDom = React.createRef();
    this.sayHello = this.sayHello.bind(this);
    this.state = {
      messages: []
    };
  }

  componentDidUpdate(){
    this.refDom.current.scrollTop = this.refDom.current.scrollHeight;
  }

  componentWillUnmount(){
    clearInterval(this.state.linkInterval);
  }

  componentDidMount() {
    const linkInterval = setInterval(this.sayHello, 100);
    this.setState ({linkInterval} : linkInterval)
  }

  sayHello() {
    this.setState({
      messages: [...this.state.messages, "Hey there!"]
    });
  }
  render() {
    console.log("render")
    return (
      <div ref={this.refDom} style={{height: 300, overflow:"auto"}}>
        {this.state.messages.map((message, index) =>
          <div
            key={index}>{message}</div>
        )}
      </div>
    )
  }
}

export default ChatBot;
