import { orderMessage } from '@/data/orderMessage.ts';
import { useState } from 'react';
import {
  GifImage,
  GifWrapper,
  ImageWrapper,
  Wrapper,
} from '@/components/Order/Message/Message.style.ts';
import MessageImage from "@/components/Common/MessageImage/MessageImage.tsx"
import TextAreaWrapper from "@/components/Common/ValidTextarea/TextAreaWrapper.tsx"


export default function Message({ message, setMessage }) {
  const [image, setImage] = useState(orderMessage[0].imageUrl);

  return (
    <Wrapper>
      <ImageWrapper>
        {orderMessage.map(item => (
          <MessageImage
            key={item.id}
            src={item.thumbUrl}
            alt={item.defaultTextMessage}
            onClick={()=>{
              setImage(item.imageUrl);
              setMessage(prev => ({ ...prev, text: item.defaultTextMessage}));
            }}
          />
        ))}
      </ImageWrapper>

      <GifWrapper>
        <GifImage src={image} alt={image} />
      </GifWrapper>

      <TextAreaWrapper
        value={message.text}
        onChange={e => setMessage({ text: e.target.value, check: false })}
        isError={message.check}
        errorMessage="메시지를 입력해주세요."
      />
    </Wrapper>
  )
}
