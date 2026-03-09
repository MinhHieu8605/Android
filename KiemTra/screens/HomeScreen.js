import { View, Text, StyleSheet, Image } from "react-native";
import InsightCard from "../components/InsightCard";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <View>
          <Text style={styles.hello}>Hello 👋</Text>
          <Text style={styles.name}>Christie Doe</Text>
        </View>

        <Image
          source={require("../assets/24251bda8af0c9001ab883dd52875da9a3f6f754.jpg")}
          style={styles.avatar}
        />
      </View>

      <Text style={styles.section}>Your Insights</Text>

      <View style={styles.grid}>

        <InsightCard
          imageSource = {
            require("../assets/icons/scan.png")
          }
          title="Scan New"
          subtitle="Scanned 483"
          onPress={() => navigation.navigate("Scan")}
        />

        <InsightCard
          imageSource = {
            require("../assets/icons/warn.png")
          }
          title="Counterfeits"
          subtitle="Counterfeited 32"
        />

        <InsightCard
          imageSource = {
            require("../assets/icons/tick.png")
          }
          title="Success"
          subtitle="Checkouts 8"
        />

        <InsightCard
          imageSource = {
            require("../assets/icons/cal.png")
          }
          title="Directory"
          subtitle="History 26"
        />

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  hello: {
    fontSize: 24,
    fontWeight: "600"
  },

  name: {
    color: "gray"
  },

  avatar: {
    width: 45,
    height: 45,
    borderRadius: 22
  },

  section: {
    marginTop: 30,
    marginBottom: 20,
    fontSize: 18,
    fontWeight: "600"
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  }
});