import { useNavigate } from 'react-router-dom';
import * as S from './styles';

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <S.Main>
      <S.NotFoundImage 
        src="/not found.png" 
        alt="not found" 
      /> 
      <S.Spacer1 />      
      <S.Title>잘못된 접근입니다.</S.Title>     
      <S.Spacer2 />     
      <S.Description>찾으시는 페이지가 존재하지 않습니다.</S.Description>    
      <S.Spacer3 /> 
      <S.HomeButton onClick={handleGoHome}>
        홈으로
      </S.HomeButton>
    </S.Main>
  );
};

export default NotFound; 