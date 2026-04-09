import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator as createStackNavigator } from "@react-navigation/native-stack";

import { AppContext as AuthContext } from "../context/AppContext";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";

// Create AuthStack
const AuthStack = createStackNavigator();
const AuthStackNavigator = () => (
  <AuthStack.Navigator initialRouteName="SignIn">
    <AuthStack.Screen name="SignIn" component={SignInScreen} />
    <AuthStack.Screen name="SignUp" component={SignUpScreen} />
    <AuthStack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
  </AuthStack.Navigator>
);

// Create MainTab
const MainTab = createBottomTabNavigator();
const MainTabNavigator = () => (
  <MainTab.Navigator>
    <MainTab.Screen name="Home" component={HomeScreen} />
    <MainTab.Screen name="Profile" component={ProfileScreen} />
  </MainTab.Navigator>
);

// Create MainStack
const MainStack = createStackNavigator();
const MainStackNavigator = () => (
  <MainStack.Navigator initialRouteName="MainTab">
    <MainStack.Screen
      name="MainTab"
      component={MainTabNavigator}
      options={{ headerShown: false }}
    />
  </MainStack.Navigator>
);

export default function RootRouter() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {isLoggedIn ? <MainStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
}
