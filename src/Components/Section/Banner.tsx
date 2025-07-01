import styled from '@emotion/styled';
import { FaPlus } from 'react-icons/fa';

const Wrapper = styled.div`
  padding: 16px;
  background-color: #f5f6f8;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
`;

const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  background-color: ${({ theme }) => theme.color.yellow.yellow600};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
`;

const Text = styled.div`
  color: ${({ theme }) => theme.color.semantic.text.default};
  font-size: 16px;
  font-weight: 500;

  a {
    text-decoration: underline;
    color: ${({ theme }) => theme.color.blue.blue700};
  }
`;

const SelectFriend = () => {

  return (
    <Wrapper>
      <Container>
        <IconWrapper>
          <FaPlus color="black" size={16} />
        </IconWrapper>
        <Text>
          선물할 친구를 선택해 주세요.
        </Text>
      </Container>
    </Wrapper>
  );
};

export default SelectFriend;
