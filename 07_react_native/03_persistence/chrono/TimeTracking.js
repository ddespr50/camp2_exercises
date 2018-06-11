import React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import TimeTrackingDisplay from "./TimeTrackingDisplay";


export default class Timetracking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: this.props.startTime,
      started: false,
      activityName: "",
      activityList: [
        {key: "exemple 1" ,value: 2},
        {key: "exemple 2" ,value: 10},
        {key: "exemple 3" ,value: 30}
      ]
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  tick = () => {
    if(this.state.started) {
      this.setState({timer: this.state.timer + 1});
    }
  }

  start = () => {
    clearInterval(this.intervalId);
    this.intervalId = setInterval(this.tick, 1000);
    this.setState({
      timer: this.props.startTime,
      started: true
    })
  }

  stop = () => {
    this.setState({
      activityList:
      [...this.state.activityList,{key: this.state.activityName ,value: this.state.timer}],
      started: false
    })
  }

  handleChange = (inputValue) => {
    this.setState({
      activityName: inputValue
    })
  }

  resetTime = () => {
    this.setState({
      activityList:
      [],
      started: false
    })
  }



  render() {
    return (
      <View style={{flex:1}}>
      <TimeTrackingDisplay
        timer={this.state.timer}
        started={this.state.started}
        start={this.start}
        stop={this.stop}
        activityName={this.state.activityName}
        handleChange={this.handleChange}
        activityList={this.state.activityList}
        resetTime={this.resetTime}
      />
      </View>
    );
  }
}
