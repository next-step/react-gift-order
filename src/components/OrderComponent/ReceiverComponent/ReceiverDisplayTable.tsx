import { type ReceiverField } from "../../../schemas/receiverSchema";

interface ReceiverDisplayTableProps {
  savedReceivers: ReceiverField[];
}

const ReceiverDisplayTable = ({
  savedReceivers,
}: ReceiverDisplayTableProps) => {
  if (savedReceivers.length === 0) {
    return (
      <div className="text-center text-gray-500 border border-gray-300 rounded-lg p-6">
        <p>
          등록된 받는 사람이 없습니다.
          <br />
          수정 버튼을 눌러 추가해주세요.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg">
        <thead>
          <tr className="bg-gray-50 text-gray-700 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">이름</th>
            <th className="py-3 px-6 text-left">전화번호</th>
            <th className="py-3 px-6 text-left">수량</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {savedReceivers.map((receiver, index) => (
            <tr
              key={index}
              className="border-b border-gray-200 hover:bg-gray-100"
            >
              <td className="py-3 px-6 text-left whitespace-nowrap">
                {receiver.name}
              </td>
              <td className="py-3 px-6 text-left">{receiver.phone}</td>
              <td className="py-3 px-6 text-left">{receiver.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReceiverDisplayTable;
