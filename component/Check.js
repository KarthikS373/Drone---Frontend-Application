import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SvgXml } from "react-native-svg";

import tick from "./Icons/Tick.js";
import cross from "./Icons/Cross.js";

export default ({ result, title, desc, onClick }) => {
  return (
    <TouchableOpacity onPress={onClick}>
      <View style={result ? styles.success : styles.failure}>
        {result ? (
          <SvgXml xml={tick} height="20%" width="20%" />
        ) : (
          <SvgXml xml={cross} height="20%" width="20%" />
        )}
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{desc}</Text>
      </View>
    </TouchableOpacity>
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
    overflow: "hidden",
  },
  failure: {
    backgroundColor: "#F9385E",
    height: height * 0.4,
    width: width * 0.9,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 20,
    overflow: "hidden",
  },
  title: {
    color: "white",
    marginTop: 25,
    marginHorizontal: 10,
    fontSize: 32,
  },
  text: {
    color: "#B3B3B3",
    marginTop: 10,
    fontSize: 16,
    lineHeight: 25,
    marginLeft: 10,
    textAlign: "center",
  },
});
