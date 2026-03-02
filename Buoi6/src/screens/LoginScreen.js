import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useState } from 'react';
import PrimaryButton from '../components/PrimaryButton';
import { isValidPhone, formatPhone, cleanPhone } from '../utils/phoneUtils';

export default function LoginScreen() {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  // Validation khi nhập + Auto format
  const handleChangeText = (text) => {
    const formatted = formatPhone(text);
    setPhone(formatted);

    const cleaned = cleanPhone(formatted);

    if (cleaned.length > 0 && !isValidPhone(cleaned)) {
      setError('Số điện thoại không đúng định dạng');
    } else {
      setError('');
    }
  };

  // Validation khi click button
  const handleContinue = () => {
    const cleaned = cleanPhone(phone);

    if (!isValidPhone(cleaned)) {
      setError('Số điện thoại không đúng định dạng');
      return;
    }

    setError('');
    alert('Hợp lệ!');
  };

  const isDisabled = !isValidPhone(cleanPhone(phone));

  return (
    <View style={styles.box}>
      <Text style={styles.title}>Đăng nhập</Text>

      <Text style={styles.label}>Nhập số điện thoại</Text>

      <Text style={styles.desc}>
        Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro
      </Text>

      <TextInput
        style={[styles.input, error && styles.inputError]}
        placeholder="Nhập số điện thoại"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={handleChangeText}
      />

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <PrimaryButton
        title="Tiếp tục"
        disabled={isDisabled}
        onPress={handleContinue}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 6,
  },
  desc: {
    fontSize: 13,
    color: '#666',
    marginBottom: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 8,
    fontSize: 16,
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginTop: 6,
    marginBottom: 20,
  },
});