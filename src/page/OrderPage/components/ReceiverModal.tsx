import styled from '@emotion/styled';

import { useFieldArray, useForm } from 'react-hook-form';
import { phoneNumberRegex } from '@/utils/validate';
// import ReceiverAdded from './ReceiverAdded';

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
  display: flex;
  flex-direction: column;
  gap: 16px;
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

interface ReceiverModalProps {
  onClick: () => void;
}

interface FormInputValues {
  receiverInfos: { name: string; phoneNumber: string; quantity: number }[];
}
const MAX_LENGTH = 10;

const ReceiverModal = ({ onClick }: ReceiverModalProps) => {
  const onSubmit = () => {
    alert('제출완료');
  };

  // ----------------------------
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputValues>({ defaultValues: { receiverInfos: [] } });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'receiverInfos',
  });

  return (
    <ModalBackGround>
      <ModalWrapper>
        <ModalContainer>
          <form onSubmit={handleSubmit(onSubmit)}>
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
                <ReceiverInfoContainer key={item.id}>
                  <h3>받는 사람 {index + 1}</h3>
                  <button type="button" onClick={() => remove(index)}>
                    Delete
                  </button>
                  <InputContainer>
                    <Text>이름</Text>
                    <InputWrapper>
                      <Input
                        type="text"
                        {...register(`receiverInfos.${index}.name`, {
                          required: { value: true, message: '이름을 입력하세요.' },
                          validate: value => (value.trim() === '' ? '이름을 입력해주세요.' : true),
                        })}
                        placeholder="이름을 입력하세요."
                      />
                      {errors.receiverInfos?.[index]?.name && (
                        <ErrorMessage>{errors?.receiverInfos?.[index]?.name?.message}</ErrorMessage>
                      )}
                    </InputWrapper>
                  </InputContainer>
                  <InputContainer>
                    <Text>전화번호</Text>
                    <InputWrapper>
                      <Input
                        type="text"
                        {...register(`receiverInfos.${index}.phoneNumber`, {
                          required: { value: true, message: '전화번호를 입력하세요.' },
                          pattern: {
                            value: phoneNumberRegex,
                            message: '전화번호를 입력하세요.',
                          },
                        })}
                        placeholder="전화번호를 입력하세요."
                      />

                      {errors.receiverInfos?.[index]?.phoneNumber && (
                        <ErrorMessage>
                          {errors.receiverInfos?.[index]?.phoneNumber?.message}
                        </ErrorMessage>
                      )}
                    </InputWrapper>
                  </InputContainer>
                  <InputContainer>
                    <Text>수량</Text>
                    <InputWrapper>
                      <Input
                        type="number"
                        {...register(`receiverInfos.${index}.quantity`, {
                          required: { value: true, message: '수량을 입력하세요.' },
                          validate: value => value >= 1 || '구매 수량은 1개 이상이어야 해요.',
                          valueAsNumber: true,
                        })}
                      />
                      {errors.receiverInfos?.[index]?.quantity && (
                        <ErrorMessage>
                          {errors?.receiverInfos?.[index]?.quantity?.message}
                        </ErrorMessage>
                      )}
                    </InputWrapper>
                  </InputContainer>
                </ReceiverInfoContainer>
              ))}
            </ReceiverAddedContainer>

            <ButtonArea>
              <ButtonCancel onClick={onClick}>취소</ButtonCancel>
              <ButtonAddDone type="submit">{fields.length}명 완료</ButtonAddDone>
            </ButtonArea>
          </form>
        </ModalContainer>
      </ModalWrapper>
    </ModalBackGround>
  );
};
export default ReceiverModal;

const ReceiverAddedContainer = styled.div`
  flex: 1 1 0%;
  overflow: auto;
`;

const ReceiverInfoContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.semantic.background.fill};
  padding: ${({ theme }) => theme.spacing.spacing4} ${({ theme }) => theme.spacing.spacing3};
  margin-bottom: ${({ theme }) => theme.spacing.spacing4};
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  width: 100%;
`;

const InputWrapper = styled.div`
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.spacing2};
  border: 1px solid ${({ theme }) => theme.colors.colorScale.gray[200]};
  border-radius: 8px;
  font-size: ${({ theme }) => theme.typography.body1Regular.fontSize};
  line-height: ${({ theme }) => theme.typography.body1Regular.lineHeight};
  color: ${({ theme }) => theme.colors.semantic.text.default};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.semantic.brand.kakaoYellow};
  }
`;

const Text = styled.p`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.375rem;
  color: rgb(42, 48, 56);
  margin: 0px;
  text-align: left;
  min-width: 3.75rem;
`;

const ErrorMessage = styled.p`
  font-size: ${({ theme }) => theme.typography.label2Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.label2Regular.fontWeight};
  color: ${({ theme }) => theme.colors.colorScale.red[600]};
  margin-top: ${({ theme }) => theme.spacing.spacing1};
`;
