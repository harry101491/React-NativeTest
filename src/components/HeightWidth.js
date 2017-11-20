import React, { Component } from "react";
import { View, Text } from "react-native";

class HeightWidth extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <View style={{ height: 50, width: 50, backgroundColor:"#FF00FF" }}></View>
                <View style={{ height: 100, width: 100, backgroundColor:"#FFFF00" }}></View>
                <View style={{ height: 150, width: 150, backgroundColor:"#00FFFF" }}></View>
            </View>
        );
    }
}

export default HeightWidth;