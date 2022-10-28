import React from "react";
import { Text, TouchableOpacity, View, Button,StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Drone!</Text>
      <Text style={styles.text}>Let's Start the Tests one by one!</Text>
      <Button title="Gyroscope" onPress={() => navigation.navigate("Gyroscope")} />
    </View>
  );
};

const styles=StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding:30,
        backgroundColor:"black",
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
    },


})

export default HomeScreen;