interface ReceiverFormActionsProps {
  watchAllFieldsLength: number;
}

const ReceiverFormActions = ({
  watchAllFieldsLength,
}: ReceiverFormActionsProps) => {
  return (
    <div className="flex justify-center mt-auto">
      <button
        type="submit"
        className="w-full px-4 py-3 bg-yellow-400 text-black rounded-md font-semibold hover:bg-yellow-500"
      >
        {`${watchAllFieldsLength || 0}명 완료`}
      </button>
    </div>
  );
};

export default ReceiverFormActions;
