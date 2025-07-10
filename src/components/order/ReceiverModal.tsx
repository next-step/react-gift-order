import styled from "@emotion/styled";
import Spacing from "../Spacing";
import { useEffect, useRef, useState } from "react";
import ReceiverAdder, { type ReceiverAdderHandle } from "./ReceiverAdder";

type Props = {
  initialReceivers: Receiver[];
  onClose: () => void;
  onComplete: (updatedReceivers: Receiver[]) => void;
};

type Receiver = {
  name: string;
  phone: string;
  quantity: number;
};

export default function ReceiverModal({
  initialReceivers,
  onClose,
  onComplete,
}: Props) {
  const [validCount, setValidCount] = useState(0);
  const adderRef = useRef<ReceiverAdderHandle>(null);
  useEffect(() => {
    // 모달이 열릴 때
    document.body.style.overflow = "hidden";
    // 모달이 닫힐 때 원래대로
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <Modal isOpen={true}>
      <ModalBox>
        <ModalInner>
          <ReceiverTitleBox>
            <RecieverTitle>받는 사람</RecieverTitle>
            <Spacing height="4px" />
            <ReceiverText>
              * 최대 10명까지 추가할 수 있어요. * 받는 사람의 전화번호를
              중복으로 입력할 수 없어요.
            </ReceiverText>
            <Spacing height="8px" />
            <AddButton onClick={() => adderRef.current?.appendReceiver()}>추가하기</AddButton>
          </ReceiverTitleBox>
          <AdderWrapper>
            <ReceiverAdder
            ref={adderRef}
            initialReceivers={initialReceivers}
            onComplete={onComplete}
            onClose={onClose}
            onValidCountChange={setValidCount}
          />
          </AdderWrapper>
          <ButtonWrapper>
            <CancelButton type="button" onClick={onClose}>
              취소
            </CancelButton>
            <SubmitButton type="button" onClick={() => adderRef.current?.submitForm()}>
              {validCount}명 완료
            </SubmitButton>
            </ButtonWrapper>
        </ModalInner>
      </ModalBox>
    </Modal>
  );
}

const Modal = styled.div<{ isOpen: boolean }>`
  position: fixed;
  inset: 0px;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  z-index: 1000;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  transition:
    opacity 300ms,
    visibility 300ms;
  padding: 16px;
`;

const ModalBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
`;

const ModalInner = styled.div`
  background: ${({ theme }) => theme.colors.background.default};
  border-radius: 8px;
  max-height: calc(-7.5rem + 100vh);
  max-width: 37.5rem;
  width: 100%;
  height: 100%;
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ReceiverTitleBox = styled.div`
  display: block;
  unicode-bidi: isolate;
`;

const RecieverTitle = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.6875rem;
  color: ${({ theme }) => theme.colors.gray[900]};
  margin: 0px;
  text-align: left;
`;

const ReceiverText = styled.p`
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1rem;
  color: rgb(85, 93, 109);
  margin: 0px;
  text-align: left;
`;

const AddButton = styled.button`
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1rem;
  padding: 8px 16px;
  border-radius: 8px;
  background-color: rgb(238, 239, 241);
  border: none;
  cursor: pointer;
  transition:
    background-color 200ms,
    opacity 200ms;
`;

const AdderWrapper = styled.div`
  flex: 1 1 0%;
  overflow: auto;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

const CancelButton = styled.button`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.1875rem;
  padding: 12px 24px;
  border-radius: 8px;
  background-color: rgb(238, 239, 241);
  border: none;
  cursor: pointer;
  transition:
    background-color 200ms,
    opacity 200ms;
  width: 100%;
  flex: 1 1 0%;
`;

const SubmitButton = styled.button`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.1875rem;
  width: 100%;
  padding: 12px 24px;
  border-radius: 8px;
  background-color: rgb(254, 229, 0);
  border: none;
  cursor: pointer;
  transition:
    background-color 200ms,
    opacity 200ms;
  flex: 3 1 0%;
`;
