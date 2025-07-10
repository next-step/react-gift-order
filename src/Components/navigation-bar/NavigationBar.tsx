import Login from '@/components/navigation-bar/LoginIcon';
import Back from '@/components/navigation-bar/BackIcon';
import Title from '@/components/navigation-bar/Title';
import styled from '@emotion/styled';

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 50px;

  background-color: ${({ theme }) => theme.color.semantic.background.default};
  border-bottom: 1px solid ${({ theme }) => theme.color.semantic.border.default};
  cursor: pointer;
`;

const NavigationBar = () => {
  return (
    <Container>
      <Back />
      <Title />
      <Login />
    </Container>
  );
};

export default NavigationBar;
