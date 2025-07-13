import styled from '@emotion/styled';
import { useState } from 'react';
import { orderCardTemplates } from '@/data/ordercardtemplates';
import { useParams } from 'react-router-dom';
import { products } from '@/data/products';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import ReceiverModal from '@/components/ReceiverModal';

const cards = orderCardTemplates;

const Container = styled.div`
  max-width: 720px;
  margin: 0 auto;
  background: #fff;
  margin: 8px;
  padding-top: 15px;
  padding-bottom: 5px;
  height: auto;
`;

const ImageSelector = styled.div`
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding: 35px 0 25px 0;
`;

const Thumbnail = styled.img<{ selected: boolean }>`
  width: 80px;
  height: 50px;
  border-radius: 16px;
  border: 3px solid ${({ selected }) => (selected ? '#000000' : 'transparent')};
  cursor: pointer;
  object-fit: cover;
  background: #f5f6fa;
`;

const MainImage = styled.img`
  display: block;
  margin: 0 auto 24px auto;
  width: 400px;
  height: 250px;
  border-radius: 18px;
  object-fit: cover;
  background: #f5f6fa;
`;

const Section = styled.div`
  margin-bottom: 24px;
`;

const Label = styled.label`
  width: 50px;
  min-width: 50px;
  margin-left: 15px;
  margin-right: 10px;
  font-size: 16px;
  font-weight: 500;
  white-space: nowrap;
  display: flex;
  align-items: center;
`;

const Input = styled.input<{ error?: boolean }>`
  width: 80%;
  flex: 1;
  padding: 14px;
  border: 1.5px solid ${({ error }) => (error ? '#f44336' : '#eee')};
  border-radius: 8px;
  font-size: 16px;
  margin-bottom: 8px;
  margin-left: 15px;
  background: #fafbfc;
`;

const Textarea = styled.textarea<{ error?: boolean }>`
  min-width: 630px;
  max-width: 670px;
  min-height: 35px;
  padding: 14px;
  margin: 10px 0 0 10px;
  border: 1.5px solid ${({ error }) => (error ? '#f44336' : '#eee')};
  border-radius: 8px;
  font-size: 16px;
  background: #fafbfc;
  resize: both;
`;

const OrderButton = styled.button`
  position: fixed;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: 100vw;
  max-width: 720px;
  height: 56px;
  background: #ffe812;
  color: #222;
  font-size: 20px;
  font-weight: bold;
  border: none;
  border-radius: 0 0 18px 18px;
  cursor: pointer;
  z-index: 100;
`;

const ProductSection = styled.div`
  padding-bottom: 45px;
`;

const ProductCard = styled.div`
  display: flex;
  align-items: center;
  background: #fafbfc;
  border-radius: 16px;
  padding: 15px 20px;
  margin-left: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
  border: 1.5px solid #f0f0f0;
`;

const ProductImage = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 5px;
  object-fit: cover;
  margin-right: 24px;
  background: #fff;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const ProductName = styled.div`
  font-size: 15px;
  font-weight: 500;
`;

const BrandName = styled.div`
  color: #888;
  font-size: 12px;
`;

const Price = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-top: 8px;
`;

const ErrorMsg = styled.div`
  color: #f44336;
  font-size: 13px;
  margin: 0 0 5px 25px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

function OrderPage() {
  const { productId } = useParams<{ productId: string }>();
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [message, setMessage] = useState('축하해요.');
  const [sender, setSender] = useState('');

  type Receiver = {
    name: string;
    phone: string;
    quantity: number;
  };

  const [receivers, setReceivers] = useState<Receiver[]>([]);

  const [messageError, setMessageError] = useState('');
  const [senderError, setSenderError] = useState('');

  const product = products.find((p) => p.id === Number(productId));
  const price = product ? product.price.sellingPrice : 0;

  const [isReceiverModalOpen, setIsReceiverModalOpen] = useState(false);

  const validate = () => {
    let valid = true;

    if (!message.trim()) {
      setMessageError('메시지를 입력해주세요.');
      valid = false;
    } else {
      setMessageError('');
    }

    if (!sender) {
      setSenderError('이름을 입력해주세요.');
      valid = false;
    } else {
      setSenderError('');
    }

    return valid;
  };

  const navigate = useNavigate();

  const handleOrder = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (validate()) {
      if (!product) return;

      const totalQuantity = receivers.reduce(
        (sum, receiver) => sum + Number(receiver.quantity),
        0,
      );

      alert(
        `주문이 완료되었습니다.
상품명: ${product.name}
구매 수량: ${totalQuantity}
발신자 이름: ${sender}
메시지: ${message}`,
      );
      navigate('/');
    }
  };

  const totalQuantity = receivers.reduce(
    (sum, r) => sum + Number(r.quantity),
    0,
  );
  return (
    <>
      <Header />
      <Container>
        <ImageSelector>
          {cards.map((img, idx) => (
            <Thumbnail
              key={img.id}
              src={img.imageUrl}
              selected={selectedIdx === idx}
              onClick={() => setSelectedIdx(idx)}
            />
          ))}
        </ImageSelector>
        <MainImage src={cards[selectedIdx].imageUrl} alt="선물 이미지" />

        <Section>
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="메시지를 입력하세요."
            error={!!messageError}
          />
          {messageError && <ErrorMsg>{messageError}</ErrorMsg>}
        </Section>
      </Container>
      <Container>
        <Section>
          <Label
            style={{
              fontSize: 17,
              fontWeight: 'bold',
              marginBottom: 18,
              marginLeft: 15,
            }}
          >
            보내는 사람
          </Label>
          <InputWrapper>
            <Input
              value={sender}
              onChange={(e) => {
                setSender(e.target.value);
                if (e.target.value) setSenderError('');
              }}
              placeholder="이름을 입력하세요."
              error={!!senderError}
            />
            {senderError && <ErrorMsg>{senderError}</ErrorMsg>}
          </InputWrapper>

          <Label style={{ color: '#888', fontSize: 13 }}>
            * 실제 선물 발송 시 발신자이름으로 반영되는 정보입니다.
          </Label>
        </Section>
      </Container>
      <Container>
        <Section>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 8,
            }}
          >
            <span
              style={{
                fontSize: 17,
                fontWeight: 700,
                marginLeft: 15,
              }}
            >
              받는 사람
            </span>
            <button
              style={{
                background: '#f5f6fa',
                borderRadius: 16,
                border: 'none',
                padding: '10px 20px',
                fontSize: 15,
                cursor: 'pointer',
                marginRight: 15,
                fontWeight: 500,
              }}
              onClick={() => setIsReceiverModalOpen(true)}
            >
              {receivers.length === 0 ? '추가' : '수정'}
            </button>
          </div>
          <div
            onClick={() => setIsReceiverModalOpen(true)}
            style={{
              minHeight: 120,
              border: '1px solid #eee',
              borderRadius: 16,
              margin: 15,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#bbb',
              fontSize: 15,
              cursor: 'pointer',
              background: '#fafbfc',
            }}
          >
            {receivers.length === 0 ? (
              <div>
                받는 사람이 없습니다.
                <br />
                받는 사람을 추가해주세요.
              </div>
            ) : (
              <table
                style={{
                  width: '100%',
                  borderCollapse: 'separate',
                  borderSpacing: 0,
                  background: '#fff',
                  borderRadius: 16,
                  overflow: 'hidden',
                  boxShadow: 'none',
                }}
              >
                <thead>
                  <tr style={{ background: '#f7f8fa' }}>
                    <th
                      style={{
                        padding: '16px 0',
                        fontWeight: 700,
                        color: '#353c43',
                        borderBottom: '1px solid #eee',
                        textAlign: 'center',
                        fontSize: 15,
                      }}
                    >
                      이름
                    </th>
                    <th
                      style={{
                        padding: '16px 0',
                        fontWeight: 700,
                        color: '#353c43',
                        borderBottom: '1px solid #eee',
                        textAlign: 'center',
                        fontSize: 15,
                      }}
                    >
                      전화번호
                    </th>
                    <th
                      style={{
                        padding: '16px 0',
                        fontWeight: 700,
                        color: '#353c43',
                        borderBottom: '1px solid #eee',
                        textAlign: 'center',
                        fontSize: 15,
                      }}
                    >
                      수량
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {receivers.map((r, i) => (
                    <tr key={i}>
                      <td
                        style={{
                          textAlign: 'center',
                          padding: '14px 0',
                          fontWeight: 500,
                          borderBottom:
                            i === receivers.length - 1
                              ? 'none'
                              : '1px solid #f0f0f0',
                          fontSize: 15,
                        }}
                      >
                        {r.name}
                      </td>
                      <td
                        style={{
                          textAlign: 'center',
                          padding: '14px 0',
                          borderBottom:
                            i === receivers.length - 1
                              ? 'none'
                              : '1px solid #f0f0f0',
                          fontSize: 15,
                        }}
                      >
                        {r.phone}
                      </td>
                      <td
                        style={{
                          textAlign: 'center',
                          padding: '14px 0',
                          borderBottom:
                            i === receivers.length - 1
                              ? 'none'
                              : '1px solid #f0f0f0',
                          fontSize: 15,
                        }}
                      >
                        {r.quantity}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </Section>
      </Container>
      <Container>
        {product && (
          <ProductSection>
            <Label
              style={{
                fontSize: 17,
                fontWeight: 'bold',
                marginBottom: 18,
                marginLeft: 15,
              }}
            >
              상품 정보
            </Label>
            <ProductCard>
              <ProductImage src={product.imageURL} alt={product.name} />
              <ProductInfo>
                <ProductName>{product.name}</ProductName>
                <BrandName>{product.brandInfo.name}</BrandName>
                <Price>
                  상품가 {product.price.sellingPrice.toLocaleString()}원
                </Price>
              </ProductInfo>
            </ProductCard>
          </ProductSection>
        )}
      </Container>

      <OrderButton onClick={handleOrder}>
        {(price * totalQuantity).toLocaleString()}원 주문하기
      </OrderButton>
      {isReceiverModalOpen && (
        <ReceiverModal
          receivers={receivers}
          setReceivers={setReceivers}
          onClose={() => setIsReceiverModalOpen(false)}
        />
      )}
    </>
  );
}

export default OrderPage;
