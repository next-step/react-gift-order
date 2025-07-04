import { MessageImage } from '@/components/Common/MessageImage/MessageImage.style.ts';

export default function MessageImageStyle({ src, alt, onClick }) {
  return <MessageImage src={src} alt={alt} onClick={onClick} />
}
