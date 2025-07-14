import type { Receiver } from '@/types/order';

export function getDuplicatePhoneIndexes(receivers: Receiver[]): number[] {
  const phoneMap: Record<string, number[]> = {};

  receivers.forEach((receiver, idx) => {
    const phone = receiver.phone;
    if (!phone) return;
    if (!phoneMap[phone]) phoneMap[phone] = [];
    phoneMap[phone].push(idx);
  });

  return Object.values(phoneMap)
    .filter((arr) => arr.length > 1)
    .flat();
}
