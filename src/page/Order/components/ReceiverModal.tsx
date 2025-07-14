import styled from '@emotion/styled';

import { useFieldArray, useForm } from 'react-hook-form';
import type { OrderInfoValues } from '..';
import ReceiverInfo from './ReceiverInfo';

const ModalBackGround = styled.div`
  position: fixed;
  inset: 0px;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  z-index: 1000;
  opacity: 1;
  visibility: visible;
  transition:
    opacity 300ms,
    visibility 300ms;
  padding: 16px;
`;

const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
`;

const ModalContainer = styled.div`
  background: rgb(255, 255, 255);
  border-radius: 8px;
  max-height: calc(-7.5rem + 100vh);
  max-width: 37.5rem;
  width: 100%;
  height: 100%;
  padding: 16px 24px;
`;

const InfoArea = styled.div`
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  box-sizing: border-box;
`;

const TitleText = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.6875rem;
  color: rgb(42, 48, 56);
  margin: 0px;
  text-align: left;
`;

const DetailInfoText = styled.p`
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1rem;
  color: rgb(85, 93, 109);
  margin: 0px;
  text-align: left;
`;

const ButtonAdd = styled.button`
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

const ButtonArea = styled.div`
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

const ButtonAddDone = styled.button`
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

const ButtonCancel = styled.button`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.1875rem;
  width: 100%;
  padding: 12px 24px;
  border-radius: 8px;
  background-color: rgb(238, 239, 241);
  border: none;
  cursor: pointer;
  transition:
    background-color 200ms,
    opacity 200ms;
  flex: 1 1 0%;
`;

const ReceiverAddedContainer = styled.div`
  flex: 1 1 0%;
  overflow: auto;
  min-height: 0;
`;

interface ReceiverInfoProps {
  onClose: () => void;
  handleChange: (value: OrderInfoValues['receiverInfos']) => void;
  receiverInfos: OrderInfoValues['receiverInfos'];
}
const MAX_LENGTH = 10;

const ReceiverModal = ({ onClose, handleChange, receiverInfos }: ReceiverInfoProps) => {
  const receiverInfosForm = useForm<OrderInfoValues>({
    defaultValues: {
      receiverInfos: receiverInfos,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: receiverInfosForm.control,
    name: 'receiverInfos',
  });

  const onSubmit = async () => {
    const receiverInfos = receiverInfosForm.getValues('receiverInfos');
    handleChange(receiverInfos);
    onClose();
  };

  return (
    <ModalBackGround>
      <ModalWrapper>
        <ModalContainer>
          <form
            onSubmit={receiverInfosForm.handleSubmit(onSubmit)}
            style={{ display: 'flex', flexDirection: 'column', gap: '16px', height: '100%' }}
          >
            <InfoArea>
              <TitleText>받는사람</TitleText>
              <DetailInfoText>
                * 최대 10명까지 추가 할 수 있어요.
                <br />* 받는 사람의 전화번호를 중복으로 입력할 수 없어요.
              </DetailInfoText>

              <ButtonAdd
                type="button"
                onClick={() => {
                  append({ name: '', phoneNumber: '', quantity: 1 });
                }}
                disabled={fields.length >= MAX_LENGTH}
              >
                추가하기
              </ButtonAdd>
            </InfoArea>

            <ReceiverAddedContainer>
              {fields.map((item, index) => (
                <ReceiverInfo
                  key={item.id}
                  index={index}
                  remove={remove}
                  receiverInfosForm={receiverInfosForm}
                />
              ))}
            </ReceiverAddedContainer>

            <ButtonArea>
              <ButtonCancel type="button" onClick={onClose}>
                취소
              </ButtonCancel>
              <ButtonAddDone type="submit">{fields.length}명 완료</ButtonAddDone>
            </ButtonArea>
          </form>
        </ModalContainer>
      </ModalWrapper>
    </ModalBackGround>
  );
};
export default ReceiverModal;
