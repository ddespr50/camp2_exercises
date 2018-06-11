import React from "react";
import Pomodoro from "./Pomodoro";


export default function App(props) {
  return <Pomodoro activeTime={25} pauseTime={5} />;
}
