import React from "react";
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

const { width } = Dimensions.get("window");

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        
        {/* HEADER */}
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <Image
              source = {
                require("../assets/z7409500485558_9c4e0669b2733e625da402ddbdfe93e3.jpg")
              }
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
            <Ionicons name="search-outline" size={20} color="#fff" style={{ opacity: 0.8 }} />
            <TextInput
              placeholder="Search your food"
              placeholderTextColor="rgba(255,255,255,0.7)"
              style={styles.input}
            />
            <Ionicons name="options-outline" size={20} color="#fff" />
          </View>
        </View>

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

            <View style={styles.ratingRow}>
               <View style={styles.avatarGroup}>
                  <View style={[styles.smallAvatar, {backgroundColor: '#ccc'}]} />
                  <View style={[styles.smallAvatar, {backgroundColor: '#ddd', marginLeft: -8}]} />
                  <View style={[styles.smallAvatar, {backgroundColor: '#eee', marginLeft: -8}]} />
               </View>
               <Ionicons name="star" size={14} color="#FFD700" style={{marginLeft: 5}} />
               <Text style={styles.ratingText}>4.9 (3k+ Rating)</Text>
            </View>
          </View>

          <View style={styles.discountBadge}>
            <Text style={styles.discountText}>10%{"\n"}OFF</Text>
          </View>

          <Image
            source = {
              {
                uri: 'https://pngimg.com/uploads/burger_sandwich/burger_sandwich_PNG4135.png'
              }
            }
            style = {
              styles.bannerImg
            }
          />
        </View>

        {/* DOTS */}
        <View style={styles.dots}>
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={[styles.dot, { backgroundColor: "#333", width: 10 }]} />
        </View>

        {/* POPULAR */}
        <View style={styles.popularHeader}>
          <Text style={styles.popularTitle}>Popular Items</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>

        {/* FOOD ITEMS */}
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
              source = {
                require("../assets/c0fd0ddb29108ea59ae90b2ab0f1aad0b4d2281e.png")
              }
              style={styles.foodImg}
            />
            <Text style={styles.foodLabel}>PIZZA</Text>
          </View>
        </View>
        
        {/* Padding bottom để không bị che bởi Bottom Tab */}
        <View style={{height: 80}} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#FEFDE1", // Màu vàng nhạt giống ảnh
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
    borderWidth: 1,
    borderColor: '#ddd'
  },
  locationTitle: {
    color: "#999",
    fontSize: 12,
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
  },
  location: {
    fontWeight: "700",
    fontSize: 16,
    color: "#333"
  },
  bellContainer: {
    padding: 5,
  },
  bell: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
  },
  notificationDot: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#5B4BFF',
    borderWidth: 1.5,
    borderColor: '#fff'
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
    fontSize: 15,
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
    color: "#333"
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
    flexDirection: 'row',
    height: 160,
    overflow: "visible", // Cho phép ảnh burger trồi ra ngoài
  },
  bannerContent: {
    flex: 1,
    justifyContent: 'center'
  },
  bannerTitle: {
    color: "#FFD700",
    fontSize: 26,
    fontWeight: "900",
  },
  bannerSub: {
    color: "#fff",
    fontSize: 14,
    marginTop: 2
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: 'center',
    marginTop: 15,
  },
  avatarGroup: {
      flexDirection: 'row',
  },
  smallAvatar: {
      width: 20,
      height: 20,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#fff'
  },
  ratingText: {
    marginLeft: 5,
    color: "#fff",
    fontSize: 11,
    opacity: 0.8
  },
  bannerImg: {
    width: 170,
    height: 170,
    position: "absolute",
    right: -10,
    bottom: -10,
    resizeMode: 'contain'
  },
  discountBadge: {
    position: "absolute",
    right: 110,
    top: 15,
    backgroundColor: "#5B4BFF",
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.2)'
  },
  discountText: {
    color: "#fff",
    fontSize: 11,
    fontWeight: "bold",
    textAlign: "center",
  },
  dots: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#DDD",
    marginHorizontal: 4,
  },
  popularHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 25,
  },
  popularTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333"
  },
  viewAll: {
    color: "#999",
    fontSize: 14
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
    backgroundColor: '#f9f9f9'
  },
  foodLabel: {
    marginTop: 10,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 14,
    color: "#333"
  },
  bottomTab: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    paddingBottom: 10
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  tabText: {
    fontSize: 10,
    fontWeight: 'bold',
    marginTop: 4,
    color: '#888'
  }
});