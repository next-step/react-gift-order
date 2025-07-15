import styled from "@emotion/styled"
import theme from "./theme";

export const DefaultDiv = styled.div`
  max-width: 720px;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: rgb(255, 255, 255);
  padding-top: 2.75rem;
`

export const DefaultComponentDiv = styled.div`
  max-width: 720px;
  width: 100%;
  height: 100%;
  background-color: rgb(255, 255, 255);
`

export const SimplePadding20 = styled.div`
  padding: 20px 20px 20px 20px;
`


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
`

export const CentorAlignDiv = styled.div`
  width: 100%;
  padding: 0px 1rem;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
`
export const SideBlankDiv = styled.div`
    width: 100%;
    padding: 0px 1rem;
`

export const SimpleInput = styled.input`
    width: 100%;
    box-sizing: border-box;
    color: rgb(42, 48, 56);
    transition: border-color 200ms;
    border-style: solid;
    min-height: 2.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.375rem;
    padding: 8px 12px;
    border-width: 1px;
    border-radius: 8px;
    border-color: rgb(220, 222, 227);
`

export const SubText = styled.p`
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1rem;
    color: rgb(176, 179, 186);
    margin: 0px;
    text-align: left;
`

export const ErrorText = styled.p`
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1rem;
    color: red;
    margin: 0px;
    text-align: left;
`

export const LowField = styled.div`
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
  gap: 12px;
  width: 100%;
`
export const SubTitle = styled.p`
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.5rem;
  color: rgb(42, 48, 56);
  margin: 0px;
  text-align: left;
`

export const MiniText = styled.p`
  min-width: 3.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.375rem;
  color: rgb(42, 48, 56);
  margin: 0px;
  text-align: left;
`

export const ProductBox = styled.div`
    width: 100%;
    padding: 12px 16px;
    border-radius: 0.5rem;
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(238, 239, 241);
    display: flex;
    gap: 12px;
`

export const ProductImage = styled.img`
    width: 64px;
    height: 64px;
    border-radius: 4px;
    object-fit: cover;
    object-position: center center;
    aspect-ratio: 1 / 1;
    `

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
`