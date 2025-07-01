import {useNavigate} from 'react-router-dom'
import styled from "@emotion/styled";
import arrowLeftIcon from "../../assets/icons/arrow_left.svg";
import myIcon from "../../assets/icons/my.svg";
const Navbar = () => {
  const navigate = useNavigate();
  const NavbarWrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 ${({ theme }) => theme.spacing.spacing3};
    height: 2.75rem;
    background-color: ${({ theme }) => theme.colors.gray};
  `;
  const Button = styled.button`
    width: ${({ theme }) => theme.spacing.spacing7};
    height: ${({ theme }) => theme.spacing.spacing7};
  `;
  const handleLink =(path:string)=>{
    navigate(path);
  }
  return (
    <NavbarWrapper>
      <div>
        <Button onClick={()=>{navigate(-1)}}>
          <img src={arrowLeftIcon} alt="" />
        </Button>
      </div>
      <div>선물하기</div>
      <div>
        <Button onClick={()=>{handleLink("/login")}}>
          <img src={myIcon} alt="" />
        </Button>
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
