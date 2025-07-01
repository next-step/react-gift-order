import { useNavigate } from 'react-router-dom';
import NavigationBar from '@/components/NavigationBar';
import {Container, Image, Title, Description, Button} from "./styles"
import NotFoundImg from '@/assets/not-found.png';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <NavigationBar />
      <Container>
        <Image src={NotFoundImg} alt="404 image" />
        <Title>잘못된 접근입니다.</Title>
        <Description>찾으시는 페이지가 존재하지 않습니다.</Description>
        <Button onClick={() => navigate('/')}>홈으로</Button>
      </Container>
    </>
  );
};

export default NotFoundPage;
