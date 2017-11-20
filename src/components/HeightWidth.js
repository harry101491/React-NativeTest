import React, { Component } from "react";
import { View, Text } from "react-native";

class HeightWidth extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{ flex:1 }}>
                <View style={{ backgroundColor:"#FF00FF", flex: 1 }}></View>
                <View style={{ backgroundColor:"#FFFF00", flex: 2 }}></View>
                <View style={{ backgroundColor:"#00FFFF", flex: 3 }}></View>
            </View>
        );
    }
}

export default HeightWidth;