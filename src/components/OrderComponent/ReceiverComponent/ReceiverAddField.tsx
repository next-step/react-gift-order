interface ReceiverAddSectionProps {
  fieldsLength: number;
  onAddReceiverField: () => void;
}

const ReceiverAddSection = ({
  fieldsLength,
  onAddReceiverField,
}: ReceiverAddSectionProps) => {
  return (
    <div className="mb-4">
      {fieldsLength === 0 && (
        <div className="flex-grow flex items-center justify-center text-center text-gray-500 border border-gray-300 rounded-lg p-6 mb-4">
          <p>
            받는 사람이 없습니다.
            <br />
            받는 사람을 추가해주세요.
          </p>
        </div>
      )}
      <p className="text-gray-600 mb-2">* 최대 10명까지 추가 할 수 있어요.</p>
      <p className="text-gray-600 mb-4">
        * 받는 사람의 전화번호를 중복으로 입력할 수 없어요.
      </p>
      <button
        type="button"
        onClick={onAddReceiverField}
        className="px-4 py-2 bg-gray-200 rounded-md text-gray-700 hover:bg-gray-300"
      >
        추가하기
      </button>
    </div>
  );
};

export default ReceiverAddSection;
