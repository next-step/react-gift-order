import styled from "@emotion/styled";
import plusIcon from "../../assets/icons/plus.svg";
const Wrapper = styled.section`
  width: 100%;
  border: none;
  height: auto;
  padding: ${({ theme }) => theme.spacing.spacing4}  ${({ theme }) => theme.spacing.spacing3};
  background-color: ${({ theme }) => theme.colors.gray.gray200};
`;

const Button = styled.button`
display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.spacing3};
    border-radius: 18px;
background-color: ${({ theme }) => theme.colors.gray.gray00};
  width: 100%;
  padding: ${({ theme }) => theme.spacing.spacing4};
  border: none;
`;
const PlusBox = styled.div`
  width: 2.625rem;
  height: 2.625rem;
  border-radius: 16px;
  background-color:${({ theme }) => theme.colors.yellow.yellow600};
  display: flex;
    justify-content: center;
    align-items: center;

`;
const ButtonText = styled.p`
  ${({ theme }) => theme.typography.subtitle1Bold};
  color: ${({ theme }) => theme.colors.gray.gray900};
  width: 100%;
  text-align: left;
`;

const FriendsBox = () => {
  return (
    <Wrapper>
      <Button name="선물할 친구를 선택해 주세요.">
        <PlusBox>
         <img src={plusIcon} alt="" />
        </PlusBox>
        <ButtonText>선물할 친구를 선택해 주세요.</ButtonText>
      </Button>
    </Wrapper>
  );
};

export default FriendsBox;
