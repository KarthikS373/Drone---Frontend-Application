import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default (props) => {
  return (
    <View style={styles.container}>
      <Text>Check the</Text>
      <Text> SENSORS</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
  },
});
