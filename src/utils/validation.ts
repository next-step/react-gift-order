export const isBlank = (v: string) => v.trim() === '';

export const isPhone = (v: string) => /^01[016789]\d{7,8}$/.test(v);

export interface OrderErrors {
  message?: string;
  sender?: string;
  recvName?: string;
  recvPhone?: string;
  qty?: string;
}

export function validateOrder({
  message,
  sender,
  recvName,
  recvPhone,
  qty,
}: {
  message: string;
  sender: string;
  recvName: string;
  recvPhone: string;
  qty: number;
}): OrderErrors {
  const err: OrderErrors = {};

  if (isBlank(message)) err.message = '메시지를 입력해주세요.';
  if (isBlank(sender)) err.sender = '이름을 입력해주세요.';
  if (isBlank(recvName)) err.recvName = '이름을 입력해주세요.';

  if (isBlank(recvPhone)) {
    err.recvPhone = '전화번호를 입력해주세요.';
  } else if (!isPhone(recvPhone)) {
    err.recvPhone = '올바른 전화번호 형식이 아닙니다.';
  }

  if (qty < 1) err.qty = '구매 수량은 1개 이상이어야 합니다.';

  return err;
}

export function validateField(
  field: keyof OrderErrors,
  value: string | number,
): string | undefined {
  switch (field) {
    case 'message':
      return isBlank(String(value)) ? '메시지를 입력해주세요.' : undefined;
    case 'sender':
      return isBlank(String(value)) ? '이름을 입력해주세요.' : undefined;
    case 'recvName':
      return isBlank(String(value)) ? '이름을 입력해주세요.' : undefined;
    case 'recvPhone':
      if (isBlank(String(value))) return '전화번호를 입력해주세요.';
      return isPhone(String(value)) ? undefined : '올바른 전화번호 형식이 아닙니다.';
    case 'qty':
      return Number(value) < 1 ? '구매 수량은 1개 이상이어야 합니다.' : undefined;
  }
}
