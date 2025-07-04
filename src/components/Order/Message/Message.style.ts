import styled from '@emotion/styled';

export const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.gray00};
}
`

export const ImageWrapper = styled.div`
    overflow-x: auto;
    white-space: nowrap;
    max-width: 100%;
`

export const GifWrapper = styled.div`
    display: flex;
    justify-content: center;
`

export const GifImage = styled.img`
    display: flex;
    border-radius: 10px;
    height: 280px;
    margin: 15px 0 40px 0;
    box-shadow: 0 10px 8px rgba(0, 0, 0, 0.2);
`
