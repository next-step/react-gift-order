import styled from '@emotion/styled';

export const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.gray00};
    padding-right: 30px;
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


export const TextArea = styled.textarea<{ isActive: boolean }>`
    width: 100%;
    height: 60px;
    border: 1px solid ${({ theme, isActive }) => isActive? theme.colors.red700 : theme.colors.gray500};
    border-radius: 5px;
    font-size: 15px;
    padding: 5px 8px;
    margin: 0 20px ${({ isActive }) => isActive ? '0' : '40px'} 20px;
`

export const ErrorMessage = styled.p`
    margin-left: 20px;
    padding-bottom: 30px;
    color: ${({ theme }) => theme.colors.red700};
`

export const MessageImage = styled.img`
    display: inline-block;
    margin: 5px;
    border-radius: 10px;
    height: 60px;

    &:hover {
        cursor: pointer;
    }
`
