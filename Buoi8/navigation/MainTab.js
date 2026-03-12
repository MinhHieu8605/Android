import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function MainTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,     
        tabBarActiveTintColor: "#e74c3c", 
        tabBarInactiveTintColor: "#888",  
        tabBarStyle: { 
          height: 80,           
          paddingBottom: 10, 
          paddingTop: 10,
        },
        tabBarLabelStyle: {
          fontSize: 12,            
          fontWeight: "500",
        },
      }}
    >
      <Tab.Screen
        name="Explorer"
        component={HomeScreen}
        options={{
          tabBarLabel: "Explorer",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="restaurant" size={24} color={color} /> 
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}