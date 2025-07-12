import type { Receiver } from "@/types/order";

export function validateReceivers(receivers: Receiver[]) {
  return receivers.filter((r, idx, arr) => {
    const nameValid = r.name?.trim() !== "";
    const phoneValid = /^010\d{8}$/.test(r.phone);
    const quantityValid = Number(r.quantity) >= 1;
    const isPhoneUnique = arr.findIndex((rr) => rr.phone === r.phone) === idx;
    return nameValid && phoneValid && quantityValid && isPhoneUnique;
  });
}
