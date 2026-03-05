import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

export default function HomeScreen({ route, navigation }) {
  const { phone } = route.params || {};

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.welcome}>Chào mừng bạn!</Text>
        <Text style={styles.phone}>{phone}</Text>
        <Text style={styles.sub}>
          Bạn đã đăng nhập thành công vào OneHousing Pro
        </Text>

        <View style={styles.divider} />

        <TouchableOpacity
          style={styles.logoutBtn}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.logoutText}>Đăng xuất</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  avatarCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#e6f7f6',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  avatarIcon: {
    fontSize: 36,
  },
  welcome: {
    fontSize: 26,
    fontWeight: '700',
    color: '#111',
    marginBottom: 8,
  },
  phone: {
    fontSize: 18,
    fontWeight: '600',
    color: '#00b3a4',
    marginBottom: 12,
  },
  sub: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    lineHeight: 22,
  },
  divider: {
    width: 48,
    height: 2,
    backgroundColor: '#e8e8e8',
    borderRadius: 2,
    marginVertical: 32,
  },
  logoutBtn: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: '#00b3a4',
  },
  logoutText: {
    color: '#00b3a4',
    fontWeight: '600',
    fontSize: 15,
  },
});