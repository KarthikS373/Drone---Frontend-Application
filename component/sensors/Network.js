// Reference link -> https://docs.expo.dev/versions/latest/sdk/network/

import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
import NetInfo from "@react-native-community/netinfo";

export default () => {
  const [net, setNet] = useState(false);

  useEffect(() => {
    NetInfo.addEventListener((state) => {
      state.isInternetReachable ? setNet(true) : setNet(false);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}> Is Internet Connected ?</Text>
      <Text style={styles.text}>{net ? "True" : "False"}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  text: {
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "stretch",
    marginTop: 15,
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eee",
    padding: 10,
  },
  middleButton: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "#ccc",
  },
});
