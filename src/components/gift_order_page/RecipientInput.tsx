import useOrderInfo from '@/hooks/useOrderInfo';
import styled from '@emotion/styled';
import { useState } from 'react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: auto;
  background-color: white;
`;

const Label = styled.div`
  ${({ theme }) => theme.typography.title2Bold};
  margin-left: 1rem;
  margin-top: 0.7rem;
  margin-bottom: 0.3rem;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing.spacing2};
`;
const FormHint = styled.div`
  ${({ theme }) => theme.typography.title2Regular};
  width: 5.2rem;
  margin-left: 1rem;
`;

const InputField = styled.textarea<{ isClicked: boolean }>`
  all: unset;
  display: flex;
  width: 100%;
  height: 2.8rem;
  box-sizing: border-box;
  margin-right: 1rem;
  padding-top: 0.8rem;
  padding-left: 0.76rem;
  font-size: 1rem;
  white-space: pre;
  border-radius: 0.5rem;
  border-color: ${({ theme, isClicked }) =>
    isClicked ? theme.colors.gray800 : theme.colors.gray400};
  border-style: solid;
  border-width: 1px;
`;

const InputNumberField = styled.input<{ isClicked: boolean }>`
  all: unset;
  display: flex;
  width: 100%;
  height: 2.8rem;
  box-sizing: border-box;
  margin-right: 1rem;
  padding-left: 0.76rem;
  padding-right: 0.76rem;
  font-size: 1rem;
  white-space: pre;
  border-radius: 0.5rem;
  border-color: ${({ theme, isClicked }) =>
    isClicked ? theme.colors.gray800 : theme.colors.gray400};
  border-style: solid;
  border-width: 1px;
`;

export const RecipientInput = () => {
  const { recipient, product } = useOrderInfo();
  const [nameIsClicked, setNameIsClicked] = useState(false);
  const [phoneNumberIsClicked, setPhoneNumberIsClicked] = useState(false);
  const [amountIsClicked, setAmountIsClicked] = useState(false);

  return (
    <Container>
      <Label>받는 사람</Label>
      <FormField>
        <FormHint>이름</FormHint>
        <InputField
          isClicked={nameIsClicked}
          value={recipient.name}
          placeholder={'이름을 입력하세요.'}
          onChange={(e) => {
            recipient.setName(e.target.value);
          }}
          onFocus={() => {
            setNameIsClicked(true);
          }}
          onBlur={() => {
            setNameIsClicked(false);
          }}
        />
      </FormField>
      <FormField>
        <FormHint>전화번호</FormHint>
        <InputField
          isClicked={phoneNumberIsClicked}
          value={recipient.phoneNumber}
          placeholder={'전화번호를 입력하세요.'}
          onChange={(e) => {
            recipient.setPhoneNumber(e.target.value);
          }}
          onFocus={() => {
            setPhoneNumberIsClicked(true);
          }}
          onBlur={() => {
            setPhoneNumberIsClicked(false);
          }}
        />
      </FormField>
      <FormField style={{ marginBottom: '1.4rem' }}>
        <FormHint>수량</FormHint>
        <InputNumberField
          isClicked={amountIsClicked}
          type="number"
          value={product.amount}
          onChange={(e) => {
            if (parseInt(e.target.value)) {
              product.setAmount(parseInt(e.target.value));
            } else {
              product.setAmount(0);
            }
          }}
          onFocus={() => {
            setAmountIsClicked(true);
          }}
          onBlur={() => {
            setAmountIsClicked(false);
          }}
        />
      </FormField>
    </Container>
  );
};
