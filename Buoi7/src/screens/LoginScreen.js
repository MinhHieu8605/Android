import { StyleSheet, Text, View, TextInput, SafeAreaView } from 'react-native';
import { useState } from 'react';
import PrimaryButton from '../components/PrimaryButton';
import { isValidPhone, formatPhone, cleanPhone } from '../utils/phoneUtils';

export default function LoginScreen({ navigation }) {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

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

  const handleContinue = () => {
    const cleaned = cleanPhone(phone);

    if (!isValidPhone(cleaned)) {
      setError('Số điện thoại không đúng định dạng');
      return;
    }

    setError('');
    // Chuyển sang HomeScreen, truyền số điện thoại qua params
    navigation.navigate('Home', { phone: cleaned });
  };

  const isDisabled = !isValidPhone(cleanPhone(phone));

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.box}>
        <Text style={styles.title}>Đăng nhập</Text>

        <Text style={styles.label}>Nhập số điện thoại</Text>

        <Text style={styles.desc}>
          Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro
        </Text>

        <TextInput
          style={[styles.input, error && styles.inputError]}
          placeholder="Nhập số điện thoại"
          placeholderTextColor="#aaa"
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff',
  },
  box: {
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  logoCircle: {
    width: 64,
    height: 64,
    borderRadius: 16,
    backgroundColor: '#00b3a4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
    letterSpacing: 1,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 24,
    color: '#111',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
    color: '#111',
  },
  desc: {
    fontSize: 13,
    color: '#666',
    marginBottom: 20,
    lineHeight: 20,
  },
  input: {
    borderBottomWidth: 1.5,
    borderColor: '#ddd',
    paddingVertical: 10,
    fontSize: 16,
    color: '#111',
  },
  inputError: {
    borderColor: '#e53935',
  },
  errorText: {
    color: '#e53935',
    marginTop: 6,
    fontSize: 13,
  },
});