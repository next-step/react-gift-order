// src/components/OrderComponent/ReceiverFormHeader.tsx

interface ReceiverFormHeaderProps {
  isEditing: boolean;
  onCancelForm: () => void;
  onEditMode: () => void;
}

const ReceiverFormHeader = ({
  isEditing,
  onCancelForm,
  onEditMode,
}: ReceiverFormHeaderProps) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-bold">받는 사람</h2>
      {isEditing ? (
        <button
          type="button"
          onClick={onCancelForm}
          className="px-4 py-2 bg-gray-200 rounded-md text-gray-700 hover:bg-gray-300"
        >
          취소
        </button>
      ) : (
        <button
          type="button"
          onClick={onEditMode}
          className="px-4 py-2 bg-gray-200 rounded-md text-gray-700 hover:bg-gray-300"
        >
          수정
        </button>
      )}
    </div>
  );
};

export default ReceiverFormHeader;
