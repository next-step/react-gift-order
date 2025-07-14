import styled from "@emotion/styled";

export const ButtonSpace = styled.div`
    display: flex;
    gap: 12px;
`

export const CancleButton = styled.button`
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.1875rem;
    padding: 12px 24px;
    border-radius: 8px;
    background-color: rgb(238, 239, 241);
    border: none;
    cursor: pointer;
    transition: background-color 200ms, opacity 200ms;
    width: 100%;
    flex: 1 1 0%;
`

export const SubmitButton = styled.button`
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.1875rem;
    width: 100%;
    padding: 12px 24px;
    border-radius: 8px;
    background-color: rgb(254, 229, 0);
    border: none;
    cursor: pointer;
    transition: background-color 200ms, opacity 200ms;
    flex: 3 1 0%;
`

export const Hr1Gray = styled.hr`
    width: 100%;
    height: 1px;
    background-color: rgb(220, 222, 227);
    margin: 8px 0px 16px;
`

export const ReceiverOne = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
`
export const ReceiverTitle = styled.p`
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 1.1875rem;
    color: rgb(42, 48, 56);
    margin: 0px;
    text-align: left;
`

export const XButton = styled.button`
    margin-left: 5px;
    background-color: white;
`