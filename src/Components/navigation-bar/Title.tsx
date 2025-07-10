import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

const TitleText = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.semantic.text.default};
`;

const Title = () => {
  const navigate = useNavigate();

  return <TitleText onClick={() => navigate('/')}>선물하기</TitleText>;
};

export default Title;
