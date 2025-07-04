import {
  ReceiverWarn, Column, RecevierSpan, Row,
} from '@/components/Common/LabeldInput/LabeledInput.style.ts';

export default function LabeledInput({ label, input, errorMessage, showError, comment }: {
  label?: string;
  input: React.ReactNode;
  errorMessage?: string | React.ReactNode;
  showError?: boolean;
  comment?: string | React.ReactNode;
}) {
  return (
    <Row>
      {label && <RecevierSpan>{label}</RecevierSpan>}
      <Column>
        {input}
        {showError && <ReceiverWarn>{errorMessage}</ReceiverWarn>}
        {!showError && comment && comment}
      </Column>
    </Row>
  );
}
