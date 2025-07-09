import useOrderInfo from '@/hooks/useOrderInfo';
import type { inputStyle } from '@/types/inputStyle';
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
  const { setIsFirstTry, sender, error } = useOrderInfo();
  const [senderNameInputFieldStyle, setsenderNameInputFieldStyle] = useState<inputStyle>('idle');
  const [isClicked, setIsClicked] = useState(false);

  const handleInputFieldStyle = useCallback(() => {
    let inputStatus: inputStyle = 'idle';

    if (isClicked) {
      inputStatus = 'isClicked';
    } else {
      if (error.senderNameError) {
        inputStatus = 'error';
      } else {
        inputStatus = 'idle';
      }
    }

    setsenderNameInputFieldStyle(inputStatus);
  }, [isClicked, error]);

  useEffect(() => {
    handleInputFieldStyle();
  }, [handleInputFieldStyle]);

  return (
    <Container>
      <Label>보내는 사람</Label>
      <InputField
        senderNameInputFieldStyle={senderNameInputFieldStyle}
        value={sender.name}
        placeholder={'이름을 입력하세요.'}
        onChange={(e) => {
          sender.setName(e.target.value);
          error.setTargetSenderName('modifying..');
          setIsFirstTry(false);
        }}
        onFocus={() => {
          setIsClicked(true);
        }}
        onBlur={() => {
          setIsClicked(false);
        }}
      />
      {error.senderNameError ? (
        <ErrorText>{error.senderNameError}</ErrorText>
      ) : (
        <Description>* 실제 선물 발송 시 발신자이름으로 반영되는 정보입니다.</Description>
      )}
    </Container>
  );
};
