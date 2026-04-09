import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppContext as AuthContext } from "./context/AppContext";
import RootRouter from "./router";

const IS_LOGGED_IN_STORAGE_KEY = "@buoi9c2_is_logged_in";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);
  const [currentUserEmail, setCurrentUserEmail] = useState("");
  const [isAuthHydrated, setIsAuthHydrated] = useState(false);

  useEffect(() => {
    const loadLoginState = async () => {
      try {
        const savedLoginState = await AsyncStorage.getItem(
          IS_LOGGED_IN_STORAGE_KEY
        );

        if (savedLoginState !== null) {
          setIsLoggedIn(savedLoginState === "true");
        }
      } catch (error) {
        console.log("Failed to restore login state:", error);
      } finally {
        setIsAuthHydrated(true);
      }
    };

    loadLoginState();
  }, []);

  useEffect(() => {
    if (!isAuthHydrated) {
      return;
    }

    AsyncStorage.setItem(IS_LOGGED_IN_STORAGE_KEY, String(isLoggedIn)).catch(
      (error) => {
        console.log("Failed to persist login state:", error);
      }
    );
  }, [isLoggedIn, isAuthHydrated]);

  const registerUser = (email, password) => {
    const normalizedEmail = email.trim().toLowerCase();
    const normalizedPassword = password.trim();

    if (!normalizedEmail || !normalizedPassword) {
      return { ok: false, message: "Please enter both email and password." };
    }

    const existedUser = users.find((user) => user.email === normalizedEmail);
    if (existedUser) {
      return { ok: false, message: "Email already exists." };
    }

    setUsers((prevUsers) => [
      ...prevUsers,
      { email: normalizedEmail, password: normalizedPassword },
    ]);

    return { ok: true, message: "Sign up successful. Please sign in." };
  };

  const loginUser = (email, password) => {
    const normalizedEmail = email.trim().toLowerCase();
    const normalizedPassword = password.trim();

    const matchedUser = users.find(
      (user) =>
        user.email === normalizedEmail && user.password === normalizedPassword
    );

    if (!matchedUser) {
      return {
        ok: false,
        message: "Account does not exist or password is incorrect.",
      };
    }

    setCurrentUserEmail(matchedUser.email);
    setIsLoggedIn(true);
    return { ok: true };
  };

  const logoutUser = () => {
    setCurrentUserEmail("");
    setIsLoggedIn(false);
  };

  if (!isAuthHydrated) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" color="orange" />
      </View>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        registerUser,
        loginUser,
        logoutUser,
        currentUserEmail,
      }}
    >
      <RootRouter />
    </AuthContext.Provider>
  );
};

export default App;
