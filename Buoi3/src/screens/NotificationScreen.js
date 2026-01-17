import { View, FlatList, Text, StyleSheet } from 'react-native';
import NotificationItem from '../components/NotificationItem';
import notifications from '../data/notifications';

export default function NotificationScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Thông báo</Text>

      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <NotificationItem item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#EEE',
  },
});
