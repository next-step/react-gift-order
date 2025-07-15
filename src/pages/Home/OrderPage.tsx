import { useState, useContext, useEffect } from "react";
import {
  useParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { AuthContext } from "@/context/AuthContext";
import {
  MOCK_RANKING_PRODUCT_DATA_LIST,
} from "@/pages/Home/components/ProductRankingListSection/mock";
import { templates } from "@/resources/mock/templates";
export const EMAIL_REGEX = /^01[016789]-?\d{3,4}-?\d{4}$/;
const magicNumber = 1; 

export default function OrderPage() {
  const params = useParams<{ id: string }>();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { token } = useContext(AuthContext)!;
    // 2) 템플릿 초기 설정
  const initialTemplateId =
    Number(searchParams.get("template")) || templates[0].id;
  const [selectedTemplateId, setSelectedTemplateId] = useState<number>(
    initialTemplateId
  )    
  // 1) 페이지 진입 시 한 번만 로그인 체크
  useEffect(() => {
    if (!token) {
      // 현재 URL (템플릿 선택 파라미터까지 포함) 을 redirect 에 넘겨줍니다
      const redirectTo = `${location.pathname}${location.search}`;
      navigate(`/login?redirect=${encodeURIComponent(redirectTo)}`, { replace: true });
    }
  }, [token, navigate, location]);
    if (!token) return null;;

  const selectedTemplate =
    templates.find((t) => t.id === selectedTemplateId) ||
    templates[0];

  // 3) 메시지 텍스트 상태
  const [messageText, setMessageText] = useState(
    selectedTemplate.defaultTextMessage
  );
  useEffect(() => {
    setMessageText(selectedTemplate.defaultTextMessage);
  }, [selectedTemplateId]);

  // 4) 주문 폼 상태
  const [sender, setSender] = useState("");
  const [receiver, setReceiver] = useState("");
  const [phone, setPhone] = useState("");
  const [qty, setQty] = useState(1);
  const [errors, setErrors] = useState<{ [k: string]: string }>({});    

  // 1) 상품 찾기
  const id = params.id;
  if (!id) return <div>잘못된 주문 경로입니다.</div>;
  const productId = Number(id);
  const product = MOCK_RANKING_PRODUCT_DATA_LIST.find(
    (p) => p.id === productId
  );
  if (!product)
    return <div>해당 상품을 찾을 수 없습니다. (ID: {id})</div>;

  const validate = () => {
    const e: any = {};
    if (!sender) e.sender = "보내는 사람 이름을 입력하세요.";
    if (!receiver) e.receiver = "받는 사람 이름을 입력하세요.";
if (!EMAIL_REGEX.test(phone)) {
    e.phone = "올바른 전화번호(010-1234-5678) 형식으로 입력하세요.";
  }
    if (qty < magicNumber) e.qty = "수량은 1개 이상이어야 합니다.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) {
      navigate("/login", {
        state: { from: `/order/${id}?template=${selectedTemplateId}` },
      });
      return;
    }
    if (!validate()) return;
    alert("주문이 완료되었습니다!");
    navigate("/", { replace: true });
  };

  return (
    <div>
    <div style={{ padding: 20 }}>

      {/* ─── 1. TEMPLATE 썸네일 / 미리보기 / 메시지 편집 ─── */}
      <div
        style={{
          display: "flex",
          overflowX: "auto",
          padding: "1rem 0",
          gap: "0.5rem",
        }}
      >
        {templates.map((t) => (
          <img
            key={t.id}
            src={t.thumbUrl}
            alt={t.defaultTextMessage}
            onClick={() => setSelectedTemplateId(t.id)}
            style={{
              flex: "0 0 auto",
              width: 80,
              height: 80,
              objectFit: "cover",
              cursor: "pointer",
              border:
                selectedTemplateId === t.id
                  ? "2px solid #467DE9"
                  : "2px solid transparent",
              borderRadius: 4,
            }}
          />
        ))}
      </div>
      <div style={{ marginBottom: 20 }}>
        <img
          src={selectedTemplate.imageUrl}
          alt="메시지 카드 미리보기"
          style={{ maxWidth: "100%", borderRadius: 8 }}
        />
      </div>
      <div style={{ marginBottom: 20 }}>
        <label style={{ display: "block", marginBottom: 8 }}>
          메시지 내용:
        </label>
        <textarea
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
          rows={3}
          style={{
            width: "100%",
            padding: 8,
            border: "1px solid #ccc",
            borderRadius: 4,
            resize: "vertical",
          }}
        />
      </div>

      {/* ─── 2. 주문 폼 ─── */}
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          보내는 사람<br /> 
          <input
            value={sender}
            onChange={(e) => setSender(e.target.value)}
            className="w-full p-2 border rounded"
          />
          {errors.sender && (
            <p className="text-red-500">{errors.sender}</p>
          )}
        </div>
        <div>
          받는 사람<br />  
          이름 
          <input
          
            value={receiver}
            onChange={(e) => setReceiver(e.target.value)}
           
            className="w-full p-2 border rounded"
          />
          {errors.receiver && (
            <p className="text-red-500">{errors.receiver}</p>
          )}
        </div>
     <div className="form-group">
       <label htmlFor="phone" className="block mb-1 text-sm font-medium">
         전화번호 
       </label>
       <input
         id="phone"
         type="tel"
         value={phone}
         onChange={e => setPhone(e.target.value)}
         className={`w-full p-2 border rounded ${
           errors.phone ? 'border-red-500' : 'border-gray-300'
         }`}
       />
       {errors.phone && (
         <p className="mt-1 text-sm text-red-600">
           {errors.phone}
         </p>
       )}
     </div>
     
        <div>
          수량
          <input
            type="number"
            value={qty}
            onChange={(e) => setQty(Number(e.target.value))}
            min={1}
            className="w-full p-2 border rounded"
          />
          {errors.qty && (
            <p className="text-red-500">{errors.qty}</p>
          )}
        </div>
        <button
          type="submit"
          disabled={Object.keys(errors).length > 0}
          className="px-4 py-2 bg-yellow-400 disabled:bg-gray-300 disabled:cursor-not-allowed rounded"
        >
          주문하기
        </button>
      </form>

      <div style={{ height: 40 }} />

      {/* ─── 3. 상품 정보 ─── */}
      <div>
       
        <img
          src={product.imageURL}
          alt={product.name}
          style={{ width: 80, borderRadius: 8 }}
        />{product.name}
        <p>₩{product.price.sellingPrice.toLocaleString()}</p>
      </div>
    </div>

    </div>
  );
}
