import { useState } from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

export default function LoginScreen() {
  const [phone, setPhone] = useState('');

  const isValidPhone = /^0\d{9}$/.test(phone);
  return(
    <View style={styles.box}>
      <Text style={styles.title}>Đăng nhập</Text>

      <Text style={styles.label}>Nhập số điện thoại</Text>
      <Text style={styles.desc}>
        Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Nhập số điện thoại của bạn"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
        maxLength={10}
      />

      <PrimaryButton
        title="Tiếp tục"
        disabled={!isValidPhone}
      />
    </View>
  );
}

const styles=StyleSheet.create({
  box: {
    paddingHorizontal: 20,
    paddingTop: 10
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 20
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 6
  },
  desc: {
    fontSize: 13,
    color: '#666',
    marginBottom: 20
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 8,
    fontSize: 16,
    marginBottom: 30
  },
  btn: {
    backgroundColor: '#eee',
    paddingVertical: 14,
    borderRadius: 6
  },
  btnText: {
    textAlign: 'center',
    color: '#aaa',
    fontSize: 16, fontWeight: '500'
  }
});
