import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const cardWidth = width / 2 - 24; // Tính toán để 2 thẻ vừa khít màn hình, có khoảng trống ở giữa

export default function CoffeeCard({ item, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />
        {/* Đánh giá (Rating Badge) đè lên góc phải của ảnh */}
        <View style={styles.ratingBadge}>
          <Text style={styles.star}>⭐</Text>
          <Text style={styles.ratingText}>{item.rating}</Text>
        </View>
      </View>
      
      <Text style={styles.name} numberOfLines={1}>{item.name}</Text>
      <Text style={styles.subtitle} numberOfLines={1}>{item.category || "Espresso"}</Text>
      
      <View style={styles.bottomRow}>
        <Text style={styles.price}>
          <Text style={styles.currency}>$ </Text>
          {item.price}
        </Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addIcon}>+</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: cardWidth,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 8,
    marginBottom: 16,
    marginHorizontal: 8,
  },
  imageContainer: {
    width: '100%',
    height: 120,
    borderRadius: 12,
    overflow: 'hidden',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  ratingBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderBottomLeftRadius: 12,
  },
  star: {
    fontSize: 10,
    color: '#FFD700', // Vàng ngôi sao
    marginRight: 4,
  },
  ratingText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: 'bold',
  },
  name: {
    fontWeight: '700',
    fontSize: 16,
    color: '#2F2D2C',
    marginTop: 10,
  },
  subtitle: {
    fontSize: 12,
    color: '#9B9B9B',
    marginTop: 2,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2F2D2C',
  },
  currency: {
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#C67C4E', // Cam nâu
    width: 32,
    height: 32,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addIcon: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});