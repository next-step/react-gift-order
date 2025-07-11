import { useForm, useFieldArray } from "react-hook-form";

type FormData = {
  order: {
    receiverName: string;
    phoneNumber: string;
    quantity: number;
  }[];
};

type OrderFormProps = {
  onSubmitCallback?: (data: FormData) => void;
};

const OrderForm = ({ onSubmitCallback }: OrderFormProps) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      order: [
        {
          receiverName: "",
          phoneNumber: "",
          quantity: 1,
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "order",
  });

  const onSubmit = (data: FormData) => {
    console.log("제출된 데이터:", data);
    alert("주문 완료!");
    if (onSubmitCallback) {
      onSubmitCallback(data);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: "300px" }}>
      {fields.map((field, index) => (
        <div key={field.id}>
          <input
            placeholder="이름"
            {...register(`order.${index}.receiverName`, {
              required: "받는 사람의 이름은 필수 입력값입니다.",
            })}
          />
          {errors.order?.[index]?.receiverName && (
            <p style={{ color: "red" }}>
              {errors.order[index].receiverName?.message}
            </p>
          )}
          <input
            placeholder="전화번호"
            {...register(`order.${index}.phoneNumber`, {
              required: "전화번호는 필수 입력값입니다",
              pattern: {
                value: /^01[016789]-?\d{3,4}-?\d{4}$/,
                message: "전화번호 형식을 다시 확인하세요",
              },
            })}
          />
          {errors.order?.[index]?.phoneNumber && (
            <p style={{ color: "red" }}>
              {errors.order[index].phoneNumber?.message}
            </p>
          )}
          <input
            placeholder="수량"
            type="number"
            {...register(`order.${index}.quantity`, {
              required: "수량은 필수 입력값입니다.",
              min: {
                value: 1,
                message: "수량은 1 이상이어야 합니다.",
              },
            })}
          />
          {errors.order?.[index]?.quantity && (
            <p style={{ color: "red" }}>
              {errors.order[index].quantity?.message}
            </p>
          )}
          {fields.length > 1 && (
            <button type="button" onClick={() => remove(index)}>
              X
            </button>
          )}
        </div>
      ))}
      <button
        type="button"
        onClick={() =>
          append({ receiverName: "", phoneNumber: "", quantity: 1 })
        }
      >
        추가하기
      </button>
      <button type="submit">완료</button>
    </form>
  );
};

export default OrderForm;
