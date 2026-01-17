import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function PrimaryButton({ title, disabled }) {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity disabled={disabled} style={[styles.button,disabled&&styles.disabled]}>
        <Text style={[styles.text,disabled&&styles.textDisabled]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 20
  },
  button: {
    height: 48,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00b3a4'
  },
  disabled: {
    backgroundColor: '#f3f3f3'
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    color: '#fff'
  },
  textDisabled: {
    color: '#c2c2c2'
  },
});
