import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import Layout from '@/Components/Layout/Layout';

const Button = styled.button`
  margin-top: 2rem;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.color.yellow.yellow600};
  color: black;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div>NotFound</div>
      <div>페이지를 찾을 수 없습니다.</div>
      <div>잘못된 경로입니다.</div>

      <Button onClick={() => navigate('/')}>홈으로 돌아가기</Button>
    </Layout>
  );
};

export default NotFound;
