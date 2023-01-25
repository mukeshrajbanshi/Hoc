import React, { Component } from "react";
import { Button, StyleSheet,Text, View } from "react-native";
import withIncrement from "./withIncrement";
class ButtonComponent extends Component {
  render() {
    const { Count, increment } = this.props;
    return (
      <View style={styles.container}>
        <text>Button Component to test Hoc</text>
        <Button onPress={increment} title="Press Me"></Button>
        <Text>Button Pressed {Count}</Text>
      </View>
    );
  }
}
export default withIncrement(ButtonComponent);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});
