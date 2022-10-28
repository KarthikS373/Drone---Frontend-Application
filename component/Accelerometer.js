// Reference link -> https://docs.expo.dev/versions/latest/sdk/accelerometer/

import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View, Dimensions,Button } from "react-native";
import { Accelerometer } from "expo-sensors";
import styles from "../styles/sensors";
import { round } from "../utils/round";
import { LineChart } from "react-native-chart-kit";


// for graphing data
let datasets = { x: [0], y: [0], z: [0] }

export default function accelerometer({navigation}) {
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [subscription, setSubscription] = useState(null);

  const _slow = () => {
    Accelerometer.setUpdateInterval(1000);
  };

  const _fast = () => {
    Accelerometer.setUpdateInterval(100);
  };

  const _subscribe = () => {
    setSubscription(
      Accelerometer.addListener((accelerometerData) => {
        setData(accelerometerData);

        // add data to datasets to draw graph
        datasets.x.push(accelerometerData.x * 9.81);
        datasets.y.push(accelerometerData.y * 9.81);
        datasets.z.push(accelerometerData.z * 9.81);

        // max no. of elements in dataset = 20 
        if (datasets.x.length >= 20) {
          datasets.x.splice(0, 1);
          datasets.y.splice(0, 1);
          datasets.z.splice(0, 1);
        }
      })
    );
  };

  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  useEffect(() => {
    _subscribe();
    _slow();
    return () => _unsubscribe();
  }, []);

  const { x, y, z } = data;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Accelerometer: (in Gs where 1 G = 9.81 m s^-2)
      </Text>
      <Text style={styles.text}>
        x: {round(x)} y: {round(y)} z: {round(z)}
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={subscription ? _unsubscribe : _subscribe}
          style={styles.button}
        >
          <Text>{subscription ? "On" : "Off"}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={_slow}
          style={[styles.button, styles.middleButton]}
        >
          <Text>Slow</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={_fast} style={styles.button}>
          <Text>Fast</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text>Linear Acceleration</Text>
        <LineChart
          data={{
            // labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: datasets.x,
                color: () => '#dc3545dd',
              },
              {
                data: datasets.y,
                color: () => '#28a745dd',
              },
              {
                data: datasets.z,
                color: () => '#007bffdd',
              },
              // minimum
              { data: [-10] },
              // maximum
              { data: [10] },
            ]
          }}
          width={Dimensions.get("window").width * 0.8} // from react-native
          height={220}
          yAxisSuffix="m/s"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundGradientFrom: "#111827",
            backgroundGradientTo: "#111827",
            fillShadowGradientFrom: 'transparent',
            fillShadowGradientTo: 'transparent',
            // useShadowColorFromDataset: true,
            decimalPlaces: 1, // defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            propsForDots: {
              r: "0",
              strokeWidth: "0",
            },
            propsForBackgroundLines: {
              // stroke: "#0001",
            },
          }}
          bezier
          style={{
            marginVertical: 16,
            borderRadius: 16,
          }}
        />
      </View>
      <Button
        title="Network"
        onPress={() => navigation.navigate('Network')}
      />
    </View>
  );
}
