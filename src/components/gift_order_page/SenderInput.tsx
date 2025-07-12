import type { InputStyle } from '@/types/inputStyle';
import type { FormValues } from '@/types/orderFormType';
import styled from '@emotion/styled';
import { useCallback, useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';

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
`;

const InputField = styled.textarea<{ senderNameInputFieldStyle: string }>`
  all: unset;
  display: flex;
  width: calc(100% - 2rem);
  height: 2.8rem;
  box-sizing: border-box;
  margin-top: ${({ theme }) => theme.spacing.spacing3};
  margin-left: 1rem;
  padding-top: 0.8rem;
  padding-left: 0.76rem;
  font-size: 1rem;
  white-space: pre;
  border-radius: 0.5rem;
  border-color: ${({ theme, senderNameInputFieldStyle }) => {
    if (senderNameInputFieldStyle === 'idle') {
      return theme.colors.gray400;
    } else if (senderNameInputFieldStyle === 'isClicked') {
      return theme.colors.gray800;
    } else {
      return theme.colors.red700;
    }
  }};
  border-style: solid;
  border-width: 1px;
  transition: border-color 0.3s;
`;

const Description = styled.div`
  ${({ theme }) => theme.typography.label2Regular}
  color: ${({ theme }) => theme.colors.gray600};
  margin-top: ${({ theme }) => theme.spacing.spacing1};
  margin-left: ${({ theme }) => theme.spacing.spacing6};
  margin-bottom: ${({ theme }) => theme.spacing.spacing6};
`;

const ErrorText = styled.div`
  ${({ theme }) => theme.typography.label2Regular}
  margin-top: ${({ theme }) => theme.spacing.spacing1};
  margin-left: ${({ theme }) => theme.spacing.spacing6};
  margin-bottom: ${({ theme }) => theme.spacing.spacing6};
  color: ${({ theme }) => theme.colors.red700};
`;

export const SenderInput = () => {
  const [senderNameInputFieldStyle, setsenderNameInputFieldStyle] = useState<InputStyle>('idle');
  const [isClicked, setIsClicked] = useState(false);
  const {
    register,
    trigger,
    formState: { errors },
  } = useFormContext<FormValues>();

  const handleInputFieldStyle = useCallback(() => {
    let inputStatus: InputStyle = 'idle';

    if (isClicked) {
      inputStatus = 'isClicked';
    } else {
      if (errors.senderName?.message) {
        inputStatus = 'error';
      } else {
        inputStatus = 'idle';
      }
    }

    setsenderNameInputFieldStyle(inputStatus);
  }, [isClicked, errors.senderName]);

  useEffect(() => {
    handleInputFieldStyle();
  }, [handleInputFieldStyle]);

  return (
    <Container>
      <Label>보내는 사람</Label>
      <InputField
        {...register('senderName', {
          required: '이름을 입력해주세요.',
          onChange: async () => await trigger('senderName'),
        })}
        senderNameInputFieldStyle={senderNameInputFieldStyle}
        placeholder={'이름을 입력하세요.'}
        onFocus={() => setIsClicked(true)}
        onBlur={() => setIsClicked(false)}
      />
      {errors.senderName?.message ? (
        <ErrorText>{errors.senderName?.message}</ErrorText>
      ) : (
        <Description>* 실제 선물 발송 시 발신자이름으로 반영되는 정보입니다.</Description>
      )}
    </Container>
  );
};
