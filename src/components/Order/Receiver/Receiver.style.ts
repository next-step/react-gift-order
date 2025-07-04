import styled from '@emotion/styled';

export const ReceiverWrapper = styled.div`
    margin: 10px 0;
    padding: 15px 15px 20px 15px;
    background-color: ${({ theme }) => theme.colors.gray00};
`

export const RecevierTitle = styled.p`
    font-weight: bold;
    font-size: 17px;
    margin-bottom: 15px;
`

export const ReceiverNameInput = styled.input<{ isNameActive: boolean }>`
    height: 45px;
    flex: 1;
    border: 1px solid ${({ theme, isNameActive }) => isNameActive? theme.colors.red700 : theme.colors.gray500};
    border-radius: 5px;
    font-size: 17px;
    padding: 14px;
    margin-bottom: 5px;

    ::placeholder {
        color: ${({ theme }) => theme.colors.gray500};
    }
`

export const ReceiverPhoneInput = styled.input<{ isPhoneActive: boolean, isFormActive: boolean }>`
    height: 45px;
    flex: 1;
    border: 1px solid ${({ theme, isPhoneActive, isFormActive }) => isPhoneActive || isFormActive ? theme.colors.red700 : theme.colors.gray500};
    border-radius: 5px;
    font-size: 17px;
    padding: 14px;
    margin-bottom: 5px;

    ::placeholder {
        color: ${({ theme }) => theme.colors.gray500};
    }
`
export const ReceiverInput = styled.input`
    height: 45px;
    flex: 1;
    border: 1px solid ${({ theme }) => theme.colors.gray500};
    border-radius: 5px;
    font-size: 17px;
    padding: 14px;
    margin-bottom: 5px;
`
