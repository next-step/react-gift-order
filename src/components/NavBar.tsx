import styled from '@emotion/styled'
import { useNavigate } from 'react-router-dom'

const NavBarWrapper = styled.div`
  width: auto;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.gray[0]};

  display: flex;
  justify-content: center;
  align-items: center;

  position: sticky;
  top: 0px;
`

const NavBarBackBtn = styled.button`
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.gray[0]};
  border: none;
  cursor: pointer;

  position:absolute;
  top:0px;
  left:0px;
  
  &::before {
    content: '<';
    font-size: 34px;
    font-weight: 100;
    color: ${({ theme }) => theme.colors.gray[1000]};
  }
`

const NavBarTitle = styled.h1`
  font-size: ${({ theme }) => theme.typography['title1Bold'].fontSize};
  font-weight: ${({ theme }) => theme.typography['title1Bold'].fontWeight};
  line-height: ${({ theme }) => theme.typography['title1Bold'].lineHeight};
  cursor: pointer;
`

const NavBarLoginBtn = styled.button`
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.gray[0]};
  border: none;
  cursor: pointer;

  position:absolute;
  top:0px;
  right:0px;
  
  &::before {
    content: '👤';
    font-size: 34px;
    font-weight: 100;
    color: ${({ theme }) => theme.colors.gray[1000]};
  }
`

function NavBar() {
    const navigate = useNavigate();
    return (
        <NavBarWrapper>
            <NavBarBackBtn onClick={() => navigate('/')}></NavBarBackBtn>
            <NavBarTitle>선물하기</NavBarTitle>
            <NavBarLoginBtn onClick={() => navigate('/login')}></NavBarLoginBtn>
        </NavBarWrapper>
    )
}

export default NavBar;