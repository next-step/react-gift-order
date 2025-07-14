import { useReceiver } from '@/context/ReceiverContext';
import {
  Div100p,
  EmptyDiv12h,
  ErrorText,
  LowField,
  MiniText,
  ModalBox,
  ModalDiv,
  ScrollBox,
  SimpleButton,
  SimpleInput,
  SubText,
  SubTitle,
} from '@/styles/Common.styled';
import { useFieldArray, useForm } from 'react-hook-form';
import { ButtonSpace, CancleButton, Hr1Gray, ReceiverOne, ReceiverTitle, SubmitButton, XButton } from './ReceiverModal.styled';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const ReceiverModal = ({ isOpen, onClose }: Props) => {
  const { setReceivers } = useReceiver();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm({
    defaultValues: {
      receiver: [{ name: '', phone: '', count: 1 }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'receiver',
  });

  const onSubmit = async(data: any) => {
    setReceivers(data.receiver);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ModalDiv isOpen={isOpen}>
        <ModalBox>
          <div>
            <SubTitle>받는 사람</SubTitle>
            <SubText>* 최대 10명까지 추가 할 수 있어요.</SubText>
            <SubText>
              * 받는 사람의 전화번호를 중복으로 입력할 수 없어요.
            </SubText>
            <EmptyDiv12h />

            <SimpleButton 
              disabled = {fields.length >= 10}
              type="button"
              onClick={() => append({ name: '', phone: '', count: 1 })}
            >
              추가하기
            </SimpleButton>
          </div>
          <ScrollBox>
            {fields.map((field, i) => (
              <div key={i}>
                {i >= 1 && <Hr1Gray />}
                <ReceiverOne>
                  <SubTitle>
                    <ReceiverTitle>
                      받는사람 {i + 1} 
                    </ReceiverTitle>
                  </SubTitle>
                  <XButton type="button" onClick={() => remove(i)}>
                    X
                  </XButton>
                </ReceiverOne>
                <LowField>
                  <MiniText>이름</MiniText>
                  <Div100p>
                    <SimpleInput
                      type="text"
                      placeholder="이름을 입력하세요."
                      {...register(`receiver.${i}.name`, {
                        required: '이름을 입력해 주세요',
                      })}
                    />
                    {errors.receiver?.[i]?.name && (
                      <ErrorText>{errors.receiver[i].name?.message}</ErrorText>
                    )}
                  </Div100p>
                </LowField>
                <LowField>
                  <MiniText>전화번호</MiniText>
                  <Div100p>
                    <SimpleInput
                      type="text"
                      placeholder="전화번호를 입력하세요."
                      {...register(`receiver.${i}.phone`, {
                        required: '전화번호를 입력하세요',
                        pattern: {
                          value: /^010[0-9]{8}$/,
                          message: '올바른 전화번호 형식이 아니에요.',
                        },
                        validate: (value) => {
                          const phones = getValues('receiver').map((r: any) => r.phone);
                          const duplicates = phones.filter((phone: string) => phone === value);
                          if (duplicates.length > 1) {
                            return '중복된 전화번호가 있습니다';
                          }
                          return true;
                        },
                      })}
                    />
                    {errors.receiver?.[i]?.phone && (
                      <ErrorText>{errors.receiver[i].phone?.message}</ErrorText>
                    )}
                  </Div100p>
                </LowField>

                <LowField>
                  <MiniText>수량</MiniText>
                  <Div100p>
                    <SimpleInput
                      type="number"
                      min={1}
                      {...register(`receiver.${i}.count`, {
                        required: '',
                        min: {
                          value: 1,
                          message: '수량은 1개 이상이어야 합니다',
                        },
                      })}
                    />
                    {errors.receiver?.[i]?.count && (
                      <ErrorText>{errors.receiver[i].count?.message}</ErrorText>
                    )}
                  </Div100p>
                </LowField>
              </div>
            ))}
          </ScrollBox>
          <ButtonSpace>
          <CancleButton type="button" onClick={onClose}>
            취소
          </CancleButton>
          <SubmitButton type="submit">{fields.length}명 완료</SubmitButton>
          </ButtonSpace>
        </ModalBox>
      </ModalDiv>
    </form>
  );
};

export default ReceiverModal;
