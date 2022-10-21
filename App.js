import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { StatusBar } from "expo-status-bar";

import HomeScreen from "./screens/HomeScreen";
import CheckScreen from "./screens/CheckScreen";
import HeaderTitle from "./component/HeaderTitle";
import { store } from "./redux/reducers";

const Stack = createNativeStackNavigator();

export default () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar style="light" />
        <Stack.Navigator initialRouteName="home">
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
              headerBackVisible: true,
              obscureBackground: true,
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
    </Provider>
  );
};
