import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function App() {
  const [bgColor, setBgColor] = useState("green");

  const renderButton = (label, color, textColor = "#fff") => (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }]}
      onPress={() => setBgColor(color)}
    >
      <Text style={[styles.text, { color: textColor }]}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      {renderButton("GREEN", "green")}
      {renderButton("BLUE", "blue")}
      {renderButton("BROWN", "brown")}
      {renderButton("YELLOW", "yellow", "#000")}
      {renderButton("RED", "red")}
      {renderButton("BLACK", "black")}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  button: {
    padding: 15,
    borderRadius: 8,
    marginVertical: 8,
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
