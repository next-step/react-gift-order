import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useFieldArray, useForm, type SubmitHandler } from "react-hook-form";
import {
  receiversFormSchema,
  type ReceiverField,
  type ReceiversFormValues,
} from "../../schemas/receiverSchema";

import ReceiverAddSection from "./ReceiverComponent/ReceiverAddField";
import ReceiverDisplayTable from "./ReceiverComponent/ReceiverDisplayTable";
import ReceiverFieldItem from "./ReceiverComponent/ReceiverFieldItem";
import ReceiverFormActions from "./ReceiverComponent/ReceiverFormActions";
import ReceiverFormHeader from "./ReceiverComponent/ReceiverFormHeader";

interface ReceiverProps {
  initialReceivers?: ReceiverField[];
  onReceiversUpdate: (receivers: ReceiverField[]) => void;
  onCancel: () => void;
}

const Receiver = ({
  initialReceivers = [],
  onReceiversUpdate,
  onCancel,
}: ReceiverProps) => {
  const [isEditing, setIsEditing] = useState(initialReceivers.length === 0);
  const [savedReceivers, setSavedReceivers] =
    useState<ReceiverField[]>(initialReceivers);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<ReceiversFormValues>({
    resolver: zodResolver(receiversFormSchema),
    defaultValues: {
      receivers: initialReceivers.length > 0 ? initialReceivers : [],
    },
    mode: "onBlur",
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "receivers",
  });

  const watchAllFields = watch("receivers");

  const handleAddReceiverField = () => {
    if (fields.length < 10) {
      append({ name: "", phone: "", quantity: 1 });
    } else {
      alert("최대 10명까지 추가할 수 있습니다.");
    }
  };

  const handleDeleteReceiverField = (index: number) => {
    remove(index);
  };

  const handleFormSubmit: SubmitHandler<ReceiversFormValues> = (data) => {
    setSavedReceivers(data.receivers);
    setIsEditing(false);
    onReceiversUpdate(data.receivers);
  };

  const handleEditMode = () => {
    setIsEditing(true);
    reset({ receivers: savedReceivers });
  };

  const handleCancelForm = () => {
    if (savedReceivers.length > 0) {
      setIsEditing(false);
      reset({ receivers: savedReceivers });
    } else {
      onCancel();
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md mb-4">
      <ReceiverFormHeader
        isEditing={isEditing}
        onCancelForm={handleCancelForm}
        onEditMode={handleEditMode}
      />

      {isEditing ? (
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="flex flex-col"
        >
          <ReceiverAddSection
            fieldsLength={fields.length}
            onAddReceiverField={handleAddReceiverField}
          />

          <div className="space-y-4 mb-6">
            {fields.map((field, index) => (
              <ReceiverFieldItem
                key={field.id}
                index={index}
                register={register}
                errors={errors}
                onDelete={handleDeleteReceiverField}
              />
            ))}
          </div>

          <ReceiverFormActions
            watchAllFieldsLength={watchAllFields?.length || 0}
          />
        </form>
      ) : (
        <ReceiverDisplayTable savedReceivers={savedReceivers} />
      )}
    </div>
  );
};

export default Receiver;
