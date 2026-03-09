import { TouchableOpacity, View, Text, StyleSheet, Image } from "react-native";

export default function InsightCard({ title, subtitle, onPress, imageSource }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      
      {/* Icon */}
      <View style={styles.iconContainer}>
        <Image source={imageSource} style={styles.icon} />
      </View>

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.sub}>{subtitle}</Text>

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "45%",
    backgroundColor: "#f3f3f3",
    padding: 20,
    borderRadius: 20,
    marginBottom: 20
  },

  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#e7e7ff",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10
  },

  icon: {
    width: 22,
    height: 22,
    resizeMode: "contain"
  },

  title: {
    fontSize: 16,
    fontWeight: "600"
  },

  sub: {
    color: "gray",
    marginTop: 4
  }
});