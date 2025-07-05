import type { Recipients } from './Recipients';

export interface OrderFormValue {
  msg: string;
  sendName: string;
  recipients: Recipients[];
}
