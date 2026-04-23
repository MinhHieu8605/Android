import React, { useState } from 'react';
import { 
  View, 
  Text, 
  Image, 
  StyleSheet, 
  TouchableOpacity, 
  SafeAreaView, 
  ScrollView,
  Platform
} from 'react-native';

export default function DetailScreen({ route }) {
  // Mock dữ liệu mặc định để tránh lỗi nếu route.params trống trong lúc test
  const item = route?.params?.item || {
    name: 'Caffe Mocha',
    image: require('../../assets/z7756140639950_e35152b7ddc3d09c66451326f3907ffa.jpg'),
    description: 'A cappuccino is an approximately 150 ml (5 oz) beverage, with 25 ml of espresso coffee and 85ml of fresh milk the fo.. ',
    price: '4.53',
    rating: '4.8',
    reviews: '(230)'
  };

  // Xử lý image: nếu là string path, require nó; nếu là URL hoặc require object thì dùng trực tiếp
  const getImageSource = () => {
    if (typeof item.image === 'string') {
      // Nếu là URL web
      if (item.image.startsWith('http')) {
        return { uri: item.image };
      }
      // Nếu là string path tương đối, convert sang require
      try {
        if (item.image.includes('z7756140639977')) {
          return require('../../assets/z7756140639950_e35152b7ddc3d09c66451326f3907ffa.jpg');
        } else if (item.image.includes('z7756140639950')) {
          return require('../../assets/z7756140639950_e35152b7ddc3d09c66451326f3907ffa.jpg');
        }
      } catch (e) {
        return require('../../assets/z7756140639977_d3d83e338580d691465682affbf57cb9.jpg');
      }
    }
    // Nếu đã là require object thì dùng trực tiếp
    return item.image;
  };

  // State quản lý việc chọn size
  const [selectedSize, setSelectedSize] = useState('M');

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconButton}>
          <Text style={styles.headerIcon}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Detail</Text>
        <TouchableOpacity style={styles.iconButton}>
          <Text style={styles.headerIcon}>♡</Text>
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <Image source={getImageSource()} style={styles.image} />

        {/* Title & Subtitle */}
        <View style={styles.titleRow}>
          <View>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.subtitle}>Ice/Hot</Text>
          </View>
          {/* Mock Feature Icons (Bạn có thể thay bằng icon thật SVG/Ionicons) */}
          <View style={styles.featureIcons}>
            <View style={styles.featureIconBox}><Text>🛵</Text></View>
            <View style={styles.featureIconBox}><Text>☕</Text></View>
            <View style={styles.featureIconBox}><Text>🥛</Text></View>
          </View>
        </View>

        {/* Rating */}
        <View style={styles.ratingRow}>
          <Text style={styles.star}>⭐</Text>
          <Text style={styles.ratingScore}>{item.rating}</Text>
          <Text style={styles.ratingCount}> {item.reviews}</Text>
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Description */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.descriptionText}>
            {item.description}
            <Text style={styles.readMore}>Read More</Text>
          </Text>
        </View>

        {/* Size Selection */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Size</Text>
          <View style={styles.sizeContainer}>
            {['S', 'M', 'L'].map((size) => (
              <TouchableOpacity
                key={size}
                style={[
                  styles.sizeButton,
                  selectedSize === size && styles.sizeButtonActive
                ]}
                onPress={() => setSelectedSize(size)}
              >
                <Text style={[
                  styles.sizeText,
                  selectedSize === size && styles.sizeTextActive
                ]}>
                  {size}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Fixed Bottom Bar */}
      <View style={styles.bottomBar}>
        <View style={styles.priceContainer}>
          <Text style={styles.priceLabel}>Price</Text>
          <Text style={styles.priceValue}>$ {item.price}</Text>
        </View>
        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyButtonText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { 
    flex: 1, 
    backgroundColor: '#FAFAFA' // Màu nền tổng thể hơi xám nhẹ
  },
  header: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingHorizontal: 20, 
    paddingVertical: 15 
  },
  iconButton: {
    padding: 5
  },
  headerIcon: { 
    fontSize: 22, 
    color: '#2F2D2C' 
  },
  headerTitle: { 
    fontSize: 18, 
    fontWeight: '600', 
    color: '#2F2D2C' 
  },
  scrollView: { 
    paddingHorizontal: 20 
  },
  image: { 
    width: '100%', 
    height: 226, 
    borderRadius: 16, 
    marginBottom: 20 
  },
  titleRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center' 
  },
  name: { 
    fontSize: 22, 
    fontWeight: '700', 
    color: '#2F2D2C' 
  },
  subtitle: { 
    fontSize: 12, 
    color: '#9B9B9B', 
    marginTop: 5 
  },
  featureIcons: { 
    flexDirection: 'row', 
    gap: 12 
  },
  featureIconBox: { 
    width: 32, 
    height: 32, 
    backgroundColor: '#F9F9F9', 
    borderRadius: 10, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  ratingRow: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginTop: 15 
  },
  star: { 
    fontSize: 16, 
    color: '#FBBE21' 
  },
  ratingScore: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    color: '#2F2D2C', 
    marginLeft: 5 
  },
  ratingCount: { 
    fontSize: 12, 
    color: '#9B9B9B', 
    marginLeft: 5 
  },
  divider: { 
    height: 1, 
    backgroundColor: '#EAEAEA', 
    marginVertical: 20 
  },
  section: { 
    marginBottom: 25 
  },
  sectionTitle: { 
    fontSize: 16, 
    fontWeight: '600', 
    color: '#2F2D2C', 
    marginBottom: 15 
  },
  descriptionText: { 
    fontSize: 14, 
    color: '#9B9B9B', 
    lineHeight: 22 
  },
  readMore: { 
    color: '#C67C4E', 
    fontWeight: '600' 
  },
  sizeContainer: { 
    flexDirection: 'row', 
    justifyContent: 'space-between' 
  },
  sizeButton: { 
    flex: 1, 
    paddingVertical: 10, 
    borderWidth: 1, 
    borderColor: '#DEDEDE', 
    borderRadius: 10, 
    alignItems: 'center', 
    marginHorizontal: 5, 
    backgroundColor: '#FFF' 
  },
  sizeButtonActive: { 
    borderColor: '#C67C4E', 
    backgroundColor: '#FFF5EE' // Nền cam nhạt khi được chọn
  },
  sizeText: { 
    fontSize: 14, 
    color: '#2F2D2C' 
  },
  sizeTextActive: { 
    color: '#C67C4E', 
    fontWeight: '600' 
  },
  bottomBar: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingHorizontal: 20, 
    paddingVertical: 20, 
    backgroundColor: '#FFF', 
    borderTopLeftRadius: 24, 
    borderTopRightRadius: 24,
    // Đổ bóng cho viền trên (Tùy chọn đa nền tảng)
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.05,
        shadowRadius: 5
      },
      android: {
        elevation: 10
      }
    })
  },
  priceContainer: { 
    flex: 1 
  },
  priceLabel: { 
    fontSize: 14, 
    color: '#9B9B9B', 
    marginBottom: 4 
  },
  priceValue: { 
    fontSize: 22, 
    fontWeight: '700', 
    color: '#C67C4E' 
  },
  buyButton: { 
    backgroundColor: '#C67C4E', 
    paddingVertical: 16, 
    paddingHorizontal: 45, 
    borderRadius: 16 
  },
  buyButtonText: { 
    color: '#FFF', 
    fontSize: 16, 
    fontWeight: '600' 
  }
});