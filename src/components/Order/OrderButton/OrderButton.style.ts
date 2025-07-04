import styled from '@emotion/styled';

export const PriceButton = styled.button`
    height: 50px;
    max-width: 720px;
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    background-color: ${({ theme }) => theme.semantic.brand.kakaoYellow};
    border: none;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
`
