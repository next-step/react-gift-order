import React, { useState } from "react";

interface SenderProps {
  onSenderNameChange: (name: string) => void;
}

const Sender = ({ onSenderNameChange }: SenderProps) => {
  const [senderName, setSenderName] = useState<string>("example");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    setSenderName(newName);
    onSenderNameChange(newName);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <h2 className="text-xl font-bold mb-3">보내는 사람</h2>
      <div className="mb-3">
        <label
          htmlFor="senderName"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          이름
        </label>
        <input
          type="text"
          id="senderName"
          defaultValue={senderName}
          value={senderName}
          onChange={handleNameChange}
          className="w-full border border-gray-300 rounded-md p-2"
        />
        <p className="text-xs text-gray-500 mt-1">
          * 실제 선물 발송 시 발신자이름으로 반영되는 정보입니다.
        </p>
      </div>
    </div>
  );
};

export default Sender;
