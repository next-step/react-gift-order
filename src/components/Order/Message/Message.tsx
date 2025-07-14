import { orderMessage } from '@/data/orderMessage.ts';
import {
  GifImage,
  GifWrapper,
  ImageWrapper,
  Wrapper,
  MessageImage,
} from '@/components/Order/Message/Message.style.ts';
import MessageInput from '@/components/Order/Message/MessageInput.tsx';
import { useEffect, useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

export default function Message() {
  const { control, setValue, trigger, formState: { errors } } = useFormContext();
  const [image, setImage] = useState(orderMessage[0].imageUrl);

  useEffect(() => {
    setValue('textMessage', orderMessage[0].defaultTextMessage)
  }, [setValue]);

  return (
    <Wrapper>
      <ImageWrapper>
        {orderMessage.map((item) => (
          <MessageImage
            key={item.id}
            src={item.thumbUrl}
            alt={item.defaultTextMessage}
            onClick={() => {
              setImage(item.imageUrl);
              setValue('textMessage', item.defaultTextMessage);
              trigger('textMessage');
            }}
          />
        ))}
      </ImageWrapper>

      <GifWrapper>
        <GifImage src={image} alt="선택된 메시지 이미지" />
      </GifWrapper>

      <Controller
        name="textMessage"
        control={control}
        rules={{ required: '메시지를 입력해주세요.' }}
        render={({ field }) => (
          <MessageInput
            value={field.value}
            onChange={field.onChange}
            error={errors.textMessage}
          />
        )}
      />
    </Wrapper>
  );
}
