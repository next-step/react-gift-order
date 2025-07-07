import React from 'react';
import Label from '@/components/atoms/Label';
import InputField from '@/components/molcules/InputField';
import * as S from './styles';

interface ReceiverSectionProps {
  receiverName: string;
  receiverPhone: string;
  quantity: string;
  onReceiverNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onReceiverPhoneChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onQuantityChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  receiverNameError?: string;
  receiverPhoneError?: string;
  quantityError?: string;
}

const ReceiverSection: React.FC<ReceiverSectionProps> = ({
  receiverName,
  receiverPhone,
  quantity,
  onReceiverNameChange,
  onReceiverPhoneChange,
  onQuantityChange,
  receiverNameError,
  receiverPhoneError,
  quantityError,
}) => {
  return (
    <S.Container>
      <S.SectionTitle>
        <Label variant="bold">받는 사람</Label>
      </S.SectionTitle>
      <S.FormContent>
        <S.FormRow>
          <InputField
            label="이름"
            placeholder="이름을 입력하세요."
            value={receiverName}
            onChange={onReceiverNameChange}
            labelMinWidth="3.75rem"
            layout="horizontal"
            error={receiverNameError}
          />
        </S.FormRow>
        <S.FormSpacer />
        <S.FormRow>
          <InputField
            label="전화번호"
            placeholder="전화번호를 입력하세요."
            value={receiverPhone}
            onChange={onReceiverPhoneChange}
            type="tel"
            labelMinWidth="3.75rem"
            layout="horizontal"
            error={receiverPhoneError}
          />
        </S.FormRow>
        <S.FormSpacer />
        <S.FormRow>
          <InputField
            label="수량"
            placeholder="수량을 입력하세요."
            value={quantity}
            onChange={onQuantityChange}
            type="number"
            labelMinWidth="3.75rem"
            layout="horizontal"
            error={quantityError}
          />
        </S.FormRow>
      </S.FormContent>
    </S.Container>
  );
};

export default ReceiverSection; 