import styled from '@emotion/styled';
import { useAuth } from '@/contexts/AuthContext';

const Box = styled.div`
  height: 43px;
  margin: 60px 10px 0;
  padding: 15px;
  border-radius: 20px;
  background-color: white;
  display: flex;
  align-items: center;

  font-weight: bold;
  font-size: 17px;

  cursor: pointer;
`;

const Plus = styled.span`
  background-color: #ffe713;
  height: 30px;
  width: 12px;
  border-radius: 20px;

  font-size: 20px;
  font-weight: lighter;
  margin-right: 12px;
  padding: 10px 20px;

  display: flex;
  align-items: center;
`;

function FriendSelectBox() {
  const { user } = useAuth();
  return (
    <Box>
      <Plus>+</Plus>
      {user && user.name ? `${user.name}님! ` : ''}선물할 친구를 선택해 주세요.
    </Box>
  );
}

export default FriendSelectBox;
