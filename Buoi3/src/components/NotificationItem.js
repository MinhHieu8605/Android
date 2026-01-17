import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function NotificationItem({ item }) {
  return (
    <View style={[
      styles.container,
      item.highlight && styles.highlight
    ]}>
      <View style={styles.iconBox}>
        <Ionicons
          name={item.type === 'check' ? 'checkmark-circle' : 'people'}
          size={26}
          color="#2F4DBE"
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.desc}>{item.description}</Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 14,
    backgroundColor: '#FFF',
    marginBottom: 8,
  },
  highlight: {
    backgroundColor: '#F4F8FF',
  },
  iconBox: {
    width: 40,
    alignItems: 'center',
    marginTop: 4,
  },
  content: {
    flex: 1,
  },
  title: {
    fontWeight: '600',
    fontSize: 14,
    marginBottom: 4,
  },
  desc: {
    fontSize: 13,
    color: '#555',
    marginBottom: 4,
  },
  time: {
    fontSize: 12,
    color: '#999',
  },
});
