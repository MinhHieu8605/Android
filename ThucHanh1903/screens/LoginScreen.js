import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { AuthContext } from "../context/AuthContext";

export default function LoginScreen({ navigation }) {
  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#FFFFF0", "#FFF9C4"]} 
        style={styles.header}
      >
        <Text style={styles.title}>Đăng Nhập</Text>
        <Text style={styles.sub}>Chào mừng bạn quay trở lại!</Text>
      </LinearGradient>

      {/* FORM */}
      <View style={styles.form}>
        
        {/* EMAIL */}
        <Text style={styles.label}>Email</Text>
        <View style={styles.inputBox}>
          <TextInput
            placeholder="Nhập email của bạn"
            placeholderTextColor="#999"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        {/* PASSWORD */}
        <Text style={styles.label}>Mật khẩu</Text>
        <View style={styles.inputBox}>
          <TextInput
            placeholder="Nhập mật khẩu"
            placeholderTextColor="#999"
            secureTextEntry={!showPassword}
            style={styles.input}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons 
              name={showPassword ? "eye-off-outline" : "eye-outline"} 
              size={22} 
              color="#888" 
            />
          </TouchableOpacity>
        </View>

        {(!(email && password)) ? (
          <Text style={styles.error}>Vui lòng điền đầy đủ thông tin</Text>
        ) : (
          <View style={{ height: 20 }} /> 
        )}

        {/* FORGOT */}
        <TouchableOpacity style={{ alignSelf: "flex-end" }}>
          <Text style={styles.forgot}>Quên mật khẩu?</Text>
        </TouchableOpacity>

        {/* LOGIN BUTTON */}
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => {
            if (email && password) {
              login(email, password);
            }
          }}
        >
          <Text style={styles.loginText}>Đăng Nhập</Text>
        </TouchableOpacity>

        {/* REGISTER */}
        <Text style={styles.registerText}>
          Chưa có tài khoản?{" "}
          <Text
            style={styles.registerLink}
            onPress={() => navigation.navigate("Register")}
          >
            Đăng ký ngay
          </Text>
        </Text>

        {/* OR */}
        <View style={styles.orRow}>
          <View style={styles.line} />
          <Text style={{ marginHorizontal: 15, color: "#888", fontSize: 13 }}>hoặc</Text>
          <View style={styles.line} />
        </View>

        {/* SOCIAL */}
        <View style={styles.socialRow}>
          <TouchableOpacity style={styles.socialBtn}>
            <FontAwesome name="google" size={20} color="#DB4437" />
            <Text style={styles.socialText}>Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialBtn}>
            <FontAwesome name="facebook" size={20} color="#1877F2" />
            <Text style={styles.socialText}>Facebook</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    height: 250,
    borderBottomLeftRadius: 60, // Tăng độ cong
    borderBottomRightRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: "600",
    color: "#333",
  },
  sub: {
    marginTop: 8,
    fontSize: 15,
    color: "#777",
  },
  form: {
    paddingHorizontal: 30,
    marginTop: 10,
  },
  label: {
    marginTop: 15,
    marginBottom: 8,
    color: "#333",
    fontWeight: "bold",
    fontSize: 14,
  },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 15,
    paddingHorizontal: 18,
    height: 55,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: "#333",
  },
  error: {
    color: "#FF4D4D",
    marginTop: 8,
    fontSize: 13,
  },
  forgot: {
    color: "#4A3AFF",
    fontWeight: "500",
    marginTop: 10,
  },
  loginBtn: {
    backgroundColor: "#4A3AFF", 
    height: 55,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
    elevation: 3,
    shadowColor: "#4A3AFF",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  loginText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
  },
  registerText: {
    textAlign: "center",
    marginTop: 20,
    color: "#666",
    fontSize: 14,
  },
  registerLink: {
    color: "#4A3AFF",
    fontWeight: "bold",
  },
  orRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#EEEEEE",
  },
  socialRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
  },
  socialBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F8F8F8",
    paddingVertical: 14,
    borderRadius: 15,
    width: "47%",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#F0F0F0",
  },
  socialText: {
    marginLeft: 10,
    fontSize: 15,
    color: "#333",
    fontWeight: "500",
  },
});