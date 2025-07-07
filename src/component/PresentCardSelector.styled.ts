import styled from "@emotion/styled";

export const CardMiniImg = styled.img<{ selected: boolean }>`
    flex: 0 0 auto;
    width: 82px;
    height: 56px;
    border-radius: 0.5rem;
    overflow: hidden;
    border: ${({ selected }) => (selected ? '3px solid rgb(42, 48, 56)' : '3px solid transparent')};
    cursor: pointer;
`
export const CardBiGiImgSection = styled.img<{ selected: boolean }>`
    flex: 0 0 auto;
    width: 82px;
    height: 56px;
    border-radius: 0.5rem;
    overflow: hidden;
    border: ${({ selected }) => (selected ? '3px solid rgb(42, 48, 56)' : '3px solid transparent')};
    cursor: pointer;
`
export const CardBiGImgDiv = styled.div`
    width: 100%;
    max-width: 360px;
    height: 240px;
    overflow: hidden;
    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 39px 20px -30px;
`

export const CardBiGImg = styled.img`
    width: 100%;
    height: 100%;
`
export const CardMessage = styled.textarea`
    width: 100%;
    box-sizing: border-box;
    color: rgb(42, 48, 56);
    transition: border-color 200ms;
    border-style: solid;
    min-height: 2.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.375rem;
    padding: 8px 12px;
    border-width: 1px;
    border-radius: 8px;
    border-color: rgb(220, 222, 227);
`
 