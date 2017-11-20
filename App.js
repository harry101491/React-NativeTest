import React, { Component } from "react";
import { AppRegistry, View, Text, StyleSheet } from "react-native";

export default class App extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      // view native component
      <View>
        <Text style={{ color: "blue", fontWeight: "bold", fontSize: 30, }}>
          Big Blue Font
        </Text>
        <Text style={{ color: "red"}}>
          Red Text
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent("NativeProject", () => App);