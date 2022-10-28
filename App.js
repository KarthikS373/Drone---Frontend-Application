import 'react-native-gesture-handler';
import Gryoscope from "./component/Gyroscope";
import Accelerometer from "./component/Accelerometer";
import Camera from "./component/Camera";
import Network from "./component/Network";
import HomeScreen from './component/HomeScreen';

import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import Proximity from "./component/Proximity";
import Storage from "./component/Storage";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App({navigation}) {
  const Stack = createNativeStackNavigator();
  return (
    // <SafeAreaView style={styles.container}>
    //   <ScrollView>
    //     <Gryoscope />
    //     <Accelerometer />
    //     <Network />
    //     <Camera />
    //     <Storage />
    //     {/* <Proximity /> */}
    //   </ScrollView>
    // </SafeAreaView>
    <>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='home'>
        <Stack.Screen name="home" component={HomeScreen}/>
        <Stack.Screen name="Gyroscope" component={Gryoscope}/>
        <Stack.Screen name="accelerometer" component={Accelerometer}/>
        <Stack.Screen name="Network" component={Network}/>
        <Stack.Screen name="Storage" component={Storage}/>
        <Stack.Screen name="Proximity" component={Proximity}/>
        <Stack.Screen name="Camera" component={Camera}/>
      </Stack.Navigator>
    </NavigationContainer> 
    </>   
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
    justifyContent: "center",
  },
});
