import type { Recipient } from './Recipient';

export interface OrderFormValue {
  msg: string;
  sendName: string;
  recipients: Recipient[];
  total_count: number;
}
