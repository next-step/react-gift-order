import { DefaultDiv } from '@/styles/Common.styled';
import { useSearchParams } from 'react-router-dom';

const Order = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  return <DefaultDiv>
    {id} 입니다.
  </DefaultDiv>;
};

export default Order;
