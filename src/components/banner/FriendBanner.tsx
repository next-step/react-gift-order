/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

type Props = { onClick?: () => void;};

const Container = styled.section`
  width: 100%;
  padding: 20px 15px;
  background-color: ${({ theme }) => theme.colors.backgroundFill};
`;

const Plus = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.backgroundDefault}; 
  
  gap: 12px;
  padding: 16px;
  border-radius: 18px;
  cursor: pointer;
  border: none;

  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const IconWrapper = styled.div`
  color: ${({ theme }) => theme.colors.textDefault};
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 13px;
  background-color: ${({ theme }) => theme.colors.kakaoYellow}; 
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

`;

const Text = styled.p`
  ${({ theme }) => theme.typography.title2Bold};
  color: ${({ theme }) => theme.colors.textDefault};
  margin: 0;
  width: 100%;
  text-align: left;
`;

export const FriendBanner = ({ onClick }: Props) => {
  return (
    <Container>
      <Plus onClick={onClick} aria-label="선물할 친구 선택">
        <IconWrapper>
          <svg 
            width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </IconWrapper>
        <Text>선물할 친구를 선택해 주세요.</Text>
      </Plus>
    </Container>
  );
};

