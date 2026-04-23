import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function DetailScreen({ route }) {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text>{item.description}</Text>
      <Text style={styles.price}>${item.price}</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={{ color: '#fff' }}>Buy Now</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  image: { width: '100%', height: 200, borderRadius: 10 },
  name: { fontSize: 22, fontWeight: 'bold', marginVertical: 10 },
  price: { fontSize: 18, marginVertical: 10 },
  button: {
    backgroundColor: '#C67C4E',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center'
  }
});