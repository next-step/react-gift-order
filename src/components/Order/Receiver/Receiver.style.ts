import styled from '@emotion/styled';

export const ReceiverWrapper = styled.div`
    margin: 10px 0;
    padding: 10px 15px 20px 15px;
    background-color: ${({ theme }) => theme.colors.gray00};
`

export const TitleButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
`

export const RecevierTitle = styled.p`
    font-weight: bold;
    font-size: 17px;
`

export const ReceiverAddBtn = styled.button`
    background-color: ${({ theme }) => theme.colors.gray200};;
    width: 55px;
    height: 35px;
    border: none;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
        background-color: ${({ theme }) => theme.colors.gray500};;
    }
`

export const ReceiverInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 1px solid ${({ theme }) => theme.colors.gray500};
    border-radius: 5px;
    padding: 40px;
    
    p {
        color: ${({ theme }) => theme.colors.gray500};;
    }
`

export const BlurContainer = styled.div`
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 1;
`
export const BaseContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    width: 90vw;
    max-width: 600px;
    height: 90vh;
    max-height: 650px;
    
    background-color: white;
    z-index: 2;
    padding: 20px 30px;
    border-radius: 10px;
`

export const ModalTitle = styled.h3`
    margin-bottom: 10px;
`

export const ModalText = styled.p`
    color: ${({ theme }) => theme.colors.gray800};;
    font-size: 13px;
    margin-bottom: 5px;
`

export const ModalAddBtn = styled.button`
    background-color: ${({ theme }) => theme.colors.gray300};;
    border: none;
    width: 80px;
    height: 34px;
    border-radius: 5px;
    cursor: pointer;
`

export const ModalBottomBtn = styled.div`
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    gap: 10px;
    width: 100%;
`

export const ModalCancleBtn = styled.button`
    width: 30%;
    height: 6vh;
    border: none;
    border-radius: 10px;
    cursor: pointer;
`

export const ModalFinishBtn = styled.button`
    width: 60%;
    border: none;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.yellow500};
    cursor: pointer;
`
export const ReceiverForm = styled.form`
    margin: 10px 0;
    width: 100%;
    max-height: 55vh;
    overflow: auto;
`

export const InfoList = styled.div<{ isLast?: boolean }>`
    margin: 10px 0;
    border-bottom: ${({ isLast, theme }) =>
            isLast ? 'none' : `1px solid ${theme.colors.gray300}`};
`;

export const ReceiverIndex = styled.div`
    margin: 5px 0;
    
    span {
        font-size: 15px;
        font-weight: bold;
        margin-right: 5px;
    }
    
    button {
        background: none;
        border: none;
    }
`

export const ReceiverItem = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin: 10px 0;
    
    span {
        width: 100px;
    }
`

export const ItemInput = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    
    p {
        padding: 5px 8px;
        font-size: 13px;
        color: ${({ theme }) => theme.colors.red700};
    }
`
export const Input = styled.input<{ isActive: boolean }>`
    width: 100%;
    height: 100%;
    padding: 13px;
    border: 1px solid ${({ isActive, theme }) =>
            isActive ? theme.colors.red500 : theme.colors.gray300};
    border-radius: 10px;

    &::placeholder {
        color: ${({ theme }) => theme.colors.gray500};
    }
`

export const ReceiverTable = styled.table`
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.gray300};
    border-radius: 10px;
    
    thead {
        background-color: ${({ theme }) => theme.colors.gray200};
        border-radius: 10px;
        border-bottom: 1px solid gray;
        
        th {
            text-align: left;
            padding: 15px 0 15px 10px;
        }
    }
    
    tbody {
        border-bottom: 1px solid gray;
        
        tr {
            border-bottom: 1px solid gray;
        }
        
        td {
            text-align: left;
            padding: 15px 0 15px 10px;
        }
    }
`
