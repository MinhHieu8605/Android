import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen"; // Component hiển thị khi nhấn Order
import ProfileScreen from "./screens/ProfileScreen";
import InboxScreen from "./screens/InboxScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: "#5B4BFF",   // Màu khi đang chọn
          tabBarInactiveTintColor: "#888",   // Màu khi không chọn
          tabBarStyle: {
            height: 75,                      // Tăng chiều cao để giống ảnh
            paddingBottom: 12,               // Đẩy nội dung lên trên một chút
            paddingTop: 8,
            borderTopWidth: 1,
            borderTopColor: "#f0f0f0",
            backgroundColor: "#ffffff",
          },
          tabBarLabelStyle: {
            fontSize: 10,
            fontWeight: "bold",
            textTransform: "uppercase",      // Tự động viết hoa toàn bộ
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            // Chọn icon sát nhất với hình mẫu
            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Order") {
              iconName = focused ? "bag-handle" : "bag-handle-outline";
            } else if (route.name === "Inbox") {
              iconName = focused ? "chatbubble-ellipses" : "chatbubble-ellipses-outline";
            } else if (route.name === "Profile") {
              iconName = focused ? "person" : "person-outline";
            }

            return <Ionicons name={iconName} size={24} color={color} />;
          },
        })}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ tabBarLabel: "HOME" }} 
        />
        <Tab.Screen 
          name="Order" 
          component={CartScreen} 
          options={{ tabBarLabel: "ORDER" }} 
        />
        <Tab.Screen 
          name="Inbox" 
          component={InboxScreen} 
          options={{ tabBarLabel: "INBOX" }} 
        />
        <Tab.Screen 
          name="Profile" 
          component={ProfileScreen} 
          options={{ tabBarLabel: "PROFILE" }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}