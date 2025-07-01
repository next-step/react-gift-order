import styled from '@emotion/styled';

export const ThemeCard = styled.div`
    flex: 0 0 auto;
    width: 104px;
    text-align: center;
    cursor: pointer;

    img {
        width: 100%;
        border-radius: 12px;
        object-fit: cover;
        aspect-ratio: 1;
        transition: transform 0.2s ease;
    }
  
    p {
        margin-top: 6px;
        font-size: 13px;
        color: ${({ theme }) => theme.colors.gray700};
        white-space: nowrap;
    }
  
    &:hover img { 
        transform: scale(1);
    }
`;
