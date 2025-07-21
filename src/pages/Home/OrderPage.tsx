// import { useState, useContext, useEffect } from "react";
// import {
//   useParams,
//   useNavigate,
//   useSearchParams,
// } from "react-router-dom";
// import { AuthContext } from "@/context/AuthContext";
// import {
//   MOCK_RANKING_PRODUCT_DATA_LIST,
// } from "@/pages/Home/components/ProductRankingListSection/mock";
// import { templates } from "@/resources/mock/templates";
// export const EMAIL_REGEX = /^01[016789]-?\d{3,4}-?\d{4}$/;
// const magicNumber = 1; 

// export default function OrderPage() {
//   const params = useParams<{ id: string }>();
//   const [searchParams] = useSearchParams();
//   const navigate = useNavigate();
//   const { token } = useContext(AuthContext)!;
//     // 2) 템플릿 초기 설정
//   const initialTemplateId =
//     Number(searchParams.get("template")) || templates[0].id;
//   const [selectedTemplateId, setSelectedTemplateId] = useState<number>(
//     initialTemplateId
//   )    
//   // 1) 페이지 진입 시 한 번만 로그인 체크
//   useEffect(() => {
//     if (!token) {
//       // 현재 URL (템플릿 선택 파라미터까지 포함) 을 redirect 에 넘겨줍니다
//       const redirectTo = `${location.pathname}${location.search}`;
//       navigate(`/login?redirect=${encodeURIComponent(redirectTo)}`, { replace: true });
//     }
//   }, [token, navigate, location]);
//     if (!token) return null;;

//   const selectedTemplate =
//     templates.find((t) => t.id === selectedTemplateId) ||
//     templates[0];

//   // 3) 메시지 텍스트 상태
//   const [messageText, setMessageText] = useState(
//     selectedTemplate.defaultTextMessage
//   );
//   useEffect(() => {
//     setMessageText(selectedTemplate.defaultTextMessage);
//   }, [selectedTemplateId]);

//   // 4) 주문 폼 상태
//   const [sender, setSender] = useState("");
//   const [receiver, setReceiver] = useState("");
//   const [phone, setPhone] = useState("");
//   const [quantity, setquantity] = useState(1);
//   const [errors, setErrors] = useState<{ [k: string]: string }>({});    

//   // 1) 상품 찾기
//   const id = params.id;
//   if (!id) return <div>잘못된 주문 경로입니다.</div>;
//   const productId = Number(id);
//   const product = MOCK_RANKING_PRODUCT_DATA_LIST.find(
//     (p) => p.id === productId
//   );
//   if (!product)
//     return <div>해당 상품을 찾을 수 없습니다. (ID: {id})</div>;

//   const validate = () => {
//     const e: any = {};
//     if (!sender) e.sender = "보내는 사람 이름을 입력하세요.";
//     if (!receiver) e.receiver = "받는 사람 이름을 입력하세요.";
// if (!EMAIL_REGEX.test(phone)) {
//     e.phone = "올바른 전화번호(010-1234-5678) 형식으로 입력하세요.";
//   }
//     if (quantity < magicNumber) e.quantity = "수량은 1개 이상이어야 합니다.";
//     setErrors(e);
//     return Object.keys(e).length === 0;
//   };

//   const onSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!token) {
//       navigate("/login", {
//         state: { from: `/order/${id}?template=${selectedTemplateId}` },
//       });
//       return;
//     }
//     if (!validate()) return;
//     alert("주문이 완료되었습니다!");
//     navigate("/", { replace: true });
//   };

//   return (
//     <div>
//     <div style={{ padding: 20 }}>

//       {/* ─── 1. TEMPLATE 썸네일 / 미리보기 / 메시지 편집 ─── */}
//       <div
//         style={{
//           display: "flex",
//           overflowX: "auto",
//           padding: "1rem 0",
//           gap: "0.5rem",
//         }}
//       >
//         {templates.map((t) => (
//           <img
//             key={t.id}
//             src={t.thumbUrl}
//             alt={t.defaultTextMessage}
//             onClick={() => setSelectedTemplateId(t.id)}
//             style={{
//               flex: "0 0 auto",
//               width: 80,
//               height: 80,
//               objectFit: "cover",
//               cursor: "pointer",
//               border:
//                 selectedTemplateId === t.id
//                   ? "2px solid #467DE9"
//                   : "2px solid transparent",
//               borderRadius: 4,
//             }}
//           />
//         ))}
//       </div>
//       <div style={{ marginBottom: 20 }}>
//         <img
//           src={selectedTemplate.imageUrl}
//           alt="메시지 카드 미리보기"
//           style={{ maxWidth: "100%", borderRadius: 8 }}
//         />
//       </div>
//       <div style={{ marginBottom: 20 }}>
//         <label style={{ display: "block", marginBottom: 8 }}>
//           메시지 내용:
//         </label>
//         <textarea
//           value={messageText}
//           onChange={(e) => setMessageText(e.target.value)}
//           rows={3}
//           style={{
//             width: "100%",
//             padding: 8,
//             border: "1px solid #ccc",
//             borderRadius: 4,
//             resize: "vertical",
//           }}
//         />
//       </div>

//       {/* ─── 2. 주문 폼 ─── */}
//       <form onSubmit={onSubmit} className="space-y-4">
//         <div>
//           보내는 사람<br /> 
//           <input
//             value={sender}
//             onChange={(e) => setSender(e.target.value)}
//             className="w-full p-2 border rounded"
//           />
//           {errors.sender && (
//             <p className="text-red-500">{errors.sender}</p>
//           )}
//         </div>
//         <div>
//           받는 사람<br />  
//           이름 
//           <input
          
//             value={receiver}
//             onChange={(e) => setReceiver(e.target.value)}
           
//             className="w-full p-2 border rounded"
//           />
//           {errors.receiver && (
//             <p className="text-red-500">{errors.receiver}</p>
//           )}
//         </div>
//      <div className="form-group">
//        <label htmlFor="phone" className="block mb-1 text-sm font-medium">
//          전화번호 
//        </label>
//        <input
//          id="phone"
//          type="tel"
//          value={phone}
//          onChange={e => setPhone(e.target.value)}
//          className={`w-full p-2 border rounded ${
//            errors.phone ? 'border-red-500' : 'border-gray-300'
//          }`}
//        />
//        {errors.phone && (
//          <p className="mt-1 text-sm text-red-600">
//            {errors.phone}
//          </p>
//        )}
//      </div>
     
//         <div>
//           수량
//           <input
//             type="number"
//             value={quantity}
//             onChange={(e) => setquantity(Number(e.target.value))}
//             min={1}
//             className="w-full p-2 border rounded"
//           />
//           {errors.quantity && (
//             <p className="text-red-500">{errors.quantity}</p>
//           )}
//         </div>
//         <button
//           type="submit"
//           disabled={Object.keys(errors).length > 0}
//           className="px-4 py-2 bg-yellow-400 disabled:bg-gray-300 disabled:cursor-not-allowed rounded"
//         >
//           주문하기
//         </button>
//       </form>

//       <div style={{ height: 40 }} />

//       {/* ─── 3. 상품 정보 ─── */}
//       <div>
       
//         <img
//           src={product.imageURL}
//           alt={product.name}
//           style={{ width: 80, borderRadius: 8 }}
//         />{product.name}
//         <p>₩{product.price.sellingPrice.toLocaleString()}</p>
//       </div>
//     </div>

//     </div>
//   );
// }
import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { useForm, useFieldArray } from "react-hook-form";
import { AuthContext } from "@/context/AuthContext";
import { MOCK_RANKING_PRODUCT_DATA_LIST } from "@/pages/Home/components/ProductRankingListSection/mock";
import { templates } from "@/resources/mock/templates";

type Receiver = {
  name: string;
  phone: string;
  quantity: number;
};

type FormValues = {
  sender: string;
  receivers: Receiver[];
};

export default function OrderPage() {
  const params = useParams<{ id: string }>();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { token } = useContext(AuthContext)!;

  // ── 1) 템플릿 & 메시지
  const initialTemplateId = Number(searchParams.get("template")) || templates[0].id;
  const [selectedTemplateId, setSelectedTemplateId] = useState<number>(initialTemplateId);
  const selectedTemplate = templates.find((t) => t.id === selectedTemplateId) || templates[0];
  const [messageText, setMessageText] = useState(selectedTemplate.defaultTextMessage);
  useEffect(() => {
    setMessageText(selectedTemplate.defaultTextMessage);
  }, [selectedTemplateId]);

  // ── 2) 로그인 체크
  useEffect(() => {
    if (!token) {
      const redirectTo = `${location.pathname}${location.search}`;
      navigate(`/login?redirect=${encodeURIComponent(redirectTo)}`, { replace: true });
    }
  }, [token, navigate]);
  if (!token) return null;

  // ── 3) 상품 조회
  const id = params.id;
  if (!id) return <div>잘못된 주문 경로입니다.</div>;
  const product = MOCK_RANKING_PRODUCT_DATA_LIST.find((p) => p.id === Number(id));
  if (!product) return <div>해당 상품을 찾을 수 없습니다. (ID: {id})</div>;

  // ── 4) React Hook Form 세팅
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
    trigger,
  } = useForm<FormValues>({
    defaultValues: {
      sender: "",
      receivers: [{ name: "", phone: "", quantity: 1 }],
    },
    mode: "onChange",
  });

  const receivers = watch("receivers");
  const { fields, append, remove } = useFieldArray({ control, name: "receivers" });

  const onSubmit = (data: FormValues) => {
    console.log("제출 데이터:", data);
    alert("주문이 완료되었습니다!");
    navigate("/", { replace: true });
  };

  return (
    <div style={{ padding: 20 }}>
      {/* ── 템플릿 선택 */}
      <div style={{ display: "flex", overflowX: "auto", gap: 8, padding: "8px 0" }}>
        {templates.map((t) => (
          <img
            key={t.id}
            src={t.thumbUrl}
            alt=""
            onClick={() => setSelectedTemplateId(t.id)}
            style={{
              width: 80,
              height: 80,
              objectFit: "cover",
              cursor: "pointer",
              border: selectedTemplateId === t.id ? "2px solid #467DE9" : "2px solid transparent",
              borderRadius: 4,
            }}
          />
        ))}
      </div>
      <img
        src={selectedTemplate.imageUrl}
        alt=""
        style={{ width: "100%", borderRadius: 8, marginBottom: 16 }}
      />
      <label style={{ display: "block", marginBottom: 8 }}>메시지 내용:</label>
      <textarea
        value={messageText}
        onChange={(e) => setMessageText(e.target.value)}
        rows={3}
        style={{ width: "100%", padding: 8, border: "1px solid #ccc", borderRadius: 4 }}
      />

      {/* ── 주문 폼 */}
      <form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: 24 }}>
        {/* 보내는 사람 */}
        <div style={{ marginBottom: 16 }}>
          <label>보내는 사람</label>
          <input
            {...register("sender", { required: "보내는 사람 이름을 입력하세요." })}
            className="w-full p-2 border rounded"
          />
          {errors.sender && <p className="text-red-500 text-sm">{errors.sender.message}</p>}
        </div>

        {/* 받는 사람 리스트 */}
        <h2>받는 사람</h2>
        <p>* 최대 10명까지 추가할 수 있어요.</p>
        <p>* 전화번호 중복 입력 불가.</p>
        <button
          type="button"
          onClick={() => {
            if (fields.length < 10) append({ name: "", phone: "", quantity: 1 });
            trigger();
          }}
          className="mb-4 px-3 py-1 bg-gray-100 rounded"
        >
          추가하기
        </button>

        {fields.map((field, idx) => (
          <div key={field.id} className="mb-6 p-4 border rounded">
            <div className="flex justify-between items-center mb-2">
              <h3>받는 사람 {idx + 1}</h3>
              <button type="button" onClick={() => remove(idx)} className="text-red-500">
                ✕
              </button>
            </div>

            <div className="mb-2">
              <label>이름</label>
              <input
                {...register(`receivers.${idx}.name`, { required: "이름을 입력하세요." })}
                className="w-full p-2 border rounded"
              />
              {errors.receivers?.[idx]?.name && (
                <p className="text-red-500 text-sm mt-1">{errors.receivers[idx]?.name?.message}</p>
              )}
            </div>

            <div className="mb-2">
              <label>전화번호</label>
              <input
                {...register(`receivers.${idx}.phone`, {
                  required: "전화번호를 입력하세요.",
                  pattern: { value: /^010\d{8}$/, message: "01012345678 형식이어야 해요." },
                  validate: (val) => {
                    const count = receivers.filter((r) => r.phone === val).length;
                    return count === 1 || "중복된 전화번호가 있습니다.";
                  },
                })}
                className="w-full p-2 border rounded"
              />
              {errors.receivers?.[idx]?.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.receivers[idx]?.phone?.message}</p>
              )}
            </div>

            <div className="mb-2">
              <label>수량</label>
              <input
                type="number"
                {...register(`receivers.${idx}.quantity`, { min: { value: 1, message: "1개 이상 입력하세요." } })}
                className="w-full p-2 border rounded"
                min={1}
              />
              {errors.receivers?.[idx]?.quantity && (
                <p className="text-red-500 text-sm mt-1">{errors.receivers[idx]?.quantity?.message}</p>
              )}
            </div>
          </div>
        ))}

        <button type="submit" className="px-4 py-2 bg-yellow-400 rounded w-full">
          {fields.length}명 완료
        </button>
      </form>

      {/* ── 상품 정보 */}
      <div style={{ marginTop: 32 }}>
        <img src={product.imageURL} alt={product.name} style={{ width: 80, borderRadius: 8 }} />
        <div>{product.name}</div>
        <p>₩{product.price.sellingPrice.toLocaleString()}</p>
      </div>
    </div>
  );
}
