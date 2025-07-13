import React from 'react';
import * as S from './styles';
import {
  EDIT_BUTTON_TEXT,
  ADD_BUTTON_TEXT,
  EMPTY_RECIPIENT_MESSAGE,
  NAME_HEADER,
  PHONE_HEADER,
  QUANTITY_HEADER,
  QUANTITY_UNIT,
  RECEIVER_TITLE,
} from './constants';

interface Recipient {
  name: string;
  phone: string;
  quantity: number;
}

interface ReceiverSelectBoxProps {
  onClick?: () => void;
  recipients: Recipient[];
}

const ReceiverSelectBox: React.FC<ReceiverSelectBoxProps> = ({ onClick, recipients = [] }) => {
  return (
    <S.Frame>
      <S.Header>
        <S.Title>{RECEIVER_TITLE}</S.Title>
        <S.Box onClick={onClick} style={{ cursor: 'pointer' }}>
          <S.Text>{recipients.length > 0 ? EDIT_BUTTON_TEXT : ADD_BUTTON_TEXT}</S.Text>
        </S.Box>
      </S.Header>

      <S.RecipientInfoBox>
        {recipients.length === 0 ? (
          <S.EmptyText>{EMPTY_RECIPIENT_MESSAGE}</S.EmptyText>
        ) : (
          <>
            <S.RecipientHeader>
              <p>{NAME_HEADER}</p>
              <p>{PHONE_HEADER}</p>
              <p>{QUANTITY_HEADER}</p>
            </S.RecipientHeader>
            {recipients.map((recipient, index) => (
              <S.RecipientInfo key={index}>
                <p>{recipient.name}</p>
                <p>{recipient.phone}</p>
                <p>{recipient.quantity}{QUANTITY_UNIT}</p>
              </S.RecipientInfo>
            ))}
          </>
        )}
      </S.RecipientInfoBox>
    </S.Frame>
  );
};
export default ReceiverSelectBox;
