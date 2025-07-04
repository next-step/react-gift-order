import { orderMessage } from '@/data/orderMessage.ts';
import { useState } from 'react';
import {
  GifImage,
  GifWrapper,
  ImageWrapper,
  MessageImage,
  TextAreaWrapper,
  Wrapper,
} from '@/components/Order/Message/Message.style.ts';

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
        isActive={message.check}
      >
        <textarea value={message.text} onChange={e => setMessage({ text: e.target.value, check: false })}/>
        {message.check && <div>메시지를 입력해주세요.</div>}
      </TextAreaWrapper>
    </Wrapper>
  )
}
