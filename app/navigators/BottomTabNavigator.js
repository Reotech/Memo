import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import HomeScreen from "../screens/HomeScreen";
import AccountScreen from "../screens/AccountScreen";
import SettingsScreen from "../screens/SettingsScreen";

const Tab = createBottomTabNavigator();

function BottomTabNavigator(props) {
  return (    

      <Tab.Navigator>
        <Tab.Screen options={{ 
          tabBarLabel:() => {return null},
          headerShown: false,
          tabBarIcon: ({size,color}) => <MaterialCommunityIcons color={color} size={size} name='home' /> }} name="Home" component={HomeScreen} />

        <Tab.Screen name="Account" options={{
          headerShown: false,
          tabBarLabel:() => {return null},
          tabBarIcon: ({size,color}) => <MaterialCommunityIcons color={color} size={size} name='account' />
        }} component={AccountScreen} />

        <Tab.Screen name="Settings" options={{
          headerShown: false, 
          tabBarLabel:() => {return null},
          tabBarIcon: ({size,color}) => <MaterialCommunityIcons color={color} size={size} name='cog' />
        }} component={SettingsScreen} />
      </Tab.Navigator>
  );
}

export default BottomTabNavigator;
