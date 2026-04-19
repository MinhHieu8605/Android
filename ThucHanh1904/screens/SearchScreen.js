import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import SearchBar from '../components/SearchBar';
import ProductCard from '../components/ProductCard';
import BottomTabBar from '../components/BottomTabBar';
import FilterModal from '../components/FilterModal';
import { COLORS, SIZES } from '../constants/theme';
import { products } from '../constants/data';

const searchProducts = (query, data, categories = [], brands = []) => {
  let filtered = data;

  // Filter by search query
  if (query && query.trim() !== '') {
    const normalizedQuery = query.toLowerCase().trim();
    filtered = filtered.filter((product) => {
      const name = product.name.toLowerCase();
      const cat = product.category.toLowerCase();
      return name.includes(normalizedQuery) || cat.includes(normalizedQuery);
    });
  }

  // Filter by categories
  if (categories.length > 0) {
    filtered = filtered.filter((product) => categories.includes(product.category));
  }

  return filtered;
};

const SearchScreen = ({ onTabChange }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('explore');
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);

  const filteredProducts = useMemo(
    () => searchProducts(searchQuery, products, selectedCategories, selectedBrands),
    [searchQuery, selectedCategories, selectedBrands]
  );

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  const handleTabPress = (tabKey) => {
    setActiveTab(tabKey);
    onTabChange(tabKey);
  };

  const handleFilterPress = () => {
    setFilterModalVisible(true);
  };

  const handleApplyFilter = (categories, brands) => {
    setSelectedCategories(categories);
    setSelectedBrands(brands);
    setFilterModalVisible(false);
  };

  const renderProduct = ({ item }) => <ProductCard item={item} />;

  const renderEmpty = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>No products found</Text>
      <Text style={styles.emptySubText}>Try a different search term</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
      <SearchBar
        value={searchQuery}
        onChangeText={setSearchQuery}
        onClear={handleClearSearch}
        onFilterPress={handleFilterPress}
      />
      <FlatList
        data={filteredProducts}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.contentContainer}
        ListEmptyComponent={renderEmpty}
        scrollEnabled={true}
      />
      <BottomTabBar activeTab={activeTab} onTabPress={handleTabPress} />

      <FilterModal
        visible={filterModalVisible}
        onClose={() => setFilterModalVisible(false)}
        onApply={handleApplyFilter}
        selectedCategories={selectedCategories}
        selectedBrands={selectedBrands}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  contentContainer: {
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 60,
  },
  emptyText: {
    fontSize: SIZES.large,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: 8,
  },
  emptySubText: {
    fontSize: SIZES.font,
    color: COLORS.subText,
  },
});

export default SearchScreen;