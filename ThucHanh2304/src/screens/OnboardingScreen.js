import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function OnboardingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* 1. Ảnh nền được đẩy hoàn toàn lên phía trên */}
      <Image
        source={require('../../assets/z7756140908293_c3e1e0f613efdcbec5127de1f34389e4.jpg')}
        style={styles.topImage}
        resizeMode="cover"
      />

      {/* 2. Phần nội dung nằm ở phía dưới */}
      <View style={styles.contentContainer}>
        <Text style={styles.title}>
          Fall in Love with Coffee in Blissful Delight!
        </Text>
        
        <Text style={styles.description}>
          Welcome to our cozy coffee corner, where every cup is a delightful for you.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.replace('Main')}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Nền đen tuyền toàn màn hình để đồng nhất với đuôi ảnh
  },
  topImage: {
    width: width,
    height: height * 0.65, // Ảnh chỉ chiếm 65% chiều cao phía trên
    position: 'absolute',
    top: 0,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingBottom: 50, // Khoảng cách đáy an toàn
    // Không dùng backgroundColor: 'rgba...' nữa để lộ lớp nền đen #000 phía sau
  },
  title: {
    color: '#FFFFFF',
    fontSize: 34,
    fontWeight: 'bold', // Chữ đậm và nổi bật như thiết kế
    textAlign: 'center',
    lineHeight: 48, // Nới rộng khoảng cách dòng cho thoáng
    marginBottom: 16,
  },
  description: {
    color: '#A9A9A9',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 35,
    paddingHorizontal: 15,
  },
  button: {
    backgroundColor: '#C67C4E',
    width: '100%', // Nút kéo dài full màn hình theo viền lề 30px
    height: 60,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});