import React, { useContext, useState } from "react";
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";

import { AppContext } from "../context/AppContext";

export default function SignInScreen() {

  const { setIsLoggedIn } = useContext(AppContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Sign In</Text>

      <Text style={styles.label}>Email ID</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email here!"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password here!"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginText}>Sign In</Text>
      </TouchableOpacity>

      <Text style={styles.or}>Or sign in with</Text>

      <View style={styles.socialContainer}>

        <TouchableOpacity style={styles.googleBtn}>
          <FontAwesome
            name="google"
            size={20}
            color = "#DB4437"
            style={{ marginRight: 8 }}
          />
          <Text style={styles.googleText}>Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.facebookBtn}>
          <FontAwesome
            name="facebook"
            size={20}
            color="#fff"
            style={{ marginRight: 8 }}
          />
          <Text style={styles.facebookText}>Facebook</Text>
        </TouchableOpacity>

      </View>

      <Text style={styles.signup}>
        Not yet a member? <Text style={styles.signupLink}>Sign Up</Text>
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    padding: 25,
    justifyContent: "center"
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30
  },

  label: {
    fontSize: 14,
    marginBottom: 5
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    padding: 12,
    marginBottom: 15,
    backgroundColor: "#fff"
  },

  forgot: {
    color: "orange",
    textAlign: "right",
    marginBottom: 20
  },

  loginButton: {
    backgroundColor: "orange",
    padding: 15,
    borderRadius: 6,
    marginBottom: 20
  },

  loginText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16
  },

  or: {
    textAlign: "center",
    marginBottom: 15
  },

  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20
  },

  googleBtn: {
    borderWidth: 1,
    borderColor: "#ccc",
    flex: 1,
    padding: 12,
    borderRadius: 6,
    marginRight: 10,
    alignItems: "center",
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "center",
    flexDirection: "row"
  },

  facebookBtn: {
    flex: 1,
    padding: 12,
    borderRadius: 6,
    alignItems: "center",
    backgroundColor: "#3b5998",
    display: "flex",
    justifyContent: "center",
    flexDirection: "row"
  },

  googleText: {
    fontWeight: "bold"
  },

  facebookText: {
    color: "#fff",
    fontWeight: "bold"
  },

  signup: {
    textAlign: "center"
  },

  signupLink: {
    color: "orange",
    fontWeight: "bold"
  }

});