import { useEffect } from "react";
import { useForm, useFieldArray, FormProvider } from "react-hook-form";
import GetterInfoSection from "@/sections/GetterInfoSection/GetterInfoSection";
import type { FormValues } from "@/pages/OrderPage/OrderPage";
import {
  SectionTitle,
  ModalBackdrop,
  ModalBox,
  Text,
  AddGetterButton,
  CancelButton,
  ConfirmButton,
  ButtonRow,
  GetterList,
} from "@/components/AddGetterModal/AddGetterModal.style";

type Getter = FormValues["getters"][number];

interface ModalForm {
  getters: Getter[];
}

interface AddGetterModalProps {
  open: boolean;
  initialGetters: Getter[];
  onClose: () => void;
  onConfirm: (newGetters: Getter[]) => void;
}

const AddGetterModal: React.FC<AddGetterModalProps> = ({
  open,
  initialGetters,
  onClose,
  onConfirm,
}) => {
  const methods = useForm<ModalForm>({
    defaultValues: { getters: initialGetters },
  });
  const { control, handleSubmit, reset } = methods;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "getters",
  });

  useEffect(() => {
    reset({ getters: initialGetters });
  }, [initialGetters, reset]);

  const onSubmit = (data: ModalForm) => {
    onConfirm(data.getters);
  };

  if (!open) return null;

  return (
    <FormProvider {...methods}>
      <ModalBackdrop onClick={onClose}>
        <ModalBox onClick={(e) => e.stopPropagation()}>
          <SectionTitle>받는 사람</SectionTitle>
          <Text>
            * 최대 10명까지 추가 할 수 있어요.
            <br />* 받는 사람의 전화번호를 중복으로 입력할 수 없어요.
          </Text>
          <AddGetterButton
            type="button"
            onClick={() =>
              fields.length < 10 && append({ name: "", phone: "", quantity: 1 })
            }
          >
            추가하기
          </AddGetterButton>
          <GetterList>
            {fields.map((field, idx) => (
              <GetterInfoSection
                key={field.id}
                index={idx}
                onRemove={() => remove(idx)}
              />
            ))}
          </GetterList>
          <ButtonRow>
            <CancelButton type="button" onClick={onClose}>
              취소
            </CancelButton>
            <ConfirmButton type="button" onClick={handleSubmit(onSubmit)}>
              {fields.length}명 완료
            </ConfirmButton>
          </ButtonRow>
        </ModalBox>
      </ModalBackdrop>
    </FormProvider>
  );
};

export default AddGetterModal;
