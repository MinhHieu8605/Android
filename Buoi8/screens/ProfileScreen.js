import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AppContext } from "../context/AppContext";

export default function ProfileScreen() {

  const { setIsLoggedIn } = useContext(AppContext);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <View style={styles.container}>

      <Text style={styles.name}>Minh Hiếu</Text>
      <Text style={styles.job}>Mobile developer</Text>
      <Text Text style={styles.desc}> I have about 100 years of experience in native mobile apps development, now i 'm learning React Native</Text>

      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.text}>Sign Out</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  name:{
    fontSize:24,
    fontWeight:"bold"
  },
  job:{
    fontSize:16,
    marginBottom: 20,
    color: "blue"
  },
  desc: {
    fontSize: 14,
    textAlign: "center",
    padding: 15
  },
  button:{
    backgroundColor:"orange",
    padding:15,
    borderRadius: 5,
    marginTop: 20
  },
  text:{
    color:"#fff"
  }
});