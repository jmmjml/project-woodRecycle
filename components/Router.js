import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ScreenTest from "./Test";
import ScreenHome from "../screens/Home/index"
import ScreenAbout from "../screens/About/index"
import ScreenScroll from "../screens/Scroll/index"

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ScreenHome}></Stack.Screen>
        <Stack.Screen name="Scroll" component={ScreenScroll}></Stack.Screen>
        <Stack.Screen name="About" component={ScreenAbout}></Stack.Screen>
        <Stack.Screen name="Test" component={ScreenTest}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
