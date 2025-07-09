import Spacing from "@/components/Spacing";
import styled from "@emotion/styled";
import ErrorMessage from "./ErrorMessage";

type Props = {
  name: string;
  onChangeName: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  nameError: boolean;

  phone: string;
  onChangePhone: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  phoneError: boolean;

  quantity: number;
  onChangeQuantity: (value: number) => void;
  quantityError: boolean;
};

export default function ReceiverForm({
  name,
  onChangeName,
  nameError,
  phone,
  onChangePhone,
  phoneError,
  quantity,
  onChangeQuantity,
  quantityError,
}: Props) {
  return (
    <ReceiverBox>
      <Spacing height="12px" />
      <Receiver>받는 사람</Receiver>
      <Spacing height="12px" />

      <ReceiverInputBox>
        <ReceiverInputLabel>이름</ReceiverInputLabel>
        <RecevierInputWrapper>
          <ReceiverInput
            placeholder="이름을 입력하세요."
            value={name}
            onChange={onChangeName}
            error={nameError}
          />
          {nameError && <ErrorMessage>이름을 입력해주세요.</ErrorMessage>}
        </RecevierInputWrapper>
      </ReceiverInputBox>

      <Spacing height="8px" />

      <ReceiverInputBox>
        <ReceiverInputLabel>전화번호</ReceiverInputLabel>
        <RecevierInputWrapper>
          <ReceiverInput
            placeholder="전화번호를 입력하세요."
            value={phone}
            onChange={onChangePhone}
            error={phoneError}
          />
          {phoneError && <ErrorMessage>올바른 전화번호 형식이 아닙니다.</ErrorMessage>}
        </RecevierInputWrapper>
      </ReceiverInputBox>

      <Spacing height="8px" />

      <ReceiverInputBox>
        <ReceiverInputLabel>수량</ReceiverInputLabel>
        <RecevierInputWrapper>
          <ReceiverNumberInput
            type="number"
            value={quantity}
            onChange={(e) => onChangeQuantity(Number(e.target.value))}
            error={quantityError}
          />
          {quantityError && <ErrorMessage>구매 수량은 1개 이상이어야 합니다.</ErrorMessage>}
        </RecevierInputWrapper>
      </ReceiverInputBox>

      <Spacing height="24px" />
    </ReceiverBox>
  );
}


const ReceiverBox = styled.div`
  width: 100%;
  padding: 0px 1rem;
`;

const Receiver = styled.p`
  ${({ theme }) => theme.typography.title2Bold};
  color: ${({ theme }) => theme.colors.gray[900]};
  margin: 0px;
  text-align: left;
`;

const ReceiverInputBox = styled.div`
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
  gap: 12px;
  width: 100%;
`;

const ReceiverInputLabel = styled.div`
  ${({ theme }) => theme.typography.body1Regular};
  color: ${({ theme }) => theme.colors.gray[900]};
  margin: 0px;
  min-width: 3.75rem;
  text-align: left;
`;

const RecevierInputWrapper = styled.div`
  width: 100%;
`;

const ReceiverInput = styled.input< { error?: boolean} >`
  width: 100%;
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.gray[900]};
  transition: border-color 200ms;
  border-style: solid;
  min-height: 2.75rem;
  ${({ theme }) => theme.typography.body1Regular};
  padding: 8px 12px;
  border-width: 1px;
  border-radius: 8px;
  border-color: ${({ theme, error }) => 
    error? theme.colors.state.critical 
  : theme.colors.gray[400]};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.gray[700]};
  }
`;

const ReceiverNumberInput = styled.input< { error?: boolean} >`
  width: 100%;
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.gray[900]};
  transition: border-color 200ms;
  border-style: solid;
  min-height: 2.75rem;
  ${({ theme }) => theme.typography.body1Regular};
  padding: 8px 12px;
  border-width: 1px;
  border-radius: 8px;
  border-color: ${({ theme, error }) => 
    error? theme.colors.state.critical 
  : theme.colors.gray[400]};
  appearance: textfield;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    opacity: 1;
    margin: 0;
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.gray[700]};
  }
`;
