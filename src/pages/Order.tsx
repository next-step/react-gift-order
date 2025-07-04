import Navbar from '@/components/navbar/Navbar'
import { PaddingSm } from './../components/padding/Padding';
import  styled from '@emotion/styled';
import { order_cards } from './../mocks/index.ts';

const CardList = styled.div`
  width: 100%;
  overflow: scroll auto;
  display: flex;
  flex-wrap: nowrap;
  gap: 4px;
  
`;
const Card = styled.div`
  width: 82px;
  height: 56px;
  border-radius: 0.5rem;
  overflow: hidden;
  cursor: pointer;
  flex-shrink: 0;
  &:first-of-type{
    margin-left: 16px;
  }
  &:last-of-type{
    
  }

`;
const CardImg = styled.img`
  width: 100%;
  height: 100%;
`;
const Order = () => {
  return (
    <div>
        <Navbar/>
        <PaddingSm/>
        <CardList>
            {order_cards.map((item)=>{
                 return (
                   <Card>
                     <CardImg src={item.imageUrl}></CardImg>
                   </Card>
                 );})}
        </CardList>
      주문하기 페이지 입니다. 
    </div>
  )
}

export default Order
