import leftArrow from '@/assets/left-arrow.svg';
import user from '@/assets/user.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import { HeaderWrapper, StyledLink, Title, Icon } from '@/components/Header/Header.styles';
import { PATH } from '@/constants/path';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLoginClick = () => {
    if (sessionStorage.getItem('splitedId')) {
      navigate(PATH.MY, { state: { from:location.pathname }})
    } else {
      navigate(PATH.LOGIN, { state: { from: location.pathname}});
    }
  }

  return (
    <HeaderWrapper>
      <Icon src={leftArrow} alt="left arrow" onClick={()=>navigate(-1)}/>
      <Title><StyledLink to="/">선물하기</StyledLink></Title>
      <Icon src={user} alt="user" onClick={handleLoginClick}/>
    </HeaderWrapper>
  );
}
