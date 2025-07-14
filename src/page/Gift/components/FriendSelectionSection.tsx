import { useUserInfo } from '@/contexts/UserInfoContext';
import styled from '@emotion/styled';

const FriendSelectionSection = () => {
  const { userInfo, isLoggedIn } = useUserInfo();
  const nickname = isLoggedIn ? userInfo.email.split('@')[0] + '님!' : '';
  return (
    <Container>
      <Button>
        <IconContainer>
          <Icon />
        </IconContainer>
        <Text>{nickname} 선물할 친구를 선택해 주세요.</Text>
      </Button>
    </Container>
  );
};
export default FriendSelectionSection;

const Container = styled.section`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.spacing4} ${({ theme }) => theme.spacing.spacing3};
  background-color: ${({ theme }) => theme.colors.semantic.background.fill};
`;

const Button = styled.button`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.spacing4} ${({ theme }) => theme.spacing.spacing3};
  background-color: ${({ theme }) => theme.colors.semantic.background.default};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 18px;
`;

const IconContainer = styled.div`
  width: 2.625rem;
  height: 2.625rem;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.colorScale.yellow[600]};

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#2a3038"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-plus"
    aria-hidden="true"
  >
    <path d="M5 12h14" />
    <path d="M12 5v14" />
  </svg>
);

const Text = styled.span`
  font-size: ${({ theme }) => theme.typography.body1Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.body1Regular.fontWeight};
  line-height: ${({ theme }) => theme.typography.body1Regular.lineHeight};
  color: ${({ theme }) => theme.colors.semantic.text.default};
  margin: 0px;
  width: 100%;
  text-align: left;
  margin-left: ${({ theme }) => theme.spacing.spacing1};
`;
