import React from "react";
import { Text, TouchableOpacity, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Welcome to Drone!</Text>
      <Text>Let's Start the Tests one by one!</Text>
      <Button title="Gyroscope" onPress={() => navigation.navigate("Gyroscope")} />
    </View>
  );
};

export default HomeScreen;
