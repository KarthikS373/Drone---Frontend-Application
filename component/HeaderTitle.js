import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

export default (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrap}>
        <Text style={styles.text}>Check the</Text>
        <Text style={styles.sensors}> SENSORS</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "95%",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  wrap: {
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  link: {
    color: "#356ED1",
  },
  text: {
    color: "white",
  },
  sensors: {
    color: "#0D6EFD",
  },
});
