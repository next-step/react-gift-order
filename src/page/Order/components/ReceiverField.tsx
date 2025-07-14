import styled from '@emotion/styled';
import ReceiverModal from './ReceiverModal';
import { useFormContext } from 'react-hook-form';
import { createPortal } from 'react-dom';
import { useState } from 'react';
import ReceiverInfoArray from './ReceiverInfoArray';
import type { OrderInfoValues } from '..';

const Container = styled.div`
  width: 100%;
  padding: 0px 1rem;
`;

const ButtonArea = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  gap: 12px;
  width: 100%;
`;
const P = styled.p`
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.5rem;
  color: rgb(42, 48, 56);
  margin: 0px;
  text-align: left;
`;

const Button = styled.button`
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.5rem;
  color: rgb(42, 48, 56);
  margin: 0px;
  text-align: left;
`;

const MainArea = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  padding: 24px;
  border: 1px solid rgb(238, 239, 241);
  border-radius: 8px;

  p {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.1875rem;
    color: rgb(176, 179, 186);
    margin: 0px;
  }
`;

// interface FormInputValues {
//   receiverInfos: { name: string; phoneNumber: string; quantity: number }[];
// }

const ReceiverField = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { watch, setValue } = useFormContext<OrderInfoValues>();

  const receiverInfos = watch('receiverInfos');
  const isEmpty = receiverInfos.length ? false : true;

  const handleChange = (value: OrderInfoValues['receiverInfos']) => {
    setValue('receiverInfos', value);
  };

  return (
    <>
      <Container>
        <ButtonArea>
          <P>받는사람</P>
          <Button type="button" onClick={() => setIsModalOpen(true)}>
            {!isEmpty ? '수정' : '추가'}
          </Button>
        </ButtonArea>
        <MainArea>
          {!isEmpty ? (
            <ReceiverInfoArray receiverInfos={receiverInfos} />
          ) : (
            <p>
              받는 사람이 없습니다.
              <br />
              받을 사람을 추가해주세요.
            </p>
          )}
        </MainArea>
      </Container>
      {isModalOpen &&
        createPortal(
          <ReceiverModal
            onClose={() => setIsModalOpen(false)}
            handleChange={handleChange}
            receiverInfos={receiverInfos}
          />,
          document.body
        )}
    </>
  );
};
export default ReceiverField;
