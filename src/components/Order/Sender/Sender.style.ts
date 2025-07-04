import styled from '@emotion/styled';

export const SenderWrapper = styled.div`
    margin: 10px 0;
    padding: 15px 15px 20px 15px;
    background-color: ${({ theme }) => theme.colors.gray00};
    
    div {
        font-size: 12px;
        margin: 10px 20px 5px 5px;
        color: ${({ theme }) => theme.colors.red700};
    }
`

export const Title = styled.p`
    font-weight: bold;
    font-size: 17px;
    margin-bottom: 15px;
`

export const SenderName = styled.input<{ isActive: boolean}>`
    width: 100%;
    height: 45px;
    border: 1px solid ${({ theme, isActive }) => isActive? theme.colors.red700 : theme.colors.gray500};
    border-radius: 5px;
    font-size: 17px;
    padding: 14px;
    margin: 0 5px ${({ isActive }) => isActive ? '0' : '10px'} 5px;
    
    ::placeholder {
        color: ${({ theme }) => theme.colors.gray500};
    }
`

export const SendeInfo = styled.p`
    color: ${({ theme }) => theme.colors.gray500};
    font-size: 13px;
`
