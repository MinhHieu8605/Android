import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ScanScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <Image
        source={require("../assets/z7601700279380_a7f0e28fce37597bd98f1a73208f5a93.jpg")}
        style={styles.background}
      />

      <View style={styles.overlayBlur} />

      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="chevron-back" size={24} color="#5b6cff" />
      </TouchableOpacity>

      {/* Scan Frame */}
      <View style={styles.scanFrame}>

        {/* vệt quét mờ */}
        <View style={styles.scanLine} />

        <View style={styles.cornerTopLeft} />
        <View style={styles.cornerTopRight} />
        <View style={styles.cornerBottomLeft} />
        <View style={styles.cornerBottomRight} />
      </View>

      {/* Bottom Card */}
      <View style={styles.bottomCard}>
        <Image
          source={require("../assets/z7601700279380_a7f0e28fce37597bd98f1a73208f5a93.jpg")}
          style={styles.productImg}
        />

        <View style={{ flex: 1 }}>
          <Text style={styles.brand}>Lauren's</Text>
          <Text style={styles.product}>Orange Juice</Text>
        </View>

        <TouchableOpacity style={styles.plusBtn}>
          <Text style={{color:"#fff", fontSize:18}}>+</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d7c7b5",
    alignItems: "center",
    justifyContent: "center"
  },

  background: {
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "cover"
  },

  overlayBlur: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "45%",
    backgroundColor: "rgba(255,255,255,0.6)"
  },

  backBtn: {
    position: "absolute",
    top: 60,
    left: 20,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 12
  },

  scanFrame: {
    width: 260,
    height: 380,
    position: "relative",
    justifyContent: "center",
    alignItems: "center"
  },

  scanLine: {
    position: "absolute",
    width: "85%",
    height: 10,
    backgroundColor: "rgba(255,255,255,0.4)",
    borderRadius: 10
  },

  cornerTopLeft: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    borderLeftWidth: 4,
    borderTopWidth: 4,
    borderColor: "#fff",
    borderTopLeftRadius: 10
  },

  cornerTopRight: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 40,
    height: 40,
    borderRightWidth: 4,
    borderTopWidth: 4,
    borderColor: "#fff",
    borderTopRightRadius: 10
  },

  cornerBottomLeft: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: 40,
    height: 40,
    borderLeftWidth: 4,
    borderBottomWidth: 4,
    borderColor: "#fff",
    borderBottomLeftRadius: 10
  },

  cornerBottomRight: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 40,
    height: 40,
    borderRightWidth: 4,
    borderBottomWidth: 4,
    borderColor: "#fff",
    borderBottomRightRadius: 10
  },

  bottomCard: {
    position: "absolute",
    bottom: 40,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    width: "85%",
    padding: 15,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5
  },

  productImg: {
    width: 45,
    height: 60,
    marginRight: 12,
    borderRadius: 6
  },

  brand: {
    color: "#aaa",
    fontSize: 12
  },

  product: {
    fontSize: 16,
    fontWeight: "600"
  },

  plusBtn: {
    backgroundColor: "#5b6cff",
    padding: 12,
    borderRadius: 12,
    alignItems:"center",
    justifyContent:"center"
  }
});