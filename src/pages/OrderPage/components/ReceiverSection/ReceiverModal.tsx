import { useForm, useFieldArray } from "react-hook-form";
import {
  ModalHeader,
  ModalOverlay,
  ModalContent,
  ModalTitle,
  ModalBody,
  InfoText,
  AddSection,
  AddSectionButton,
  ModalFooter,
  CancelButton,
  CompleteButton,
  InfoTextContainer,
  ReceiverList,
} from "./ReceiverModal.styles";
import ReceiverForm from "./ReceiverForm";
import { MAX_RECEIVERS } from "../../constants/receiverSection";

interface ReceiverModalProps {
  handleCloseModal: () => void;
}

interface FormData {
  receivers: {
    name: string;
    phone: string;
    quantity: string;
  }[];
}

function ReceiverModal({ handleCloseModal }: ReceiverModalProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      receivers: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "receivers",
  });

  const handleAddReceiver = () => {
    if (fields.length < MAX_RECEIVERS) {
      append({ name: "", phone: "", quantity: "" });
    }
  };

  const onSubmit = (data: FormData) => {
    if (data.receivers.length === 0) {
      handleCloseModal();
      return;
    }

    alert("주문 완료");

    handleCloseModal();
  };

  const onInvalid = () => {
    // 검증 실패 시
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>받는 사람</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <InfoTextContainer>
            <InfoText>* 최대 {MAX_RECEIVERS}명까지 추가할 수 있어요.</InfoText>
            <InfoText>
              * 받는 사람의 전화번호를 중복으로 입력할 수 있어요.
            </InfoText>
          </InfoTextContainer>

          <AddSection>
            <AddSectionButton type="button" onClick={handleAddReceiver}>
              추가하기
            </AddSectionButton>
          </AddSection>

          <ReceiverList>
            {fields.map((field, index) => (
              <ReceiverForm
                key={field.id}
                index={index}
                totalCount={fields.length}
                control={control}
                errors={errors}
                onRemove={() => remove(index)}
              />
            ))}
          </ReceiverList>
        </ModalBody>
        <ModalFooter>
          <CancelButton type="button" onClick={handleCloseModal}>
            취소
          </CancelButton>
          <CompleteButton
            type="button"
            onClick={handleSubmit(onSubmit, onInvalid)}
          >
            {fields.length}명 완료
          </CompleteButton>
        </ModalFooter>
      </ModalContent>
    </ModalOverlay>
  );
}

export default ReceiverModal;
