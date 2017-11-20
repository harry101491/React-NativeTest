import React, { Component } from "react";
import { AppRegistry, View, Text, StyleSheet } from "react-native";
import HeightWidht from "./src/components/HeightWidth";

const styles = StyleSheet.create({
  bigBlue: {
    color: "#0000FF",
    fontSize: 30,
    fontWeight: "bold"
  },
  red: {
    color: "#FF0000"
  }
});

export default class App extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      // view native component
      <View>
        <HeightWidht />
        {/* <Text style={styles.bigBlue}>
          Big Blue Font
        </Text>
        <Text style={styles.red}>
          Red Text
        </Text>
        <Text style={[styles.red, styles.bigBlue]}>
          First Red and then Big Blue
        </Text>
        <Text style={[styles.bigBlue, styles.red]}>
          First Red and then Big Blue
        </Text> */}
      </View>
    );
  }
}

AppRegistry.registerComponent("NativeProject", () => App);