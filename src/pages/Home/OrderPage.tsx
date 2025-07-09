// src/pages/OrderPage.tsx
import { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from '@/context/AuthContext';
import {templates} from "@/resources/mock/templates";

export default function OrderPage() {
  const { id } = useParams();
  const template = templates.find((t) => t.id === Number(id))!;
  const nav = useNavigate();
  const { token } = useContext(AuthContext)!;

  const [sender, setSender] = useState("");
  const [receiver, setReceiver] = useState("");
  const [phone, setPhone] = useState("");
  const [qty, setQty] = useState(1);

  const [errors, setErrors] = useState<{ [k: string]: string }>({});

  const validate = () => {
    const e: any = {};
    if (!sender) e.sender = "보내는 사람 이름을 입력하세요.";
    if (!receiver) e.receiver = "받는 사람 이름을 입력하세요.";
    if (!/^010\d{8}$/.test(phone)) e.phone = "01012341234 형식으로 입력하세요.";
    if (qty < 1) e.qty = "수량은 1개 이상이어야 합니다.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) {
      nav("/login", { state: { from: `/order/${id}` } });
      return;
    }
    if (!validate()) return;
    // 주문 API 호출 후...
    alert("주문 완료!");
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <img src={template.imageUrl} alt="" />
      <div>
        <input
          value={sender}
          onChange={(e) => setSender(e.target.value)}
          placeholder="보내는 사람"
        />
        {errors.sender && <p className="text-red-500">{errors.sender}</p>}
      </div>
      <div>
        <input
          value={receiver}
          onChange={(e) => setReceiver(e.target.value)}
          placeholder="받는 사람"
        />
        {errors.receiver && <p className="text-red-500">{errors.receiver}</p>}
      </div>
      <div>
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="01012341234"
        />
        {errors.phone && <p className="text-red-500">{errors.phone}</p>}
      </div>
      <div>
        <input
          type="number"
          value={qty}
          onChange={(e) => setQty(Number(e.target.value))}
          min={1}
        />
        {errors.qty && <p className="text-red-500">{errors.qty}</p>}
      </div>
      <button
        type="submit"
        disabled={Boolean(Object.keys(errors).length)}
        className="px-4 py-2 bg-yellow-400 disabled:bg-gray-300 disabled:cursor-not-allowed"
      >
        주문하기
      </button>
    </form>
  );
}
