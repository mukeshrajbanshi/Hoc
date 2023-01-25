import React, { Component } from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import withIncrement from "./withIncrement";
class TouchComponent extends Component {
  render() {
    const { Count, increment } = this.props;
    return (
      <View style={styles.container}>
        <text>Touch Component to test Hoc</text>
        <Button onPress={increment} title="Press Me"></Button>
        <Text>Button Pressed {Count} times</Text>
      </View>
    );
  }
}
export default withIncrement(TouchComponent);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
});
