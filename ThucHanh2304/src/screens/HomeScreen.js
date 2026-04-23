import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHouse, faHeart, faBell } from '@fortawesome/free-regular-svg-icons';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import CoffeeCard from '../components/CoffeeCard';
import data from '../data/data.json';

const categories = ['All Coffee', 'Machiato', 'Latte', 'Americano'];
const byPrefixAndName = {
  far: {
    house: faHouse,
    heart: faHeart,
    bell: faBell,
  },
  fas: {
    'bag-shopping': faShoppingBag,
  },
};

export default function HomeScreen({ navigation }) {
  const [activeCategory, setActiveCategory] = useState('All Coffee');

  // Toàn bộ phần phía trên (Location, Search, Banner, Categories)
  const renderHeader = () => (
    <View style={styles.headerContainer}>
      {/* Location */}
      <View style={styles.locationContainer}>
        <Text style={styles.locationLabel}>Location</Text>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.locationText}>Bilzen, Tanjungbalai</Text>
          <Text style={{ color: '#fff', marginLeft: 5, fontSize: 10 }}>▼</Text>
        </TouchableOpacity>
      </View>

      {/* Thanh Search & Nút Filter */}
      <View style={styles.searchRow}>
        <View style={styles.searchBox}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Search coffee"
            placeholderTextColor="#989898"
          />
        </View>
        <TouchableOpacity style={styles.filterButton} activeOpacity={0.8}>
          <Text style={{ color: '#fff' }}>⚙️</Text>
        </TouchableOpacity>
      </View>

      {/* Banner Khuyến Mãi */}
      <View style={styles.bannerContainer}>
        {/* Lớp phủ màu nâu mờ để chữ dễ đọc hơn */}
        <View style={styles.bannerOverlay} />
        <View style={styles.bannerContent}>
          <View style={styles.bannerBadge}>
            <Text style={styles.bannerBadgeText}>Promo</Text>
          </View>
          <Text style={styles.bannerTitle}>Buy one get</Text>
          <Text style={styles.bannerTitle}>one FREE</Text>
        </View>
      </View>

      {/* Category Scroll */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoryScroll}
      >
        {categories.map((cat, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.categoryBadge,
              activeCategory === cat && styles.activeCategoryBadge
            ]}
            onPress={() => setActiveCategory(cat)}
            activeOpacity={0.8}
          >
            <Text
              style={[
                styles.categoryText,
                activeCategory === cat && styles.activeCategoryText
              ]}
            >
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Background đen nằm cố định ở phía trên */}
      <View style={styles.blackBackground} />

      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={renderHeader}
        contentContainerStyle={styles.flatListContent}
        columnWrapperStyle={styles.columnWrapper}
        renderItem={({ item }) => (
          <CoffeeCard
            item={item}
            onPress={() => navigation.navigate('Detail', { item })}
          />
        )}
      />

      {/* Thanh Bottom Navigation chuẩn High-Fidelity */}
      <View style={styles.bottomNav}>
        {/* Nút Home (Đang chọn) */}
        <TouchableOpacity style={styles.navItem} activeOpacity={0.8}>
          <FontAwesomeIcon icon={byPrefixAndName.far['house']} size={22} color="#C67C4E" />
          <View style={styles.activeIndicator} />
        </TouchableOpacity>

        {/* Nút Yêu thích */}
        <TouchableOpacity style={styles.navItem} activeOpacity={0.8}>
          <FontAwesomeIcon icon={byPrefixAndName.far['heart']} size={22} color="#8D8D8D" />
        </TouchableOpacity>

        {/* Nút Giỏ hàng */}
        <TouchableOpacity style={styles.navItem} activeOpacity={0.8}>
          <FontAwesomeIcon icon={byPrefixAndName.fas['bag-shopping']} size={22} color="#8D8D8D" />
        </TouchableOpacity>

        {/* Nút Thông báo */}
        <TouchableOpacity style={styles.navItem} activeOpacity={0.8}>
          <FontAwesomeIcon icon={byPrefixAndName.far['bell']} size={22} color="#8D8D8D" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  blackBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 280,
    backgroundColor: '#1C1C1C',
  },
  flatListContent: {
    paddingBottom: 120, // Nới rộng khoảng cách đáy để không bị Bottom Nav đè lên thẻ Coffee
  },
  headerContainer: {
    paddingHorizontal: 16,
    paddingTop: 60,
  },
  locationContainer: {
    marginBottom: 24,
  },
  locationLabel: {
    color: '#B7B7B7',
    fontSize: 12,
    marginBottom: 4,
  },
  locationText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  searchBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#313131',
    borderRadius: 16,
    paddingHorizontal: 16,
    height: 52,
    marginRight: 16,
  },
  searchIcon: {
    marginRight: 10,
    fontSize: 16,
  },
  searchInput: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 14,
  },
  filterButton: {
    backgroundColor: '#C67C4E',
    width: 52,
    height: 52,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerContainer: {
    backgroundColor: '#956A54',
    borderRadius: 16,
    height: 140,
    marginBottom: 24,
    overflow: 'hidden', // Giữ các thành phần con không bị tràn ra ngoài góc bo
    justifyContent: 'center',
  },
  bannerOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.1)', // Phủ mờ nhẹ nếu sau này bạn chèn ảnh thật vào
  },
  bannerContent: {
    padding: 20,
    zIndex: 1,
  },
  bannerBadge: {
    backgroundColor: '#ED5151',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  bannerBadgeText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 12,
  },
  bannerTitle: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 'bold',
    lineHeight: 36,
  },
  categoryScroll: {
    marginBottom: 16,
  },
  categoryBadge: {
    backgroundColor: '#EDEDED',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
    marginRight: 12,
  },
  activeCategoryBadge: {
    backgroundColor: '#C67C4E',
  },
  categoryText: {
    color: '#2F2D2C',
    fontSize: 14,
    fontWeight: '500',
  },
  activeCategoryText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  columnWrapper: {
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  
  /* --- CSS CHUẨN CHO BOTTOM NAVIGATION --- */
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40, // Đẩy icon vào giữa giống bản thiết kế
    paddingTop: 15,
    paddingBottom: 30, // Dành chỗ cho vạch ngang của iPhone
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    elevation: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -5 },
    shadowOpacity: 0.08,
    shadowRadius: 15,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: 40,
  },
  iconText: {
    fontSize: 28,
    color: '#8D8D8D', // Màu xám cho các icon chưa active
  },
  activeIndicator: {
    width: 12,
    height: 4,
    backgroundColor: '#C67C4E', // Dấu gạch ngang màu nâu dưới icon Home
    borderRadius: 4,
    marginTop: 4,
  }
});