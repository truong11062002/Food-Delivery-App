import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CUSTOM_COLOR from '../constants/colors';
import HomeScreen from '../screens/home/HomeScreen';
import CustomDrawerNavigator from '../components/CustomDrawerNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = props => {
  return (
    <Drawer.Navigator
      initialRouteName="HomeScreen"
      drawerContent={props => <CustomDrawerNavigator {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#fff',
      }}>
      <Drawer.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{drawerItemStyle: {height: 0}}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({});
