
import styled from '@emotion/styled';
import theme from './theme';


export const DefaultDiv = styled.div`
  max-width: 720px;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: rgb(255, 255, 255);
  padding-top: 2.75rem;

`;


export const DefaultComponentDiv = styled.div`
  max-width: 720px;
  width: 100%;
  height: 100%;
  background-color: rgb(255, 255, 255);
`;

export const SimplePadding20 = styled.div`
  padding: 20px 20px 20px 20px;
`;


export const EmptyDiv4h = styled.div`
  width: 100%;
  height: 4px;
  background-color: transparent;
`;

export const EmptyDiv8h = styled.div`
  width: 100%;
  height: 8px;
  background-color: transparent;
`;

export const EmptyDiv12h = styled.div`
  width: 100%;
  height: 12px;
  background-color: transparent;
`;

export const EmptyDiv16h = styled.div`
  width: 100%;
  height: 16px;
  background-color: transparent;
`;
export const EmptyDiv24h = styled.div`
  width: 100%;
  height: 24px;
  background-color: transparent;
`;

export const EmptyDiv32h = styled.div`
  width: 100%;
  height: 32px;
  background-color: transparent;
`;

export const EmptyDiv40h = styled.div`
  width: 100%;
  height: 40px;
  background-color: transparent;
`;

export const EmptyDiv48h = styled.div`
  width: 100%;
  height: 48px;
  background-color: transparent;
`;

export const EmptyDivGray8h = styled.div`
  width: 100%;
  height: 8px;
  background-color: ${theme.colors.gray100};
`;

export const LowSlideDiv = styled.div`
  width: 100%;
  overflow: scroll auto;
  display: flex;
  flex-wrap: nowrap;
  gap: 4px;
`;


export const CentorAlignDiv = styled.div`
  width: 100%;
  padding: 0px 1rem;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;

`;
export const SideBlankDiv = styled.div`
  width: 100%;
  padding: 0px 1rem;
`;

export const SimpleInput = styled.input`
  width: 100%;

    box-sizing: border-box;
    color: rgb(42, 48, 56);
    transition: border-color 200ms;
    border-style: solid;

    border-width: 1px;
    border-radius: 8px;
    border-color: rgb(220, 222, 227);
    padding: 8px 12px;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.1875rem;
`;

export const SubText = styled.p`
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1rem;
  color: rgb(176, 179, 186);
  margin: 0px;
  text-align: left;
`;

export const ErrorText = styled.p`
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1rem;
  color: red;
  margin: 0px;
  text-align: left;
`;

export const LowField = styled.div`
  display: flex
;
    -webkit-box-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
    align-items: center;
    gap: 12px;
    width: 100%;
    padding: 8px 0px;
`;

export const SubTitle = styled.p`
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.5rem;
  color: rgb(42, 48, 56);
  margin: 0px;
  text-align: left;

`;

export const MiniText = styled.p`
    min-width: 3.75rem;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.1875rem;
    color: rgb(42, 48, 56);
    margin: 0px;
    text-align: left;
`;

export const ProductBox = styled.div`
  width: 100%;
  padding: 12px 16px;
  border-radius: 0.5rem;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(238, 239, 241);
  display: flex;
  gap: 12px;
`;

export const ProductImage = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 4px;
  object-fit: cover;
  object-position: center center;
  aspect-ratio: 1 / 1;
`;


export const ProductInfo = styled.div`
  flex: 1;
`;

export const ProductName = styled.p`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.1875rem;
  color: rgb(42, 48, 56);
  margin: 0px;
  text-align: left;
`;


export const Price = styled.p`
  font-size: 14px;
  color: #888;
  span {
    font-weight: 500;
    color: #000;
    margin-left: 4px;
  }
`;

export const OrderButton = styled.button`
  margin-top: 20px;
  width: 100%;
  height: 48px;
  font-size: 16px;
  font-weight: bold;
  background-color: #fbe200;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;

export const Div100p = styled.div`
  width: 100%;
`;

export const ModalDiv = styled.div<{ isOpen?: boolean }>`
  position: fixed;
  inset: 0px;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  z-index: 1000;
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transition:
    opacity 300ms,
    visibility 300ms;
  padding: 2px;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
`;
export const ModalBox = styled.div`
  background: rgb(255, 255, 255);
  border-radius: 8px;
  max-height: calc(-7.5rem + 100vh);
  max-width: 37.5rem;
  width: 100%;
  height: 100%;
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const SimpleButton = styled.button`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.1875rem;
  padding: 8px 16px;
  border-radius: 8px;
  background-color: rgb(238, 239, 241);
  border: none;
  cursor: pointer;
  transition:
    background-color 200ms,
    opacity 200ms;
    &:disabled {
        cursor: not-allowed;
        background-color: rgb(243, 244, 245);
        color: rgb(176, 179, 186);
      }
`;

export const ScrollBox = styled.div`
  flex: 1 1 0%;
  overflow: auto;
`;

export const SimpleForm = styled.form`
  min-height: 0;
  width: 100%;
`;

export const ReceiverEmpty = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  padding: 24px;
  border: 1px solid rgb(238, 239, 241);
  border-radius: 8px;
`;
export const ReceiverList = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid rgb(238, 239, 241);
  border-radius: 8px;
  overflow: hidden;
`;
export const FlatLowField = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  gap: 12px;
  width: 100%;
`;

export const ListTop = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 12px;
  padding: 12px;
  background-color: rgb(247, 248, 249);
  border-bottom: 1px solid rgb(238, 239, 241);
`;

export const ListBody = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 12px;
  padding: 12px;
`;


