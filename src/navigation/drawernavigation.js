import { StyleSheet } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Home from '../screens/home';
import CustomDrawer from '../customComponents/customDrawer/customDrawer';

const Drawernavigation = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: '#246F8D' },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontSize: 27,
          fontWeight: 'semi-bold',
          color: 'white',
        },
        drawerActiveBackgroundColor: '#246F8D',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: 'black',
        drawerLabelStyle: {
          marginLeft: -20,
          fontFamily: 'LibreBaskerville-Bold',
          fontSize: 18,
        }
      }}
      drawerContent={props => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: ({ focused, size }) => (
            <FontAwesome
              name="home"
              size={size}
              color={focused ? '#fff' : '#246F8D'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="FeedBack"
        component={Home}
        options={{
          drawerIcon: ({ focused, size }) => (
            <FontAwesome
              name="edit"
              size={size}
              color={focused ? '#fff' : '#246F8D'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Share Us"
        component={Home}
        options={{
          drawerIcon: ({ focused, size }) => (
            <FontAwesome
              name="share-alt"
              size={size}
              color={focused ? '#fff' : '#246F8D'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Rate Us"
        component={Home}
        options={{
          drawerIcon: ({ focused, size }) => (
            <FontAwesome
              name="star"
              size={size}
              color={focused ? '#fff' : '#246F8D'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Privacy Policy"
        component={Home}
        options={{
          drawerIcon: ({ focused, size }) => (
            <FontAwesome
              name="shield"
              size={size}
              color={focused ? '#fff' : '#246F8D'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Terms & Conditions"
        component={Home}
        options={{
          drawerIcon: ({ focused, size }) => (
            <FontAwesome
              name="info-circle"
              size={size}
              color={focused ? '#fff' : '#246F8D'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="More Apps"
        component={Home}
        options={{
          drawerIcon: ({ focused, size }) => (
            <FontAwesome
              name="list"
              size={size}
              color={focused ? '#fff' : '#246F8D'}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default Drawernavigation;
