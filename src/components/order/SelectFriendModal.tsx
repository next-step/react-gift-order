import { Button } from "@/components/common";
import { ReceiverInfoForm } from "@/components/order/ReceiverInfoForm";
import { useOrderForm } from "@/contexts/order";
import { type OrderFormData, orderSchema } from "@/contexts/order";
import styled from "@emotion/styled";
import { useFieldArray, useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const ModalContainer = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  borderRadius: "8px",
  backgroundColor: theme.color.gray[0],
  padding: `${theme.spacing4} ${theme.spacing6}`,
  width: "50vw",
  maxWidth: "600px",
  height: "75vh",
  zIndex: theme.zIndex.modal,
}));

const ModalTitle = styled.h3(({ theme }) => ({
  fontSize: theme.typography.title1Bold.fontSize,
  fontWeight: theme.typography.title1Bold.fontWeight,
  lineHeight: theme.typography.title1Bold.lineHeight,
  color: theme.color.gray[900],
  marginBottom: theme.spacing1,
}));

const ModalDescription = styled.p(({ theme }) => ({
  fontSize: theme.typography.label2Regular.fontSize,
  fontWeight: theme.typography.label2Regular.fontWeight,
  lineHeight: theme.typography.label2Regular.lineHeight,
  color: theme.color.gray[700],
}));

const ModalAddFriendButtonWrapper = styled.div(({ theme }) => ({
  alignSelf: "flex-start",
  marginTop: theme.spacing2,
  "& button": {
    borderRadius: "8px",
  },
}));

const ModalSelectedFriendContainer = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "70vh",
  marginTop: theme.spacing2,
  marginBottom: theme.spacing4,
  overflowY: "auto",
}));

const ModalBottomButtonContainer = styled.div(({ theme }) => ({
  display: "flex",
  gap: theme.spacing2,
  marginTop: "auto",
  "& > *:first-of-type": {
    flex: 1,
  },
  "& > *:last-of-type": {
    flex: 2,
  },
  "& button": {
    borderRadius: "8px",
  },
}));

interface SelectFriendModalProps {
  onCancel?: () => void;
  onComplete?: () => void;
}

export const SelectFriendModal = ({
  onCancel,
  onComplete,
}: SelectFriendModalProps) => {
  const { setValue: setParentValue, watch: watchParentReceivers } =
    useOrderForm();

  const methods = useForm<OrderFormData>({
    resolver: zodResolver(orderSchema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      receivers: watchParentReceivers("receivers") || [],
    },
  });

  const { control, trigger, getValues } = methods;
  const { fields, append, remove } = useFieldArray({
    control,
    name: "receivers",
  });

  const handleAddFriend = () => {
    if (fields.length >= 10) {
      return;
    }

    append({
      receiverName: "",
      receiverPhone: "",
      quantity: 1,
    });
  };

  const handleRemoveFriend = (index: number) => {
    remove(index);
  };

  const handleComplete = async () => {
    const isFormValid = await trigger("receivers", { shouldFocus: true });

    if (!isFormValid) {
      return;
    }

    setParentValue("receivers", getValues("receivers"), {
      shouldDirty: true,
      shouldValidate: true,
    });
    onComplete?.();
  };

  return (
    <ModalContainer>
      <ModalTitle>받는 사람</ModalTitle>
      <ModalDescription>* 최대 10명까지 추가 할 수 있어요.</ModalDescription>
      <ModalDescription>
        * 받는 사람의 전화번호를 중복으로 입력할 수 없어요.
      </ModalDescription>
      <ModalAddFriendButtonWrapper>
        <Button
          variant="outlined"
          size="medium"
          width="100%"
          onClick={handleAddFriend}
          disabled={fields.length >= 10}
        >
          추가하기
        </Button>
      </ModalAddFriendButtonWrapper>
      <ModalSelectedFriendContainer>
        <FormProvider {...methods}>
          {fields.length === 0
            ? ""
            : fields.map((field, index) => (
                <ReceiverInfoForm
                  key={field.id}
                  index={index}
                  onClick={() => handleRemoveFriend(index)}
                />
              ))}
        </FormProvider>
      </ModalSelectedFriendContainer>

      <ModalBottomButtonContainer>
        <Button variant="outlined" size="large" width="100%" onClick={onCancel}>
          취소
        </Button>
        <Button
          variant="primary"
          size="large"
          width="100%"
          onClick={handleComplete}
        >
          {fields.length}명 완료
        </Button>
      </ModalBottomButtonContainer>
    </ModalContainer>
  );
};
