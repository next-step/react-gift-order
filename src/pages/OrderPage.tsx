import styled from '@emotion/styled';
import MobileLayout from '@/layouts/MobileLayout';
import NavBar from '@/components/NavBar';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
  background-color: #fff;
`;

export default function OrderPage() {
  return (
    <MobileLayout>
      <Wrapper>
        <NavBar />
        주문하기
      </Wrapper>
    </MobileLayout>
  );
}
