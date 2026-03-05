// Validate số điện thoại VN: bắt đầu bằng 0 và đủ 10 số
export const isValidPhone = (value) => {
  const regex = /^0\d{9}$/;
  return regex.test(value);
};

// Format hiển thị: 0934 544 344
export const formatPhone = (value) => {
  const cleaned = value.replace(/\D/g, '');

  const match = cleaned.match(/^(\d{0,4})(\d{0,3})(\d{0,3})$/);

  if (match) {
    return [match[1], match[2], match[3]]
      .filter(Boolean)
      .join(' ');
  }

  return cleaned;
};

// Loại bỏ khoảng trắng trước khi validate
export const cleanPhone = (value) => {
  return value.replace(/\s/g, '');
};