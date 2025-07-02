import styled from '@emotion/styled';

export const Container = styled.div`
    min-height: calc(100vh - 60px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.gray00};
    padding: 0 20px;
`;

export const LogoImg = styled.img`
    width: 100px;
    margin-bottom: 32px;
`;

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.spacing3};
    margin-bottom: ${({ theme }) => theme.spacing.spacing6};
    width: 420px;
`;

export const StyledInput = styled.input`
    height: 44px;
    padding: 0 12px;
    font-size: 15px;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray400};
    outline: none;

    &:focus {
        border-color: ${({ theme }) => theme.colors.gray500};
        background-color: ${({ theme }) => theme.colors.gray00};
    }

    &::placeholder {
        color: ${({ theme }) => theme.colors.gray500};
    }
`;

export const Alert = styled.span`
    color: ${({ theme }) => theme.colors.red700};
    font-size: 15px;
`

export const LoginButton = styled.button`
    width: 420px;
    border: none;
    border-radius: 6px;
    background-color: #fee500;${({ theme }) => theme.colors.semantic.brand.kakaoYellow};
    font-weight: bold;
    font-size: 15px;
    cursor: pointer;
    
    text-decoration: none;
    color: ${({ theme }) => theme.colors.gray1000};
    display: block;
    height: 100%;
    line-height: 44px;
  
    &:hover {
      background-color: ${({ theme }) => theme.colors.semantic.brand.kakaoYellowHover};
    }

    &:disabled {
        background-color: ${({ theme }) => theme.colors.gray300};;
        cursor: not-allowed;
        color: ${({ theme }) => theme.colors.gray700};;
    }
`;
