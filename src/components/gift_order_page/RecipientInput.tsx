import useOrderInfo from '@/hooks/useOrderInfo';
import type { inputStyle } from '@/types/inputStyle';
import type { inputType } from '@/types/inputType';
import styled from '@emotion/styled';
import { useCallback, useEffect, useState } from 'react';

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

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-right: 1rem;
  width: 100%;
  height: auto;
`;

const InputField = styled.textarea<{ inputFieldStyle: string }>`
  all: unset;
  display: flex;
  width: 100%;
  height: 2.8rem;
  box-sizing: border-box;
  padding-top: 0.8rem;
  padding-left: 0.76rem;
  font-size: 1rem;
  white-space: pre;
  border-radius: 0.5rem;
  border-color: ${({ theme, inputFieldStyle }) => {
    if (inputFieldStyle === 'idle') {
      return theme.colors.gray400;
    } else if (inputFieldStyle === 'isClicked') {
      return theme.colors.gray800;
    } else {
      return theme.colors.red700;
    }
  }};
  border-style: solid;
  border-width: 1px;
  transition: border-color 0.3s;
`;

const InputNumberField = styled.input<{ inputFieldStyle: string }>`
  all: unset;
  display: flex;
  width: 100%;
  height: 2.8rem;
  box-sizing: border-box;
  padding-left: 0.76rem;
  padding-right: 0.76rem;
  font-size: 1rem;
  white-space: pre;
  border-radius: 0.5rem;
  border-color: ${({ theme, inputFieldStyle }) => {
    if (inputFieldStyle === 'idle') {
      return theme.colors.gray400;
    } else if (inputFieldStyle === 'isClicked') {
      return theme.colors.gray800;
    } else {
      return theme.colors.red700;
    }
  }};
  border-style: solid;
  border-width: 1px;
  transition: border-color 0.3s;
`;

const ErrorText = styled.div`
  ${({ theme }) => theme.typography.label2Regular}
  margin-top: 0.3rem;
  margin-left: 0.6rem;
  color: ${({ theme }) => theme.colors.red700};
`;

export const RecipientInput = () => {
  const { setIsFirstTry, recipient, product, error } = useOrderInfo();
  const [selectedInput, setSelectedInput] = useState<inputType>('');
  const [nameInputFieldStyle, setNameInputFieldStyle] = useState<inputStyle>('idle');
  const [phoneNumberInputFieldStyle, setPhoneNumberInputFieldStyle] = useState<inputStyle>('idle');
  const [amountInputFieldStyle, setAmountInputFieldStyle] = useState<inputStyle>('idle');

  const handleInputFieldStyle = useCallback(
    (type: inputType, selectedInput: inputType, error: string) => {
      let inputStatus: inputStyle = 'idle';

      if (selectedInput === type) {
        inputStatus = 'isClicked';
      } else {
        if (error) {
          inputStatus = 'error';
        } else {
          inputStatus = 'idle';
        }
      }

      if (type === 'name') {
        setNameInputFieldStyle(inputStatus);
      } else if (type === 'phoneNumber') {
        setPhoneNumberInputFieldStyle(inputStatus);
      } else {
        setAmountInputFieldStyle(inputStatus);
      }
    },
    []
  );

  useEffect(() => {
    handleInputFieldStyle('name', selectedInput, error.recipientNameError);
  }, [handleInputFieldStyle, selectedInput, error.recipientNameError]);

  useEffect(() => {
    handleInputFieldStyle('phoneNumber', selectedInput, error.phoneNumberError);
  }, [handleInputFieldStyle, selectedInput, error.phoneNumberError]);

  useEffect(() => {
    handleInputFieldStyle('amount', selectedInput, error.amountError);
  }, [handleInputFieldStyle, selectedInput, error.amountError]);

  return (
    <Container>
      <Label>받는 사람</Label>
      <FormField>
        <FormHint>이름</FormHint>
        <InputContainer>
          <InputField
            inputFieldStyle={nameInputFieldStyle}
            value={recipient.name}
            placeholder={'이름을 입력하세요.'}
            onChange={(e) => {
              recipient.setName(e.target.value);
              error.setTargetRecipientName('modifying..');
            }}
            onFocus={() => {
              setSelectedInput('name');
            }}
            onBlur={() => {
              setSelectedInput('');
            }}
          />
          {error.recipientNameError && <ErrorText>{error.recipientNameError}</ErrorText>}
        </InputContainer>
      </FormField>
      <FormField>
        <FormHint>전화번호</FormHint>
        <InputContainer>
          <InputField
            inputFieldStyle={phoneNumberInputFieldStyle}
            value={recipient.phoneNumber}
            placeholder={'전화번호를 입력하세요.'}
            onChange={(e) => {
              recipient.setPhoneNumber(e.target.value);
              error.setTargetPhoneNumber('modifying..');
            }}
            onFocus={() => {
              setSelectedInput('phoneNumber');
            }}
            onBlur={() => {
              setSelectedInput('');
            }}
          />
          {error.phoneNumberError && <ErrorText>{error.phoneNumberError}</ErrorText>}
        </InputContainer>
      </FormField>
      <FormField style={{ marginBottom: '1.4rem' }}>
        <FormHint>수량</FormHint>
        <InputContainer>
          <InputNumberField
            inputFieldStyle={amountInputFieldStyle}
            type="number"
            value={product.amount}
            onChange={(e) => {
              if (parseInt(e.target.value)) {
                product.setAmount(e.target.value);
                setIsFirstTry(false);
                error.setTargetAmount('1');
              } else {
                product.setAmount('0');
                error.setTargetAmount('1');
              }
            }}
            onFocus={() => {
              setSelectedInput('amount');
            }}
            onBlur={() => {
              setSelectedInput('');
            }}
          />
          {error.amountError && <ErrorText>{error.amountError}</ErrorText>}
        </InputContainer>
      </FormField>
    </Container>
  );
};
