import styled from '@emotion/styled';
import { IoArrowBack, IoPersonOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const FixedHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.gray.gray300};
  z-index: ${({ theme }) => theme.zIndex.navigationBar};
`;

const Container = styled.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.spacing2};
  display: flex;
  align-items: center;
  height: ${({ theme }) => theme.spacing.spacing11};
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.semantic.backgroundDefault};
`;

const Icon = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.button`
  font: ${({ theme }) =>
    theme.typography.title1Bold};
`;

const NavigationBar = () => {
  const navigate = useNavigate();

  return (
    <FixedHeader>
      <Container>
        <Icon onClick={() => navigate(-1)}>
          <IoArrowBack size={24} />
        </Icon>
        <Title>선물하기</Title>
        <Icon onClick={() => navigate('/login')}>
          <IoPersonOutline size={24} />
        </Icon>
      </Container>
    </FixedHeader>
  );
};

export default NavigationBar;
