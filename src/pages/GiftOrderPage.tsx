import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

import Order from "../components/OrderComponent/OrderConfirmSection";
import Receiver from "../components/OrderComponent/ReceiverSection";
import Sender from "../components/OrderComponent/SenderSection";
import ThanksCardSlide from "../components/OrderComponent/ThanksCardSlideSection";

import ProductDetailComponent from "../components/OrderComponent/Cards/ProductDetailCard";

import {
  getProductDetail,
  getProductInfo,
  type Product,
  type ProductDetail as ProductDetailType,
} from "../api/product";

import type { ReceiverField } from "../schemas/receiverSchema";

const GiftOrderPage = () => {
  const { productId } = useParams<{ productId: string }>();

  const [productInfo, setProductInfo] = useState<Product | null>(null);
  const [, setProductDetailsFull] = useState<ProductDetailType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [finalReceivers, setFinalReceivers] = useState<ReceiverField[]>([]);

  const [senderName, setSenderName] = useState<string>("");

  const [messageContent, setMessageContent] = useState<string>("");

  useEffect(() => {
    if (!productId) {
      setError("상품 ID가 제공되지 않았습니다.");
      setLoading(false);
      return;
    }

    const fetchProductData = async () => {
      try {
        setLoading(true);
        setError(null);

        const id = parseInt(productId, 10);

        const [info, detail] = await Promise.all([
          getProductInfo(id),
          getProductDetail(id),
        ]);

        setProductInfo(info);
        setProductDetailsFull(detail);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("상품 정보를 불러오는 중 알 수 없는 오류가 발생했습니다.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, [productId]);

  const totalQuantity = useMemo(() => {
    return finalReceivers.reduce((sum, receiver) => sum + receiver.quantity, 0);
  }, [finalReceivers]);

  const totalPrice = useMemo(() => {
    if (!productInfo) return 0;
    const unitPrice = productInfo.price.sellingPrice;
    return totalQuantity * unitPrice;
  }, [totalQuantity, productInfo]);

  if (loading) {
    return (
      <div className="container mx-auto py-10 text-center text-xl font-bold text-gray-700">
        상품 정보를 불러오는 중...
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto py-10 text-center text-xl font-bold text-red-700">
        오류: {error}
      </div>
    );
  }

  if (!productInfo) {
    return (
      <div className="container mx-auto py-10 text-center text-xl font-bold text-gray-700">
        상품 정보를 찾을 수 없습니다.
      </div>
    );
  }

  const handleReceiversUpdate = (receivers: ReceiverField[]) => {
    setFinalReceivers(receivers);
    console.log("최종 받는 사람 목록 업데이트됨:", receivers);
  };

  const handleReceiverCancel = () => {
    console.log("Receiver 컴포넌트에서 취소되었습니다.");
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 pt-4 pb-[80px]">
      <ThanksCardSlide onMessageChange={setMessageContent} />
      <Sender onSenderNameChange={setSenderName} />
      <Receiver
        onReceiversUpdate={handleReceiversUpdate}
        onCancel={handleReceiverCancel}
      />
      <ProductDetailComponent
        imageUrl={productInfo.imageURL}
        productName={productInfo.name}
        brand={productInfo.brandInfo.name}
        price={productInfo.price.sellingPrice}
      />

      <Order
        totalPrice={totalPrice}
        quantity={totalQuantity.toString()}
        productName={productInfo.name}
        sender={senderName}
        message={messageContent}
      />
    </div>
  );
};

export default GiftOrderPage;
