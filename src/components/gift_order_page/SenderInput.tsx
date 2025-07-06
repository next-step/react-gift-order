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
`;

const InputField = styled.textarea<{ isClicked: boolean }>`
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
  border-color: ${({ theme, isClicked }) =>
    isClicked ? theme.colors.gray800 : theme.colors.gray400};
  border-style: solid;
  border-width: 1px;
`;

const Description = styled.div`
  ${({ theme }) => theme.typography.label2Regular}
  color: ${({ theme }) => theme.colors.gray600};
  margin-top: ${({ theme }) => theme.spacing.spacing1};
  margin-left: ${({ theme }) => theme.spacing.spacing6};
  margin-bottom: ${({ theme }) => theme.spacing.spacing6};
`;

export const SenderInput = () => {
  const { sender } = useOrderInfo();
  const [isClicked, setIsClicked] = useState(false);

  return (
    <Container>
      <Label>보내는 사람</Label>
      <InputField
        isClicked={isClicked}
        value={sender.name}
        placeholder={'이름을 입력하세요.'}
        onChange={(e) => {
          sender.setName(e.target.value);
        }}
        onFocus={() => {
          setIsClicked(true);
        }}
        onBlur={() => {
          setIsClicked(false);
        }}
      />
      <Description>* 실제 선물 발송 시 발신자이름으로 반영되는 정보입니다.</Description>
    </Container>
  );
};
