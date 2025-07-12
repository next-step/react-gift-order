import styled from '@emotion/styled';
import { Modal } from '../Modal';
import { useEffect, useState } from 'react';
import { RecipientInput } from './RecipientInput';
import { CompleteButton } from './CompleteButton';
import { useFieldArray, useFormContext } from 'react-hook-form';
import type { FormValues } from '@/types/orderFormType';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: auto;
  background-color: white;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  margin-top: 0.9rem;
  margin-bottom: 0.2rem;
`;

const Label = styled.div`
  ${({ theme }) => theme.typography.title2Bold};
  margin-left: 1rem;
`;

const AddButton = styled.button`
  all: unset;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.5rem;
  height: 2.2rem;
  margin-right: 1rem;
  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.colors.gray300};
  font-size: 0.9rem;
`;

const EmptyTable = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(100% - 2rem);
  height: 5.4rem;
  margin-top: ${({ theme }) => theme.spacing.spacing3};
  margin-bottom: ${({ theme }) => theme.spacing.spacing6};
  margin-left: 1rem;
  box-sizing: border-box;
  border-radius: 0.5rem;
  border-color: ${({ theme }) => theme.colors.gray300};
  border-style: solid;
  border-width: 1px;
`;

const NoticeText = styled.div`
  ${({ theme }) => theme.typography.body2Regular};
  color: ${({ theme }) => theme.colors.gray600};
`;

const Table = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  width: calc(100% - 2rem);
  height: auto;
  margin-top: ${({ theme }) => theme.spacing.spacing3};
  margin-bottom: ${({ theme }) => theme.spacing.spacing6};
  margin-left: 1rem;
  box-sizing: border-box;
  border-radius: 0.5rem;
  border-color: ${({ theme }) => theme.colors.gray300};
  border-style: solid;
  border-width: 1px;
  overflow: hidden;
`;

const Attribute = styled.div<{ isLabel: boolean }>`
  ${({ theme, isLabel }) =>
    isLabel ? theme.typography.label1Bold : theme.typography.label1Regular};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  box-sizing: border-box;
  width: 100%;
  height: 2.7rem;
  padding-left: 1rem;
  background-color: ${({ theme, isLabel }) => (isLabel ? theme.colors.gray100 : 'white')};
`;

const ModalBody = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 37.5rem;
  height: 57.5rem;
  background-color: white;
  border-radius: 0.5rem;
  overflow: hidden;
`;

const ModalLabel = styled.div`
  ${({ theme }) => theme.typography.title1Bold};
  margin-top: 1rem;
  margin-left: 1.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.spacing1};
`;

const Description = styled.div`
  ${({ theme }) => theme.typography.label2Regular}
  color: ${({ theme }) => theme.colors.gray800};
  margin-left: ${({ theme }) => theme.spacing.spacing6};
`;

const ModalAddButton = styled.button`
  all: unset;
  cursor: pointer;
  display: flex;
  flex: 0 0 auto;
  justify-content: center;
  align-items: center;
  width: 4.6rem;
  height: 2rem;
  margin-top: ${({ theme }) => theme.spacing.spacing2};
  margin-bottom: ${({ theme }) => theme.spacing.spacing2};
  margin-left: 1.5rem;
  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.colors.gray300};
  font-size: 0.75rem;
`;

const List = styled.div`
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  align-self: center;
  width: 97%;
  height: auto;
  overflow-y: scroll;
  margin-bottom: 4.5rem;
`;

const ModalBottomBar = styled.div`
  position: absolute;
  bottom: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 4.5rem;
  background-color: white;
`;

const CancelButton = styled.button`
  all: unset;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10rem;
  height: 2.7rem;
  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.colors.gray300};
  font-size: 0.9rem;
`;

const MAX_NUMBER_OF_RECIPIENTS = 10;

export const RecipientListTable = () => {
  const [isEmpty, setIsEmpty] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const { control, watch } = useFormContext<FormValues>();
  const {
    fields: recipientFields,
    append: appendRecipient,
    remove: removeRecipient,
  } = useFieldArray<FormValues>({
    control: control,
    name: 'recipientInfo',
  });
  const recipientInfo = watch('recipientInfo');

  useEffect(() => {
    if (recipientFields.length === 0) {
      setIsEmpty(true);
      return;
    } else {
      setIsEmpty(false);
    }
  }, [isEmpty, recipientFields]);

  return (
    <Container>
      <Header>
        <Label>받는 사람</Label>
        <AddButton
          onClick={() => {
            setModalVisible(true);
          }}
        >
          {isEmpty ? '추가' : '수정'}
        </AddButton>
      </Header>
      {isEmpty ? (
        <EmptyTable>
          <NoticeText>받는 사람이 없습니다.</NoticeText>
          <NoticeText>받는 사람을 추가해주세요.</NoticeText>
        </EmptyTable>
      ) : (
        <Table>
          <Attribute isLabel={true}>이름</Attribute>
          <Attribute isLabel={true}>전화번호</Attribute>
          <Attribute isLabel={true}>수량</Attribute>
          {recipientInfo?.flatMap((recipient) => [
            <Attribute isLabel={false}>{recipient.recipientName}</Attribute>,
            <Attribute isLabel={false}>{recipient.phoneNumber}</Attribute>,
            <Attribute isLabel={false}>{recipient.amount}</Attribute>,
          ])}
        </Table>
      )}
      <Modal modalVisible={modalVisible}>
        <ModalBody>
          <ModalLabel>받는 사람</ModalLabel>
          <Description>* 최대 {MAX_NUMBER_OF_RECIPIENTS}명까지 추가 할 수 있어요.</Description>
          <Description>* 받는 사람의 전화번호를 중복으로 입력할 수 없어요.</Description>
          <ModalAddButton
            onClick={() => {
              appendRecipient({
                recipientName: '',
                phoneNumber: '',
                amount: 0,
              });
            }}
          >
            추가하기
          </ModalAddButton>
          <List>
            {recipientFields.map((field, index) => (
              <RecipientInput key={field.id} index={index} removeRecipient={removeRecipient} />
            ))}
          </List>
          <ModalBottomBar>
            <CancelButton onClick={() => setModalVisible(false)}>취소</CancelButton>
            <CompleteButton setModalVisible={setModalVisible} />
          </ModalBottomBar>
        </ModalBody>
      </Modal>
    </Container>
  );
};
