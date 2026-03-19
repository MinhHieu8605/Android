import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { products } from "../data/products";

const { width } = Dimensions.get("window");

export default function HomeScreen() {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        
        {/* HEADER */}
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <Image
              source={require("../assets/z7409500485558_9c4e0669b2733e625da402ddbdfe93e3.jpg")}
              style={styles.avatar}
            />
            <View style={{ flex: 1 }}>
              <Text style={styles.locationTitle}>Your Location</Text>
              <View style={styles.locationRow}>
                <Ionicons name="location" size={18} color="#5B4BFF" />
                <Text style={styles.location}>Hanoi, Vietnam</Text>
              </View>
            </View>
            <View style={styles.bellContainer}>
              <View style={styles.bell}>
                <Ionicons name="notifications-outline" size={22} color="#333" />
                <View style={styles.notificationDot} />
              </View>
            </View>
          </View>

          {/* SEARCH */}
          <View style={styles.searchBar}>
            <Ionicons name="search-outline" size={20} color="#fff" />
            <TextInput
              placeholder="Search your food"
              placeholderTextColor="rgba(255,255,255,0.7)"
              style={styles.input}
              value={search}
              onChangeText={setSearch}
            />
            <Ionicons name="options-outline" size={20} color="#fff" />
          </View>
        </View>

        {/* SEARCH RESULT */}
        {search !== "" && (
          <View style={styles.searchResult}>
            <Text style={styles.searchTitle}>Kết quả tìm kiếm</Text>

            {filteredProducts.length === 0 ? (
              <Text>Không tìm thấy món</Text>
            ) : (
              filteredProducts.map((item) => (
                <View style={styles.searchItem} key={item.id}>
                  <Image source={{ uri: item.image }} style={styles.searchImg} />
                  <Text style={styles.searchText}>{item.name}</Text>
                </View>
              ))
            )}
          </View>
        )}

        {/* CATEGORY */}
        <View style={styles.categoryRow}>
          <View style={[styles.categoryCard, { backgroundColor: "#2AC17E" }]}>
            <Ionicons name="pizza-outline" size={30} color="#fff" />
            <Text style={styles.categoryTextWhite}>PIZZA</Text>
          </View>

          <View style={styles.categoryCard}>
            <Ionicons name="fast-food-outline" size={30} color="#333" />
            <Text style={styles.categoryText}>BURGER</Text>
          </View>

          <View style={styles.categoryCard}>
            <Ionicons name="wine-outline" size={30} color="#333" />
            <Text style={styles.categoryText}>DRINK</Text>
          </View>

          <View style={styles.categoryCard}>
            <Ionicons name="restaurant-outline" size={30} color="#333" />
            <Text style={styles.categoryText}>RICE</Text>
          </View>
        </View>

        {/* BANNER */}
        <View style={styles.banner}>
          <View style={styles.bannerContent}>
            <Text style={styles.bannerTitle}>BURGER</Text>
            <Text style={styles.bannerSub}>Today's Hot offer</Text>
          </View>

          <Image
            source={{
              uri: "https://pngimg.com/uploads/burger_sandwich/burger_sandwich_PNG4135.png",
            }}
            style={styles.bannerImg}
          />
        </View>

        {/* POPULAR */}
        <View style={styles.popularHeader}>
          <Text style={styles.popularTitle}>Popular Items</Text>
        </View>

        {/* FOOD ITEMS (GIỮ NGUYÊN) */}
        <View style={styles.foodRow}>
          <View style={styles.foodCard}>
            <Image
              source={require("../assets/0896cd319dba7b6c551de83c9f8fd689b415ce99.png")}
              style={styles.foodImg}
            />
            <Text style={styles.foodLabel}>BURGER</Text>
          </View>

          <View style={styles.foodCard}>
            <Image
              source={require("../assets/c0fd0ddb29108ea59ae90b2ab0f1aad0b4d2281e.png")}
              style={styles.foodImg}
            />
            <Text style={styles.foodLabel}>PIZZA</Text>
          </View>
        </View>

        <View style={{ height: 80 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },

  header: {
    backgroundColor: "#FEFDE1",
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 30,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },

  headerTop: {
    flexDirection: "row",
    alignItems: "center",
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },

  locationTitle: {
    color: "#999",
    fontSize: 12,
  },

  locationRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  location: {
    fontWeight: "700",
    fontSize: 16,
  },

  bellContainer: { padding: 5 },

  bell: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  notificationDot: {
    position: "absolute",
    top: 10,
    right: 10,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#5B4BFF",
  },

  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#5B4BFF",
    marginTop: 25,
    paddingHorizontal: 20,
    borderRadius: 25,
    height: 55,
  },

  input: {
    flex: 1,
    marginLeft: 10,
    color: "#fff",
  },

  searchResult: {
    paddingHorizontal: 20,
    marginTop: 15,
  },

  searchTitle: {
    fontWeight: "bold",
    marginBottom: 10,
  },

  searchItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "#f9f9f9",
    padding: 10,
    borderRadius: 10,
  },

  searchImg: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },

  searchText: {
    marginLeft: 10,
  },

  categoryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 25,
  },

  categoryCard: {
    width: (width - 70) / 4,
    height: 85,
    borderRadius: 15,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
  },

  categoryText: {
    fontSize: 10,
    marginTop: 8,
    fontWeight: "bold",
  },

  categoryTextWhite: {
    fontSize: 10,
    marginTop: 8,
    fontWeight: "bold",
    color: "#fff",
  },

  banner: {
    marginHorizontal: 20,
    marginTop: 25,
    backgroundColor: "#1A1A1A",
    borderRadius: 25,
    padding: 25,
    height: 140,
  },

  bannerContent: { flex: 1 },

  bannerTitle: {
    color: "#FFD700",
    fontSize: 26,
    fontWeight: "900",
  },

  bannerSub: {
    color: "#fff",
  },

  bannerImg: {
    width: 150,
    height: 150,
    position: "absolute",
    right: -10,
    bottom: -10,
  },

  popularHeader: {
    paddingHorizontal: 20,
    marginTop: 25,
  },

  popularTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },

  foodRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 15,
  },

  foodCard: {
    width: "48%",
  },

  foodImg: {
    width: "100%",
    height: 130,
    borderRadius: 20,
  },

  foodLabel: {
    marginTop: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
});