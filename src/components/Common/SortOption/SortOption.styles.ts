import styled from '@emotion/styled';

export const Span = styled.span<{ isActive: boolean }>`
    flex: 1;
    font-size: 14px;
    font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};
    color: ${({ isActive }) => (isActive ? '#217cf9' : '#a0bfe9')};
    cursor: pointer;
    transition: color 0.2s ease;
    
    display: flex;
    justify-content: center;
    align-items: center;
`;
