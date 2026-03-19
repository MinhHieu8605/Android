import React from "react";
import { 
  View, 
  Text, 
  Image, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView 
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function CartScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation?.goBack()}>
            <Ionicons name="arrow-back" size={24} color="#333" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Shopping Cart</Text>
          <TouchableOpacity>
            <Ionicons name="trash-outline" size={24} color="#333" />
          </TouchableOpacity>
        </View>

        {/* FOOD IMAGE SECTION */}
        <View style={styles.heroSection}>
          <Image
            source={require("../assets/0896cd319dba7b6c551de83c9f8fd689b415ce99.png")} 
            style={styles.mainFoodImage}
          />

          {/* Discount Badge */}
          <View style={styles.discountCircle}>
            <Text style={styles.discountCircleText}>10%{"\n"}OFF</Text>
          </View>

          {/* Overlapping Thumbnails */}
          <View style={styles.thumbnailContainer}>
            <View style={styles.thumbnailWrapper}>
              <Image source={require("../assets/0896cd319dba7b6c551de83c9f8fd689b415ce99.png")} style={styles.smallImg} />
            </View>
            <View style={styles.thumbnailWrapper}>
              <Image source={require("../assets/0896cd319dba7b6c551de83c9f8fd689b415ce99.png")} style={styles.smallImg} />
            </View>
            <View style={styles.thumbnailWrapper}>
              <Image source={require("../assets/0896cd319dba7b6c551de83c9f8fd689b415ce99.png")} style={styles.smallImg} />
            </View>
          </View>
        </View>

        {/* INFO SECTION */}
        <View style={styles.infoContent}>
          <View style={styles.titlePriceRow}>
            <View>
              <Text style={styles.foodName}>BURGER</Text>
              <View style={styles.ratingRow}>
                <Ionicons name="star" size={16} color="#FFD700" />
                <Text style={styles.ratingText}> 4.9 (3k+ Rating)</Text>
              </View>
            </View>
            <Text style={styles.mainPrice}>$28</Text>
          </View>

          {/* QUANTITY SELECTOR */}
          <View style={styles.quantityRow}>
            <TouchableOpacity style={styles.qtyBtn}>
              <Ionicons name="add" size={20} color="#333" />
            </TouchableOpacity>
            <Text style={styles.qtyValue}>02</Text>
            <TouchableOpacity style={styles.qtyBtn}>
              <Ionicons name="remove" size={20} color="#333" />
            </TouchableOpacity>
          </View>

          {/* ADDRESS SECTION */}
          <View style={styles.addressRow}>
            <View style={styles.addressBox}>
              <Ionicons name="location-outline" size={24} color="#666" style={{marginRight: 10}} />
              <View>
                <Text style={styles.addressLabel}>Delivery Address</Text>
                <Text style={styles.addressDetail}>Dhaka, Bangladesh</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.editBtn}>
              <Ionicons name="pencil" size={20} color="#fff" />
            </TouchableOpacity>
          </View>

          {/* PAYMENT SECTION */}
          <View style={styles.paymentSection}>
             <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <MaterialCommunityIcons name="credit-card-outline" size={30} color="#1E90FF" />
                <Text style={styles.paymentLabel}>Payment Method</Text>
             </View>
             <TouchableOpacity style={styles.changeBtn}>
                <Text style={styles.changeBtnText}>Change</Text>
             </TouchableOpacity>
          </View>

          {/* CHECKOUT SUMMARY */}
          <View style={styles.summaryContainer}>
            <Text style={styles.summaryTitle}>Checkout Summary</Text>
            
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Subtotal (2)</Text>
              <Text style={styles.summaryValue}>$56</Text>
            </View>

            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Delivery Fee</Text>
              <Text style={styles.summaryValue}>$6.20</Text>
            </View>

            <View style={[styles.summaryRow, {marginTop: 10}]}>
              <Text style={styles.totalLabel}>Payable Total</Text>
              <Text style={styles.totalValue}>$62.2</Text>
            </View>
          </View>

          {/* CONFIRM BUTTON */}
          <TouchableOpacity style={styles.confirmButton}>
            <Text style={styles.confirmButtonText}>Confirm Order</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 15,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  heroSection: {
    height: 280,
    position: "relative",
    marginHorizontal: 15,
  },
  mainFoodImage: {
    width: "100%",
    height: 250,
    borderRadius: 25,
    backgroundColor: '#5D4037', // Giả lập màu nền gỗ trong ảnh
  },
  discountCircle: {
    position: "absolute",
    top: 25,
    left: 25,
    backgroundColor: "#5B4BFF",
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
  discountCircleText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  thumbnailContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    width: '100%',
    justifyContent: 'center',
  },
  thumbnailWrapper: {
    backgroundColor: '#fff',
    padding: 3,
    borderRadius: 15,
    marginHorizontal: 8,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  smallImg: {
    width: 70,
    height: 70,
    borderRadius: 12,
  },
  infoContent: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  titlePriceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  foodName: {
    fontSize: 32,
    fontWeight: "900",
    color: "#333",
  },
  mainPrice: {
    fontSize: 26,
    color: "#5B4BFF",
    fontWeight: "bold",
    marginTop: 5,
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  ratingText: {
    color: "#888",
    fontSize: 14,
  },
  quantityRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'flex-end',
    marginTop: -20, // Đẩy lên ngang hàng với Price
    marginBottom: 20,
  },
  qtyBtn: {
    width: 35,
    height: 35,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  qtyValue: {
    marginHorizontal: 12,
    fontSize: 18,
    fontWeight: "bold",
  },
  addressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  addressBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "#CDE7DF",
    padding: 15,
    borderRadius: 15,
    marginRight: 10,
  },
  addressLabel: {
    color: '#666',
    fontSize: 13,
  },
  addressDetail: {
    fontWeight: "600",
    fontSize: 15,
    color: '#333',
  },
  editBtn: {
    backgroundColor: '#A69BFF',
    width: 50,
    height: 65, // Bằng chiều cao của addressBox
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  paymentSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: '#f9f9f9',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginBottom: 20,
  },
  paymentLabel: {
    marginLeft: 15,
    fontSize: 16,
    fontWeight: '500',
    color: '#333'
  },
  changeBtn: {
    borderWidth: 1,
    borderColor: '#5B4BFF',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  changeBtnText: {
    color: '#5B4BFF',
    fontWeight: 'bold',
  },
  summaryContainer: {
    marginBottom: 30,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    color: '#333'
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  summaryLabel: {
    color: '#888',
    fontSize: 16,
  },
  summaryValue: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333'
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: "bold",
    color: '#333'
  },
  totalValue: {
    fontSize: 20,
    color: "#5B4BFF",
    fontWeight: "bold",
  },
  confirmButton: {
    backgroundColor: "#5B4BFF",
    paddingVertical: 18,
    borderRadius: 35,
    alignItems: "center",
    marginBottom: 30,
    shadowColor: '#5B4BFF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  confirmButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  }
});