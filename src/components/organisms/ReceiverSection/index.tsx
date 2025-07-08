import React from 'react';
import { Label, InputField } from '@/components';
import * as S from './styles';

interface ReceiverSectionProps {
  receiverName: string;
  receiverPhone: string;
  quantity: number;
  onReceiverNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onReceiverPhoneChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onQuantityChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  receiverNameError?: string;
  receiverPhoneError?: string;
  quantityError?: string;
}

const ReceiverSection = ({
  receiverName,
  receiverPhone,
  quantity,
  onReceiverNameChange,
  onReceiverPhoneChange,
  onQuantityChange,
  receiverNameError,
  receiverPhoneError,
  quantityError,
}: ReceiverSectionProps) => {
  const formFields = [
    {
      label: '이름',
      placeholder: '이름을 입력하세요.',
      value: receiverName,
      onChange: onReceiverNameChange,
      type: 'text' as const,
      error: receiverNameError,
    },
    {
      label: '전화번호',
      placeholder: '전화번호를 입력하세요.',
      value: receiverPhone,
      onChange: onReceiverPhoneChange,
      type: 'tel' as const,
      error: receiverPhoneError,
    },
    {
      label: '수량',
      placeholder: '수량을 입력하세요.',
      value: String(quantity),
      onChange: onQuantityChange,
      type: 'number' as const,
      error: quantityError,
    },
  ];

  return (
    <S.Container>
      <S.SectionTitle>
        <Label variant="bold">받는 사람</Label>
      </S.SectionTitle>
      <S.FormContent>
        {formFields.map((field, index) => (
          <React.Fragment key={field.label}>
            <InputField
              label={field.label}
              placeholder={field.placeholder}
              value={field.value}
              onChange={field.onChange}
              type={field.type}
              labelMinWidth="3.75rem"
              layout="horizontal"
              error={field.error}
            />
            {index < formFields.length - 1 && <S.FormSpacer />}
          </React.Fragment>
        ))}
      </S.FormContent>
    </S.Container>
  );
};

export default ReceiverSection; 