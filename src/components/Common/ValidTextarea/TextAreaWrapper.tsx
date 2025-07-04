import { TextArea } from '@/components/Common/ValidTextarea/TextArea.style.ts';

export default function TextAreaWrapper({ value, onChange, isError, errorMessage }) {
  return (
    <TextArea isActive={isError}>
      <textarea value={value} onChange={onChange}/>
      {isError && <div>{errorMessage}</div>}
    </TextArea>
  )
}
