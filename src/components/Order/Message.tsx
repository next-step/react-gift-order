import { orderMessage } from '@/data/orderMessage.ts';
import { useState } from 'react';
import {
  GifImage,
  GifWrapper,
  ImageWrapper,
  MessageImage,
  TextAreaWrapper,
  Wrapper,
} from '@/components/Order/Message.style.ts';

export default function Message() {
  const [image, setImage] = useState(orderMessage[0].imageUrl);
  const [message, setMessage] = useState(orderMessage[0].defaultTextMessage);

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
              setMessage(item.defaultTextMessage);
            }}
          />
        ))}
      </ImageWrapper>

      <GifWrapper>
        <GifImage src={image} alt={image} />
      </GifWrapper>

      <TextAreaWrapper>
        <textarea defaultValue={message} />
      </TextAreaWrapper>
    </Wrapper>
  )
}