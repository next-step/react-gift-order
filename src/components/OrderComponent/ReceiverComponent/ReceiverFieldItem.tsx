import { type UseFormRegister, type FieldErrors } from "react-hook-form";
import { type ReceiversFormValues } from "../../../schemas/receiverSchema";

interface ReceiverFieldItemProps {
  index: number;
  register: UseFormRegister<ReceiversFormValues>;
  errors: FieldErrors<ReceiversFormValues>;
  onDelete: (index: number) => void;
}

const ReceiverFieldItem = ({
  index,
  register,
  errors,
  onDelete,
}: ReceiverFieldItemProps) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 relative">
      <button
        type="button"
        onClick={() => onDelete(index)}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl font-bold"
        aria-label="Remove receiver"
      >
        &times;
      </button>
      <h3 className="font-semibold mb-2">받는 사람 {index + 1}</h3>

      <div className="mb-3">
        <label
          htmlFor={`receivers.${index}.name`}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          이름
        </label>
        <input
          id={`receivers.${index}.name`}
          type="text"
          {...register(`receivers.${index}.name`)}
          placeholder="이름을 입력해주세요."
          className={`block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
            errors.receivers?.[index]?.name
              ? "border-red-500"
              : "border-gray-300"
          }`}
        />
        {errors.receivers?.[index]?.name && (
          <p className="mt-1 text-sm text-red-600">
            {errors.receivers[index]?.name?.message}
          </p>
        )}
      </div>

      <div className="mb-3">
        <label
          htmlFor={`receivers.${index}.phone`}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          전화번호
        </label>
        <input
          id={`receivers.${index}.phone`}
          type="tel"
          {...register(`receivers.${index}.phone`)}
          placeholder="전화번호를 입력해주세요"
          className={`block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
            errors.receivers?.[index]?.phone
              ? "border-red-500"
              : "border-gray-300"
          }`}
        />
        {errors.receivers?.[index]?.phone && (
          <p className="mt-1 text-sm text-red-600">
            {errors.receivers[index]?.phone?.message}
          </p>
        )}
      </div>

      <div className="mb-3">
        <label
          htmlFor={`receivers.${index}.quantity`}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          수량
        </label>
        <input
          id={`receivers.${index}.quantity`}
          type="number"
          {...register(`receivers.${index}.quantity`, {
            valueAsNumber: true,
          })}
          placeholder="구매 수량을 입력하세요"
          min="1"
          className={`block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
            errors.receivers?.[index]?.quantity
              ? "border-red-500"
              : "border-gray-300"
          }`}
        />
        {errors.receivers?.[index]?.quantity && (
          <p className="mt-1 text-sm text-red-600">
            {errors.receivers[index]?.quantity?.message}
          </p>
        )}
      </div>
    </div>
  );
};

export default ReceiverFieldItem;
