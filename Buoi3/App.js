import {
  StyleSheet,
} from 'react-native';
import {
  SafeAreaView
} from 'react-native-safe-area-context';
import NotificationScreen from '../Buoi3/src/screens/NotificationScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      < NotificationScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.square}>
//         <Text>Hello, world</Text>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,                 // chiếm toàn bộ màn hình
//     justifyContent: 'center', // căn giữa theo chiều dọc
//     alignItems: 'center',     // căn giữa theo chiều ngang
//   },
//   square: {
//     width: 100,
//     height: 100,
//     backgroundColor: 'skyblue',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });


