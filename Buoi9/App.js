import React, { useState } from "react";
import { AppContext as AuthContext } from "./context/AppContext";
import RootRouter from "./router";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);
  const [currentUserEmail, setCurrentUserEmail] = useState("");

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