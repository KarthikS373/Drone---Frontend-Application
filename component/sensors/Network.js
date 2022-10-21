// Reference link -> https://docs.expo.dev/versions/latest/sdk/network/

import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import NetInfo from "@react-native-community/netinfo";
import styles from "../styles/sensors";

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
