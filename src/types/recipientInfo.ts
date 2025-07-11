import type { FieldArrayWithId, UseFieldArrayAppend, UseFieldArrayRemove } from 'react-hook-form';

interface RecipientForm {
  recipientName: string;
  phoneNumber: string;
}

type FormValues = {
  recipientInfo: RecipientForm[];
};

export interface RecipientInfo {
  fields: FieldArrayWithId<FormValues, 'recipientInfo', 'id'>[];
  append: UseFieldArrayAppend<FormValues, 'recipientInfo'>;
  remove: UseFieldArrayRemove;
}
