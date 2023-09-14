import {
    NavigationContainer,
    getFocusedRouteNameFromRoute,
  } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

import ScreenHome from '../screens/Home/index';

export function Router(){
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                name="Home"
                component={ScreenHome}
                options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>)

}