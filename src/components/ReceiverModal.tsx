import styled from '@emotion/styled';
import { FormProvider } from 'react-hook-form';
import { Button } from '@/components/common/Button';
import { ReceiverFieldSet } from '@/components/ReceiverFieldSet';
import { useModal } from '@/contexts/ModalContext';
import { useReceiverForm } from '@/hooks/useReceiverForm';

export function ReceiverModal() {
  const { close } = useModal();
  const { methods, fields, append, remove, onSubmit } = useReceiverForm();

  return (
    <BackDrop>
      <FormProvider {...methods}>
        <Form onSubmit={methods.handleSubmit(onSubmit)}>
          <Header>
            <Title>받는 사람</Title>
            <Info>
              * 최대 10명까지 추가 할 수 있어요.
              <br />* 받는 사람의 전화번호를 중복으로 입력할 수 없어요.
            </Info>
            <Button
              type="button"
              variant="secondary"
              width="74px"
              height="32px"
              onClick={() => append({ receiverName: '', phoneNumber: '', quantity: 1 })}
              disabled={fields.length >= 10}
            >
              추가하기
            </Button>
          </Header>

          <Container>
            {fields.map((field, index) => (
              <ReceiverFieldSet key={field.id} index={index} onRemove={remove} />
            ))}
            {methods.formState.errors.receivers?.root?.message && (
              <ErrorMessage>{methods.formState.errors.receivers.root.message}</ErrorMessage>
            )}
          </Container>

          <Footer>
            <Button type="button" variant="secondary" width="100%" height="44px" onClick={close}>
              취소
            </Button>
            <Button type="submit" variant="primary" width="100%" height="44px">
              {`${fields.length}명 완료`}
            </Button>
          </Footer>
        </Form>
      </FormProvider>
    </BackDrop>
  );
}

const BackDrop = styled.div`
  position: fixed;
  z-index: 99999;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 40px;
  background-color: #00000080;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  height: 100%;
  border-radius: 8px;
  padding: 20px;
  background-color: #fff;
`;

const Title = styled.h1`
  ${({ theme }) => theme.typography.title.title1Bold};
`;

const Info = styled.p`
  margin: 8px 0;
  ${({ theme }) => theme.typography.label.label2Regular};
  color: ${({ theme }) => theme.colors.gray.gray800};
`;

const Header = styled.header`
  margin-bottom: 16px;
`;

const Container = styled.ul`
  flex-grow: 1;
  overflow-y: scroll;
  padding: 0;
  margin: 0;
  list-style: none;
`;

const Footer = styled.footer`
  display: flex;
  gap: 8px;
  margin-top: 14px;
`;

const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.semanticColors.status.critical};
  font-size: ${({ theme }) => theme.typography.body.body2Regular.fontSize};
  margin-top: 8px;
`;
