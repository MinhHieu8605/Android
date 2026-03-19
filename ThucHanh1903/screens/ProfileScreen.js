import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Switch,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons, Feather, MaterialCommunityIcons } from "@expo/vector-icons";

export default function ProfileScreen({ navigation }) {
  const [darkMode, setDarkMode] = React.useState(false);

  const MenuItem = ({ icon, title, isSwitch = false, value, onValueChange }) => (
    <TouchableOpacity style={styles.menuItem}>
      <View style={styles.menuLeft}>
        <View style={styles.iconContainer}>
          {icon}
        </View>
        <Text style={styles.menuText}>{title}</Text>
      </View>
      {isSwitch ? (
        <Switch
          value={value}
          onValueChange={onValueChange}
          trackColor={{ false: "#ddd", true: "#5B4BFF" }}
          thumbColor="#fff"
        />
      ) : (
        <Ionicons name="chevron-forward" size={20} color="#333" />
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        <View style={styles.headerBackground}>
          <View style={styles.headerTop}>
            <TouchableOpacity onPress={() => navigation?.goBack()}>
              <Ionicons name="arrow-back" size={24} color="#333" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Profile</Text>
            <View style={{ width: 24 }} /> 
          </View>

          <View style={styles.avatarWrapperOuter}>
            <View style={styles.avatarWrapperInner}>
              <Image
                source = {
                  require("../assets/z7409500485558_9c4e0669b2733e625da402ddbdfe93e3.jpg")
                }
                style={styles.avatarImg}
              />
              <TouchableOpacity style={styles.editIcon}>
                <MaterialCommunityIcons name="pencil" size={14} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* INFO */}
        <View style={styles.infoSection}>
          <Text style={styles.nameText}>Tô Minh Hiếu</Text>
          <Text style={styles.emailText}>minhhieu@gmail.com</Text>
        </View>

        {/* MENU LIST */}
        <View style={styles.menuSection}>
          <MenuItem 
            icon={<Feather name="home" size={20} color="#333" />} 
            title="Home" 
          />
          <MenuItem 
            icon={<Ionicons name="wallet-outline" size={20} color="#333" />} 
            title="My Card" 
          />
          <MenuItem 
            icon={<Ionicons name="moon-outline" size={20} color="#333" />} 
            title="Dark Mood" 
            isSwitch={true}
            value={darkMode}
            onValueChange={setDarkMode}
          />
          <MenuItem 
            icon={<Ionicons name="location-outline" size={20} color="#333" />} 
            title="Truck Your Order" // Giữ nguyên "Truck" giống ảnh mẫu của bạn
          />
          <MenuItem 
            icon={<Ionicons name="settings-outline" size={20} color="#333" />} 
            title="Settings" 
          />
          <MenuItem 
            icon={<Ionicons name="help-circle-outline" size={20} color="#333" />} 
            title="Help Center" 
          />
        </View>

        {/* LOG OUT BUTTON */}
        <TouchableOpacity style={styles.logoutBtn}>
          <Text style={styles.logoutText}>Log Out</Text>
          <MaterialCommunityIcons name="logout" size={20} color="#fff" style={{marginLeft: 10}} />
        </TouchableOpacity>

        <View style={{height: 100}} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerBackground: {
    backgroundColor: "#FEFDE1",
    height: 220,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    alignItems: "center",
    paddingTop: 50,
  },
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  avatarWrapperOuter: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  avatarWrapperInner: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  avatarImg: {
    width: 105,
    height: 105,
    borderRadius: 55,
  },
  editIcon: {
    position: "absolute",
    bottom: 5,
    right: 5,
    backgroundColor: "#5B4BFF",
    width: 26,
    height: 26,
    borderRadius: 13,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#fff",
  },
  infoSection: {
    alignItems: "center",
    marginTop: 40,
  },
  nameText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  emailText: {
    color: "#888",
    fontSize: 14,
    marginTop: 5,
  },
  menuSection: {
    paddingHorizontal: 25,
    marginTop: 30,
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
  },
  menuLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    width: 40,
  },
  menuText: {
    fontSize: 16,
    color: "#333",
    fontWeight: "500",
  },
  logoutBtn: {
    backgroundColor: "#5B4BFF",
    flexDirection: "row",
    marginHorizontal: 25,
    height: 55,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  logoutText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});