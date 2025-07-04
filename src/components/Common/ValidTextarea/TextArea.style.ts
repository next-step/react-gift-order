import styled from '@emotion/styled';

export const TextArea = styled.div<{ isActive: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    textarea {
        width: 700px;
        height: 60px;
        border: 1px solid ${({ theme, isActive }) => isActive? theme.colors.red700 : theme.colors.gray500};
        border-radius: 5px;
        font-size: 15px;
        padding: 5px 8px;
        margin: 0 20px ${({ isActive }) => isActive ? '0' : '40px'} 20px;
    }
    
    div {
        font-size: 12px;
        margin: 10px 20px 30px 20px;
        color: ${({ theme }) => theme.colors.red700};
    }
`
