import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.square, { backgroundColor: '#7FE7F4' }]}>
        <Text>Square 1</Text>
      </View>

      <View style={[styles.square, { backgroundColor: '#4ECAC1' }]}>
        <Text>Square 2</Text>
      </View>

      <View style={[styles.square, { backgroundColor: '#FF5C73' }]}>
        <Text>Square 3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  square: {
    width: 80,
    height: 80,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
