import styled from '@emotion/styled';

export const SenderWrapper = styled.div`
    margin: 10px 0;
    padding: 15px 15px 20px 15px;
    background-color: ${({ theme }) => theme.colors.gray00};
`

export const Title = styled.p`
    font-weight: bold;
    font-size: 17px;
    margin-bottom: 15px;
`

export const SenderName = styled.input`
    width: 100%;
    height: 45px;
    border: 1px solid ${({ theme }) => theme.colors.gray500};
    border-radius: 5px;
    font-size: 17px;
    padding: 14px;
    margin-bottom: 5px;
    
    ::placeholder {
        color: ${({ theme }) => theme.colors.gray500};
    }
`

export const SendeInfo = styled.p`
    color: ${({ theme }) => theme.colors.gray500};
    font-size: 13px;
`