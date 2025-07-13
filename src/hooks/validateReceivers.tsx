export const validateReceivers = (receiverList: { name: string; phone: string; quantity: number }[]) => {
  const phoneSet = new Set<string>();

  for (let i = 0; i < receiverList.length; i++) {
    const r = receiverList[i];

    if (!r.name.trim()) {
      alert(`${i + 1}번 받는 사람 이름을 입력해주세요.`);
      return false;
    }

    if (!/^010\d{8}$/.test(r.phone)) {
      alert(`${i + 1}번 받는 사람 전화번호는 01012345678 형식이어야 합니다.`);
      return false;
    }

    if (phoneSet.has(r.phone)) {
      alert(`${i + 1}번 전화번호가 중복됩니다.`);
      return false;
    }

    phoneSet.add(r.phone);

    if (r.quantity < 1) {
      alert(`${i + 1}번 수량은 1 이상이어야 합니다.`);
      return false;
    }
  }

  return true;
};
