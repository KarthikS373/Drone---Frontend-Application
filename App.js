import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import CheckScreen from "./screens/CheckScreen";
import HeaderTitle from "./component/HeaderTitle";
import { StatusBar } from "expo-status-bar";

const Stack = createNativeStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator initialRouteName="check">
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="check"
          component={CheckScreen}
          options={{
            headerTitle: (props) => <HeaderTitle {...props} />,
            headerStyle: {
              backgroundColor: "#181818",
            },
            headerTitleStyle: {
              color: "#B3B3B3",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
