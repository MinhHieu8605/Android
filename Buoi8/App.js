import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppProvider, AppContext } from "./context/AppContext";

import AuthStack from "./navigation/AuthStack";
import MainTab from "./navigation/MainTab";

function AppNavigation() {

  const { isLoggedIn } = useContext(AppContext);

  return (
    <NavigationContainer>
      {isLoggedIn ? <MainTab /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppNavigation />
    </AppProvider>
  );
}