import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/splash';
import Drawernavigation from './drawernavigation';
const MainStack = () => {
    const Stack = createNativeStackNavigator();

    return (
            <NavigationContainer  independent={true}>
                <Stack.Navigator screenOptions={{headerShown:false}}>
                    <Stack.Screen name="Splash" component={Splash} />
                    <Stack.Screen name="Drawer" component={Drawernavigation} />
                </Stack.Navigator>
            </NavigationContainer>
    )
}
export default MainStack