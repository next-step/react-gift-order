import styled from '@emotion/styled';
import { FiPlus } from 'react-icons/fi';
import { useAuth } from '@/hooks/useAuth';

const Wrapper = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  height: 106px;
  padding: ${({ theme }) => theme.spacing.spacing4} ${({ theme }) => theme.spacing.spacing3};
  background: ${({ theme }) => theme.colors.gray[200]};
  border: 0;
`;

const Box = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.spacing3};
  width: 100%;
  height: 74px;
  padding: ${({ theme }) => theme.spacing.spacing4};
  background: #ffffff;
  border: 0;
  border-radius: 18px;
  cursor: pointer;
`;

const PlusIcon = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.semantic.kakaoYellow};
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: #000;
    width: 24px;
    height: 24px;
  }
`;

const Label = styled.span`
  ${({ theme }) => theme.typography.body1Bold};
  color: #000;
`;

export default function FriendSelect() {
  const { user } = useAuth();
  const nickname = user ? user.email.split('@')[0] : '';

  const labelText = user
    ? `${nickname}님! 선물할 친구를 선택해 주세요.`
    : '선물할 친구를 선택해 주세요.';

  return (
    <Wrapper>
      <Box>
        <PlusIcon>
          <FiPlus />
        </PlusIcon>
        <Label>{labelText}</Label>
      </Box>
    </Wrapper>
  );
}
