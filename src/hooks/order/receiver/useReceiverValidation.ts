export default function useReceiverValidation(values) {
  const isSamePhoneNumber = (value: string, index: number) => {
    const allPhones = values?.map(item => item.phone);
    return allPhones?.filter((phone, i) => phone === value && i !== index).length === 0 || "전화번호가 중복되었습니다.";
  };

  return {
    isSamePhoneNumber
  }
}
