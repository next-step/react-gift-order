import styled from '@emotion/styled';
import { FiPlus } from 'react-icons/fi';

const STORAGE_KEY = "userInfo";

export default function Friends() {
  const userInfo = sessionStorage.getItem(STORAGE_KEY);
  const userId = userInfo
    ? JSON.parse(userInfo).email.split("@")[0]
    : null;

  return (
    <Wrapper>
        <Button>
          <IconWrapper>
            <FiPlus size={20} />
          </IconWrapper>
          <Text>
            {userId ? `${userId}님! 선물할 친구를 선택해 주세요.`
            : '선물할 친구를 선택해 주세요.'}
          </Text>
        </Button>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background.fill};
  padding: 16px 12px;
  display: block;
`;


const Button = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background.default};
  display: flex;
  align-items: center;
  gap: 12px;
  border: none;
  border-radius: 20px; 
  padding: 20px;
  cursor: pointer;
`;

const IconWrapper = styled.div`
  width: 42px;
  height: 42px;
  background-color: ${({ theme }) => theme.colors.kakao.yellow.default};
  border-radius: 16px; 
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const Text = styled.p`
  ${({ theme }) => theme.typography.body1Bold};
  color: ${({ theme }) => theme.colors.text.default};
`;
