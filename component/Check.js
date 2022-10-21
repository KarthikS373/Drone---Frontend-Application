import { View, Text, StyleSheet } from "react-native";
import React from "react";

import Tick from "./Icons/Tick";
import Cross from "./Icons/Cross";

export default ({ result, title, desc }) => {
  return (
    <View style={result ? styles.success : styles.failure}>
      {result ? <Tick /> : <Cross />}
      <Text>{title}</Text>
    </View>
  );
};

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  success: {
    backgroundColor: "#3F8AFF",
    height: height * 0.4,
    width: width * 0.9,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 20,
  },
  failure: {
    backgroundColor: "#F9385E",
    height: height * 0.4,
    width: width * 0.9,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 20,
  },
});
