import React from "react";
import {
  Dimensions,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useDispatch } from "react-redux";

import checkPermissions, { askPermissions } from "../utils/checkPermissions";
import { camera_granted } from "../redux/actions/permissions";

export default (props) => {
  const dispatch = useDispatch();

  askPermissions("CAMERA").then((camera) => console.log(camera));

  // To check if dispatching action is working
  // setTimeout(() => dispatch(camera_granted(true)), 10000);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollview}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <View>
          <Image style={styles.image} source={require("../assets/drone.png")} />
          <Text style={styles.title}>
            Wirelessly control your drone with a phone
          </Text>
          <Text style={styles.text}>
            This is a drone project developed and maintained under Wireless
            Communications and Analytics Research Lab (WCARL) envisioned and led
            by Dr. Vishal Krishna Singh. Quickly check your device to see that
            if you are all ready for controlling your drone.
          </Text>
          <View style={styles.buttonContainer}>
            <Pressable
              android_ripple={{
                color: "#313335",
                foreground: "#86888a",
              }}
              style={styles.button}
              onPress={() => props.navigation.navigate("check")}
            >
              <Text style={styles.buttonText}> Check my device </Text>
            </Pressable>
          </View>
        </View>
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
  },
  scrollview: {
    paddingTop: 35,
    paddingBottom: 35,
  },
  image: {
    alignSelf: "center",
    borderTopRightRadius: 80,
    borderBottomLeftRadius: 80,
    height: Dimensions.get("window").height * 0.5,
    width: Dimensions.get("window").width * 0.9,
  },
  title: {
    color: "white",
    marginTop: 25,
    marginHorizontal: 10,
    fontSize: 32,
  },
  text: {
    color: "#767676",
    color: "#B3B3B3",
    marginTop: 10,
    fontSize: 16,
    lineHeight: 25,
    marginLeft: 10,
  },
  buttonContainer: {
    borderRadius: 8,
    overflow: "hidden",
    marginLeft: 5,
  },
  button: {
    backgroundColor: "#0077b5",
    marginTop: 16,
    borderRadius: 8,
    marginBottom: 58,
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: "50%",
  },
  buttonText: {
    color: "#caccce",
  },
});
