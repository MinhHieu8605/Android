import React, {
  createContext,
  useState
} from "react";

export const AuthScreen = createContext();

export const AuthProvider = ({
  children
}) => {
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    if (username === "admin" && password === "123") {
      setUser({
        username
      });
    } else {
      alert("Sai tài khoản hoặc mật khẩu");
    }
  };

  const register = (username, password) => {
    alert("Đăng ký thành công! Vui lòng đăng nhập");
  };

  const logout = () => {
    setUser(null);
  };

  return ( <
    AuthScreen.Provider value = {
      {
        user,
        login,
        register,
        logout
      }
    } > {
      children
    } <
    /AuthScreen.Provider>
  );
};