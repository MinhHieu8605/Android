import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        
        <Text style={styles.title}>Explorer</Text>

        <View style={styles.searchBox}>
          <Ionicons name="location-sharp" size={20} color="#555" />
          <TextInput
            placeholder="Search for meals or area"
            style={styles.searchInput}
            placeholderTextColor="#999"
          />
          <Ionicons name="search" size={20} color="#000" />
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Top Categories</Text>
          <TouchableOpacity style={styles.filterContainer}>
            <MaterialCommunityIcons name="filter-variant" size={20} color="orange" />
            <Text style={styles.filterText}>Filter</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesList}>
          {['Pizza', 'Burgers', 'Steak', 'Pasta'].map((item, index) => (
            <View key={index} style={styles.categoryCard}>
              <Image
                source={require("../assets/pizza.jpg")}
                style={styles.categoryImage}
              />
              <Text style={styles.categoryName}>{item}</Text>
            </View>
          ))}
        </ScrollView>

        {/* Popular Items 1 */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular Items</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View all</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image
            source={{ uri: "https://picsum.photos/id/292/200/200" }}
            style={styles.foodImage}
          />
          <View style={styles.foodInfo}>
            <Text style={styles.foodName}>Food 1</Text>
            <Text style={styles.foodCountry}>By Viet Nam</Text>
            <Text style={styles.price}>1$</Text>
          </View>
        </View>

        {/* Popular Items 2 - Có Badge giảm giá */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular Items</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View all</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <View style={styles.imageWrapper}>
            <Image
              source={{ uri: "https://picsum.photos/id/102/300/200" }}
              style={styles.foodImageLarge}
            />
            {/* Red Badge */}
            <View style={styles.badge}>
              <Text style={styles.badgeText}>10% OFF</Text>
            </View>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
    color: "#333",
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 15,
    height: 55,
    marginBottom: 25,
    // Shadow cho iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    // Shadow cho Android
    elevation: 5,
  },
  searchInput: {
    flex: 1,
    marginHorizontal: 10,
    fontSize: 16,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  filterContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  filterText: {
    color: "orange",
    fontWeight: "600",
    marginLeft: 4,
  },
  viewAll: {
    color: "orange",
    fontWeight: "600",
  },
  categoriesList: {
    marginBottom: 25,
  },
  categoryCard: {
    marginRight: 15,
    alignItems: "center",
  },
  categoryImage: {
    width: 120,
    height: 80,
    borderRadius: 12,
    marginBottom: 8,
  },
  categoryName: {
    fontSize: 14,
    color: "#555",
    fontWeight: "500",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 15,
    marginBottom: 20,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  imageWrapper: {
    flex: 1,
    position: 'relative',
  },
  foodImage: {
    width: 90,
    height: 90,
    borderRadius: 12,
  },
  foodImageLarge: {
    width: '100%',
    height: 150,
    borderRadius: 12,
  },
  foodInfo: {
    flex: 1,
    marginLeft: 15,
    justifyContent: "center",
  },
  foodName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  foodCountry: {
    color: "#999",
    marginVertical: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  badge: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'red',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  bottomTab: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#eee",
    backgroundColor: "#fff",
  },
  tabItem: {
    alignItems: "center",
  },
  tabText: {
    fontSize: 12,
    marginTop: 4,
    color: "#888",
  },
});