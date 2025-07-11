import useOrderInfo from '@/hooks/useOrderInfo';
import type { inputStyle } from '@/types/inputStyle';
import type { inputType } from '@/types/inputType';
import styled from '@emotion/styled';
import { useCallback, useEffect, useState } from 'react';
import Close from '@/assets/close.svg?react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: auto;
  background-color: white;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
  margin-top: 0.7rem;
  margin-left: 1rem;
  margin-bottom: 0.5rem;
`;

const Label = styled.div`
  ${({ theme }) => theme.typography.label1Bold};
`;

const FormField = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing.spacing4};
`;
const FormHint = styled.div`
  ${({ theme }) => theme.typography.label1Regular};
  width: 5.4rem;
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
  ${({ theme }) => theme.typography.label1Regular};
  display: flex;
  width: 100%;
  height: 2.3rem;
  box-sizing: border-box;
  align-content: center;
  padding-left: 0.76rem;
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
  ${({ theme }) => theme.typography.label1Regular};
  display: flex;
  width: 100%;
  height: 2.3rem;
  box-sizing: border-box;
  align-content: center;
  padding-left: 0.76rem;
  padding-right: 0.76rem;
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

const Line = styled.div`
  align-self: center;
  width: 95%;
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.colors.gray400};
  border-top-style: solid;
`;

const ErrorText = styled.div`
  ${({ theme }) => theme.typography.label2Regular}
  margin-top: 0.3rem;
  margin-left: 0.6rem;
  color: ${({ theme }) => theme.colors.red700};
`;

const svgSize = 20;

export const RecipientInputInModal = ({ index }: { index: number }) => {
  const { setIsFirstTry, form, product, error } = useOrderInfo();
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
    handleInputFieldStyle('name', selectedInput, error.recipientNameErrorArr[index]);
  }, [handleInputFieldStyle, selectedInput, error.recipientNameErrorArr, index]);

  useEffect(() => {
    handleInputFieldStyle('phoneNumber', selectedInput, error.phoneNumberErrorArr[index]);
  }, [handleInputFieldStyle, selectedInput, error.phoneNumberErrorArr, index]);

  useEffect(() => {
    handleInputFieldStyle('amount', selectedInput, error.amountError);
  }, [handleInputFieldStyle, selectedInput, error.amountError]);

  return (
    <Container>
      <Header>
        <Label>받는 사람 1</Label>
        <Close width={svgSize} height={svgSize} fill="black" style={{ marginLeft: '5px' }} />
      </Header>
      <FormField>
        <FormHint>이름</FormHint>
        <InputContainer>
          <InputField
            inputFieldStyle={nameInputFieldStyle}
            {...form.register(`recipientInfo.${index}.recipientName`)}
            placeholder={'이름을 입력하세요.'}
            onChange={() => {
              error.setTargetRecipientName('modifying..');
            }}
            onFocus={() => {
              setSelectedInput('name');
            }}
            onBlur={() => {
              setSelectedInput('');
            }}
          />
          {error.recipientNameErrorArr[index] && (
            <ErrorText>{error.recipientNameErrorArr[index]}</ErrorText>
          )}
        </InputContainer>
      </FormField>
      <FormField>
        <FormHint>전화번호</FormHint>
        <InputContainer>
          <InputField
            inputFieldStyle={phoneNumberInputFieldStyle}
            {...form.register(`recipientInfo.${index}.phoneNumber`)}
            placeholder={'전화번호를 입력하세요.'}
            onChange={() => {
              error.setTargetPhoneNumber('modifying..');
            }}
            onFocus={() => {
              setSelectedInput('phoneNumber');
            }}
            onBlur={() => {
              setSelectedInput('');
            }}
          />
          {error.phoneNumberErrorArr[index] && (
            <ErrorText>{error.phoneNumberErrorArr[index]}</ErrorText>
          )}
        </InputContainer>
      </FormField>
      <FormField>
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
      <Line />
    </Container>
  );
};
