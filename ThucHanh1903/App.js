import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider, AuthContext } from "./context/AuthContext";

import AuthStack from "./navigation/AuthStack";
import MainTab from "./navigation/MainTab";

function AppNavigator() {
  const { user } = useContext(AuthContext);

  return (
    <NavigationContainer screenOptions={{ headerShown: false }}>
      {user ? <MainTab /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
}