import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalBox = styled.div`
  ${({ theme }) => `
    background: ${theme.color.background.default};
    color: ${theme.color.text.default};
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  `}
  border-radius: 12px;
  padding: 24px;
  min-width: 320px;
  max-width: 90%;
`;

export const Title = styled.h2`
  ${({ theme }) => `
    margin-bottom: 16px;
    font-size: 20px;
    font-weight: bold;
    color: ${theme.color.text.default};
  `}
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  ${({ theme }) => `
    font-size: 14px;
    margin-bottom: 4px;
    color: ${theme.color.text.default};
  `}
`;

export const Input = styled.input`
  ${({ theme }) => `
    padding: 8px 12px;
    font-size: 14px;
    border: 1px solid ${theme.color.border.default};
    border-radius: 8px;
    background-color: ${theme.color.background.fill};
    color: ${theme.color.text.default};

    &::placeholder {
      color: ${theme.color.text.placeholder};
    }

    &:focus {
      outline: none;
      border-color: ${theme.color.gray600};
    }

    &:disabled {
      background-color: ${theme.color.background.disabled};
      color: ${theme.color.text.disabled};
    }
  `}
`;

export const ErrorMessage = styled.p`
  ${({ theme }) => `
    font-size: 12px;
    color: ${theme.color.state.critical};
    margin-top: 4px;
  `}
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 12px;
`;

export const Button = styled.button<{ variant?: 'primary' | 'secondary' }>`
  ${({ theme, variant = 'primary' }) => {
    const styles =
      variant === 'primary'
        ? `
      background-color: ${theme.color.kakaoYellow};
      color: ${theme.color.kakaoBrown};

      &:hover {
        background-color: ${theme.color.kakaoYellowHover};
      }

      &:active {
        background-color: ${theme.color.kakaoYellowPressed};
      }
    `
        : `
      background-color: ${theme.color.gray200};
      color: ${theme.color.gray800};

      &:hover {
        background-color: ${theme.color.gray300};
      }

      &:active {
        background-color: ${theme.color.gray400};
      }
    `;

    return `
      padding: 8px 16px;
      font-size: 14px;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: background-color 0.2s;
      ${styles}

      &:disabled {
        background-color: ${theme.color.background.disabled};
        color: ${theme.color.text.disabled};
        cursor: not-allowed;
        opacity: 0.6;
      }
    `;
  }}
`;
