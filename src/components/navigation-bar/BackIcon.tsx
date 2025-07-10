import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import backIcon from '@/assets/icons/back.png';

const Back = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${backIcon});
  background-size: contain;
  background-repeat: no-repeat;
`;

const BackIcon = () => {
  const navigate = useNavigate();

  return <Back onClick={() => navigate(-1)} />;
};

export default BackIcon;
