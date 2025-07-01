import styled from '@emotion/styled';

export const Wrapper = styled.button<{ isActive: boolean }>`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    padding: 10px 0;
    background-color: #fff;
    border: none;
    border-radius: 16px;
    cursor: pointer;

    font-size: 13px;
    font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};

    div {
        font-size: 14px;
        width: 44px;
        height: 44px;
        border-radius: 16px;
        padding: 20px;
        background-color: ${({ isActive, theme }) =>
  isActive ? theme.colors.blue700 : theme.colors.blue100};
        color: ${({ isActive, theme }) =>
  isActive ? theme.colors.gray00 : theme.colors.blue400};
        
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    p {
        color: ${({ isActive }) => (isActive ? '#217cf9' : '#c9c9c9')};
    }

    transition: background-color 0.2s ease, color 0.2s ease;
`;
