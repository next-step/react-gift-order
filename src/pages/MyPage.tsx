import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { colors, fontSizes, spaces, radii, shadows } from '@/tokens/designTokens';

const Wrap = styled.div`
  padding: ${spaces.lg};
  max-width: 600px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: ${fontSizes.h1};
  color: ${colors.text};
  margin-bottom: ${spaces.lg};
`;

const UserInfo = styled.div`
  background: ${colors.surface};
  border-radius: ${radii.sm};
  padding: ${spaces.lg};
  margin-bottom: ${spaces.lg};
  box-shadow: ${shadows.card};
`;

const UserName = styled.h2`
  font-size: ${fontSizes.h2};
  color: ${colors.text};
  margin-bottom: ${spaces.sm};
`;

const UserEmail = styled.p`
  font-size: ${fontSizes.body};
  color: ${colors.footer};
  margin-bottom: ${spaces.lg};
`;

const LogoutButton = styled.button`
  background: ${colors.error};
  color: white;
  border: none;
  border-radius: ${radii.sm};
  padding: ${spaces.md} ${spaces.lg};
  font-size: ${fontSizes.body};
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: #d32f2f;
  }
`;

export default function MyPage() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    if (!user) {
        return null;
    }

    return (
        <Wrap>
            <Title>마이페이지</Title>
            <UserInfo>
                <UserName>{user.name}님 안녕하세요!</UserName>
                <UserEmail>{user.email}</UserEmail>
                <LogoutButton onClick={handleLogout}>
                    로그아웃
                </LogoutButton>
            </UserInfo>
        </Wrap>
    );
} 