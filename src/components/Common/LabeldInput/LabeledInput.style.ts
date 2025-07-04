import styled from '@emotion/styled';

export const Row = styled.div`
    display: flex;
    align-items: center;
`

export const RecevierSpan = styled.span`
    width: 80px;
    font-size: 16px;
`

export const Column = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`

export const ReceiverWarn = styled.div`
    font-size: 12px;
    margin: 0 20px 5px 5px;
    color: ${({ theme }) => theme.colors.red700};
`
