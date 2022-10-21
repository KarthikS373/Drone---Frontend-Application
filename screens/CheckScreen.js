import { Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import React from "react";

import Check from "../component/Check";
import { Checks } from "../utils/constants";

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
            result={item.id % 2 == 0 ? true : false}
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
