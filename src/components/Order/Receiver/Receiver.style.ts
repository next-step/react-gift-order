import styled from '@emotion/styled';

export const ReceiverWrapper = styled.div`
    margin: 10px 0;
    padding: 15px 15px 20px 15px;
    background-color: ${({ theme }) => theme.colors.gray00};
`

export const RecevierTitle = styled.p`
    font-weight: bold;
    font-size: 17px;
    margin-bottom: 15px;
`
export const Row = styled.div`
    display: flex;align-items: center;
`

export const ReceiverInput = styled.input`
    height: 45px;
    flex: 1;
    border: 1px solid ${({ theme }) => theme.colors.gray500};
    border-radius: 5px;
    font-size: 17px;
    padding: 14px;
    margin-bottom: 5px;

    ::placeholder {
        color: ${({ theme }) => theme.colors.gray500};
    }
`

export const RecevierSpan = styled.span`
    width: 80px;
    font-size: 16px;
`
