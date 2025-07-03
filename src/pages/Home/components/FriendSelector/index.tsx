import * as S from './styles';

const FriendSelector = () => {
  return (
    <S.Section>
      <S.Button>
        <S.IconContainer>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2a3038" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14"></path>
            <path d="M12 5v14"></path>
          </svg>
        </S.IconContainer>
        <S.Text>선물할 친구를 선택해 주세요.</S.Text>
      </S.Button>
    </S.Section>
  );
};

export default FriendSelector; 