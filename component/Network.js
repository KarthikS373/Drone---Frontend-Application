// Reference link -> https://docs.expo.dev/versions/latest/sdk/network/

import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import * as Network from 'expo-network';
import styles from '../styles/sensors';

function network() {
  const [net, setnet] = useState(false);
  const internet = Network.getNetworkStateAsync();
  useEffect(() => {
    setnet(internet.isConnected);
  }, [])
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Is Internet Connected ?</Text>
    <Text style={styles.text}>{net ? "True" : "False"}</Text>
    </View>
  )
}
export default network;
