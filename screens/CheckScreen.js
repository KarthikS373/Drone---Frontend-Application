import { Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Check from "../component/Check";

const Checks = [
  {
    id: 1,
    name: "Camera",
    desc: "Checking if Camera of the Phone working properly...",
  },
  {
    id: 2,
    name: "Network",
    desc: "Checking if Network is established...",
  },
  {
    id: 3,
    name: "Accelerometer",
    desc: "Checking if we have access to Accelerometer of the device...",
  },
  {
    id: 4,
    name: "Storage",
    desc: "Checking if we can use the storage of phone...",
  },
  {
    id: 5,
    name: "Gyroscope",
    desc: "Checking the Gyroscope...",
  },
];

export default (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollview}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <Text>CheckScreen</Text>
        {Checks.map((item) => (
          <Check
            key={item.id}
            result={true}
            title={item.name}
            desc={item.desc}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#181818",
    paddingTop: 20,
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
