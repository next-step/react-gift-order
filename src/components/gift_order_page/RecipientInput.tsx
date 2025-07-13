import type { InputStyle } from '@/types/inputStyle';
import type { InputType } from '@/types/inputType';
import styled from '@emotion/styled';
import { useCallback, useEffect, useState } from 'react';
import Close from '@/assets/close.svg?react';
import { useFormContext, type UseFieldArrayRemove } from 'react-hook-form';
import { isMobilePhone } from 'validator';

interface RecipientForm {
  recipientName: string;
  phoneNumber: string;
  amount: number;
}

type FormValues = {
  message: string;
  senderName: string;
  recipientInfo: RecipientForm[];
};

interface RecipientInputInModal {
  index: number;
  removeRecipient: UseFieldArrayRemove;
}

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

const CloseButton = styled.button`
  all: unset;
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

export const RecipientInput = ({ index, removeRecipient }: RecipientInputInModal) => {
  const [selectedInput, setSelectedInput] = useState<InputType>('');
  const [nameInputFieldStyle, setNameInputFieldStyle] = useState<InputStyle>('idle');
  const [phoneNumberInputFieldStyle, setPhoneNumberInputFieldStyle] = useState<InputStyle>('idle');
  const [amountInputFieldStyle, setAmountInputFieldStyle] = useState<InputStyle>('idle');
  const {
    register,
    trigger,
    formState: { errors },
  } = useFormContext<FormValues>();

  const handleInputFieldStyle = useCallback(
    (type: InputType, selectedInput: InputType, error: string | undefined) => {
      let inputStatus: InputStyle = 'idle';

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
    handleInputFieldStyle(
      'name',
      selectedInput,
      errors.recipientInfo?.[index]?.recipientName?.message
    );
  }, [handleInputFieldStyle, selectedInput, index, errors.recipientInfo]);

  useEffect(() => {
    handleInputFieldStyle(
      'phoneNumber',
      selectedInput,
      errors.recipientInfo?.[index]?.phoneNumber?.message
    );
  }, [handleInputFieldStyle, selectedInput, index, errors.recipientInfo]);

  useEffect(() => {
    handleInputFieldStyle('amount', selectedInput, errors.recipientInfo?.[index]?.amount?.message);
  }, [handleInputFieldStyle, selectedInput, index, errors.recipientInfo]);

  return (
    <Container>
      <Header>
        <Label>받는 사람 1</Label>
        <CloseButton
          onClick={() => {
            removeRecipient(index);
          }}
        >
          <Close width={svgSize} height={svgSize} fill="black" style={{ marginLeft: '5px' }} />
        </CloseButton>
      </Header>
      <FormField>
        <FormHint>이름</FormHint>
        <InputContainer>
          <InputField
            inputFieldStyle={nameInputFieldStyle}
            {...register(`recipientInfo.${index}.recipientName`, {
              required: '이름을 입력해주세요.',
              onChange: async () => await trigger(`recipientInfo.${index}.recipientName`),
            })}
            placeholder={'이름을 입력하세요.'}
            onFocus={() => setSelectedInput('name')}
            onBlur={() => setSelectedInput('')}
          />
          {errors.recipientInfo?.[index]?.recipientName?.message && (
            <ErrorText>{errors.recipientInfo?.[index]?.recipientName?.message}</ErrorText>
          )}
        </InputContainer>
      </FormField>
      <FormField>
        <FormHint>전화번호</FormHint>
        <InputContainer>
          <InputField
            inputFieldStyle={phoneNumberInputFieldStyle}
            {...register(`recipientInfo.${index}.phoneNumber`, {
              required: '전화번호를 입력해주세요.',
              onChange: async () => await trigger(`recipientInfo.${index}.phoneNumber`),
              validate: (input) => {
                const phoneNumber = input.replace(/-/g, '');

                if (phoneNumber === '') return '전화번호를 입력해주세요.';
                if (!isMobilePhone(phoneNumber, 'ko-KR')) return '올바른 전화번호 형식이 아닙니다.';

                return true;
              },
            })}
            placeholder={'전화번호를 입력하세요.'}
            onFocus={() => setSelectedInput('phoneNumber')}
            onBlur={() => setSelectedInput('')}
          />
          {errors.recipientInfo?.[index]?.phoneNumber?.message && (
            <ErrorText>{errors.recipientInfo?.[index]?.phoneNumber?.message}</ErrorText>
          )}
        </InputContainer>
      </FormField>
      <FormField>
        <FormHint>수량</FormHint>
        <InputContainer>
          <InputNumberField
            type="number"
            inputFieldStyle={amountInputFieldStyle}
            {...register(`recipientInfo.${index}.amount`, {
              onChange: async () => await trigger(`recipientInfo.${index}.amount`),
              min: {
                value: 1,
                message: '구매 수량은 1개 이상이어야 합니다.',
              },
            })}
            onFocus={() => setSelectedInput('amount')}
            onBlur={() => setSelectedInput('')}
          />
          {errors.recipientInfo?.[index]?.amount?.message && (
            <ErrorText>{errors.recipientInfo?.[index]?.amount?.message}</ErrorText>
          )}
        </InputContainer>
      </FormField>
      <Line />
    </Container>
  );
};
