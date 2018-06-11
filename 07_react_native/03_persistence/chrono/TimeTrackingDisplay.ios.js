import React from "react";
import { StyleSheet, Text, TouchableHighlight, View, Image, TextInput} from "react-native";
import formateTime from "./formateTime";

function titleScreen(start, handleChange, activityName, activityList,resetTime) {
  return (
    <View style={styles.titleScreen}>
      <Text style={styles.title}>Timetracking</Text>
      {historicActivity(activityList)}
      <TextInput style={styles.input}placeholder="Activity's name here" onChangeText={handleChange}/>
      <View style={styles.resetstart}>
      <TouchableHighlight style={styles.buttonStart} onPress={start}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Start</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight style={styles.buttonReset} onPress={resetTime}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Reset</Text>
        </View>
      </TouchableHighlight>
      </View>
    </View>
  );
}

historicActivity = (activityListParams) => {
    return (
      <View>
        {activityListParams.map((activity, index) => {
          return (
            <Text key={index}>{activity.key} - {formateTime(activity.value)}</Text>
          )
        })}
      </View>
    )
}

function startedScreen(timerValue, actionStop, activityName) {
  console.log(activityName)
  return (
    <View style={styles.titleScreen}>
      <Text style={styles.title}>Time</Text>
      <Text style={styles.input}>activity's name: {activityName}</Text>
      <Text style={styles.timer}>{formateTime(timerValue)}</Text>
      <TouchableHighlight style={styles.button} onPress={actionStop}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Stop</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

export default function(props) {
  return (
    <View style={styles.container}>
      {props.started
        ? startedScreen(props.timer, props.stop, props.activityName)
        : titleScreen(props.start, props.handleChange, props.activityName, props.activityList,props.resetTime)
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#84BFBA",
  },
  titleScreen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  resetstart: {
    flexDirection: "row",
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
  buttonStart: {
    borderColor: "#324D5C",
    width: 130,
    height: 130,
    alignItems: "center",
  },
  buttonReset: {
    borderColor: "#324D5C",
    borderRadius: 162,
    width: 130,
    height: 130,
    alignItems: "center",
  },
  buttonContainer: {
    width: 100,
    height: 100,
    borderRadius: 150,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 24,
    fontFamily: "Futura",

  },

  input: {
    color:"black",
    fontSize: 20,
  }
});
