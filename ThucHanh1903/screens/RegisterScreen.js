import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { AuthContext } from "../context/AuthContext";

export default function RegisterScreen({ navigation }) {
  const { register } = useContext(AuthContext);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const isFormValid = fullName && email && password && confirmPassword;

  return (
    <ScrollView style={styles.container} bounces={false}>
      {/* HEADER */}
      <LinearGradient colors={["#FFFFF0", "#FFF9C4"]} style={styles.header}>
        <Text style={styles.subHeader}>Tạo tài khoản mới để bắt đầu!</Text>
      </LinearGradient>

      {/* FORM */}
      <View style={styles.form}>
        
        {/* FULL NAME */}
        <Text style={styles.firstLabel}>Họ và tên</Text>
        <View style={styles.inputBox}>
          <TextInput
            placeholder="Nhập họ và tên của bạn"
            placeholderTextColor="#999"
            style={styles.input}
            value={fullName}
            onChangeText={setFullName}
          />
        </View>

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

        {/* CONFIRM PASSWORD */}
        <Text style={styles.label}>Xác nhận mật khẩu</Text>
        <View style={styles.inputBox}>
          <TextInput
            placeholder="Nhập lại mật khẩu"
            placeholderTextColor="#999"
            secureTextEntry={!showPassword}
            style={styles.input}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </View>

        {/* ERROR */}
        {!isFormValid ? (
          <Text style={styles.error}>Vui lòng điền đầy đủ thông tin</Text>
        ) : (
          <View style={{ height: 20 }} />
        )}

        {/* BUTTON */}
        <TouchableOpacity
          style={[styles.registerBtn, !isFormValid && { opacity: 0.7 }]}
          onPress={() => {
            if (isFormValid) {
              register(email, password);
            }
          }}
        >
          <Text style={styles.registerBtnText}>Đăng Ký</Text>
        </TouchableOpacity>

        {/* LOGIN LINK */}
        <Text style={styles.loginText}>
          Đã có tài khoản?{" "}
          <Text style={styles.loginLink} onPress={() => navigation.goBack()}>
            Đăng nhập ngay
          </Text>
        </Text>

        {/* OR */}
        <View style={styles.orRow}>
          <View style={styles.line} />
          <Text style={{ marginHorizontal: 15, color: "#888", fontSize: 13 }}>
            hoặc đăng ký bằng
          </Text>
          <View style={styles.line} />
        </View>

        {/* SOCIAL */}
        <View style={styles.socialRow}>
          <TouchableOpacity style={styles.socialBtn}>
            <FontAwesome name="google" size={20} color="#DB4437" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialBtn}>
            <FontAwesome name="facebook" size={20} color="#1877F2" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#fff",
    marginTop: 50
  },
  header: { 
    height: 140, 
    borderBottomLeftRadius: 40, 
    borderBottomRightRadius: 40, 
    justifyContent: "center", 
    alignItems: "center" 
  },
  subHeader: { 
    fontSize: 18, 
    fontWeight: "600", 
    color: "#333", 
    textAlign: "center", 
    paddingHorizontal: 40 
  },
  form: { 
    paddingHorizontal: 30, 
    marginTop: 0 
  },
  firstLabel: { 
    marginTop: 15, 
    marginBottom: 8, 
    color: "#333", 
    fontWeight: "bold", 
    fontSize: 14 
  },
  label: { 
    marginTop: 15, 
    marginBottom: 8, 
    color: "#333", 
    fontWeight: "bold", 
    fontSize: 14 
  },
  inputBox: { 
    flexDirection: "row", 
    alignItems: "center", 
    backgroundColor: "#F5F5F5", 
    borderRadius: 15, 
    paddingHorizontal: 18, 
    height: 52 
  },
  input: { 
    flex: 1, 
    fontSize: 14, 
    color: "#333" 
  },
  error: { 
    color: "#FF4D4D", 
    marginTop: 8, 
    fontSize: 13 
  },
  registerBtn: { 
    backgroundColor: "#4A3AFF", 
    height: 55, 
    borderRadius: 30, 
    justifyContent: "center", 
    alignItems: "center", 
    marginTop: 20, 
    elevation: 3, 
    shadowColor: "#4A3AFF", 
    shadowOffset: { width: 0, height: 4 }, 
    shadowOpacity: 0.2, 
    shadowRadius: 5 
  },
  registerBtnText: { 
    color: "#fff", 
    fontSize: 17, 
    fontWeight: "bold" 
  },
  loginText: { 
    textAlign: "center", 
    marginTop: 20, 
    color: "#666", 
    fontSize: 14 
  },
  loginLink: { 
    color: "#4A3AFF", 
    fontWeight: "bold" 
  },
  orRow: { 
    flexDirection: "row", 
    alignItems: "center", 
    marginTop: 25 
  },
  line: { 
    flex: 1, 
    height: 1, 
    backgroundColor: "#EEEEEE" 
  },
  socialRow: { 
    flexDirection: "row", 
    justifyContent: "center", 
    marginTop: 20, 
    gap: 20 
  },
  socialBtn: { 
    backgroundColor: "#F8F8F8", 
    width: 60, 
    height: 60, 
    borderRadius: 15, 
    justifyContent: "center", 
    alignItems: "center", 
    borderWidth: 1, 
    borderColor: "#F0F0F0" 
  },
});