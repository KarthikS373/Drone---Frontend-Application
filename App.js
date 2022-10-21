import Gryoscope from "./component/Gyroscope";
import Accelerometer from "./component/Accelerometer";
import Camera from "./component/Camera";
import Network from "./component/Network";

import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import Proximity from "./component/Proximity";
import Storage from "./component/Storage";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Gryoscope />
        <Accelerometer />
        <Network />
        <Camera />
        <Storage />
        {/* <Proximity /> */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: "center",
  },
});
