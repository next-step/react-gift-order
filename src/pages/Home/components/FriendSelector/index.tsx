import { useAuth } from '@/contexts/AuthContext';
import * as S from './styles';

const FriendSelector = () => {
  const { userInfo } = useAuth();

  const getUserName = (email: string) => {
    return email.split('@')[0];
  };

  const getMessage = () => {
    if (userInfo?.email) {
      const userName = getUserName(userInfo.email);
      return `${userName}님! 선물할 친구를 선택해 주세요.`;
    }
    return '선물할 친구를 선택해 주세요.';
  };

  return (
    <S.Section>
      <S.Button>
        <S.IconContainer>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2a3038" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14"></path>
            <path d="M12 5v14"></path>
          </svg>
        </S.IconContainer>
        <S.Text>{getMessage()}</S.Text>
      </S.Button>
    </S.Section>
  );
};

export default FriendSelector; 