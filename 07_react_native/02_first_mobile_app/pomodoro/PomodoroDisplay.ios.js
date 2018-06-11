import React from "react";
import { StyleSheet, Text, TouchableHighlight, View, Image} from "react-native";
import displayTime from "./displayTime";

function titleScreen(start) {
  return (
    <View style={styles.titleScreen}>
      <Text style={styles.title}>Pomodoro</Text>
      <TouchableHighlight style={styles.button} onPress={start}>
        <View style={styles.buttonContainer}>
          <Image style={{width: 100, height: 100}}
            source={{uri: 'https://image.flaticon.com/icons/png/128/135/135702.png'}}
          />
          <Text style={styles.buttonText}>Start</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

function pauseDisplay(timer) {
  return (
    <View style={styles.titleScreen}>
      <Text style={styles.title}>Take a pause</Text>
      <Text style={styles.timer}>{displayTime(timer)}</Text>
    </View>
  );
}

export default function(props) {
  return (
    <View style={styles.container}>
      {props.started
        ? props.pause
            ? pauseDisplay(props.timer)
            : <Text style={styles.timer}>{displayTime(props.timer)}</Text>
        : titleScreen(props.start)
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#66C7FF",
  },
  titleScreen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  title: {
    color: "white",
    fontSize: 60,
  },
  timer: {
    color: "white",
    fontFamily: "Courier",
    fontSize: 70,
  },
  button: {
    borderColor: "white",
    borderRadius: 162,
    borderWidth: 6,
    width: 10,
    height: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    backgroundColor: "#324D5C",
    width: 10,
    height: 10,
    borderRadius: 150,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 40,
  }
});
