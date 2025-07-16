import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { PHONE_REGEX } from '@/constants/regex';

export type Recipient = {
  name: string;
  phone: string;     
  quantity: number;  
};

type Props = {
  recipients: Recipient[];
  setRecipients: (r: Recipient[]) => void;
  editable: boolean;
};

export default function RecipientsList({
  recipients,
  setRecipients,
  editable,
}: Props) {
  const [input, setInput] = useState<Recipient>({
    name: '',
    phone: '',
    quantity: 1,
  });
  const [error, setError] = useState('');
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!editable) {
      setEditingIndex(null);
      setInput({ name: '', phone: '', quantity: 1 });
      setError('');
    }
  }, [editable]);

  const handleSave = () => {
    setError('');
    if (!input.name.trim()) {
      setError('이름을 입력해 주세요.');
      return;
    }
    if (!PHONE_REGEX.test(input.phone)) {
      setError('전화번호는 01012341234 형식이어야 해요.');
      return;
    }
    if (
      recipients.some(
        (r, idx) => r.phone === input.phone && idx !== editingIndex
      )
    ) {
      setError('전화번호가 중복되었습니다.');
      return;
    }
    if (input.quantity < 1) {
      setError('수량은 1개 이상이어야 해요.');
      return;
    }

    if (editingIndex !== null) {
      const copy = [...recipients];
      copy[editingIndex] = { ...input };
      setRecipients(copy);
    } else {
      if (recipients.length >= 10) {
        setError('최대 10명까지 등록할 수 있어요.');
        return;
      }
      setRecipients([...recipients, { ...input }]);
    }

    setEditingIndex(null);
    setInput({ name: '', phone: '', quantity: 1 });
  };

  const startEdit = (idx: number) => {
    setEditingIndex(idx);
    setInput(recipients[idx]);
  };

  const remove = (idx: number) => {
    const copy = [...recipients];
    copy.splice(idx, 1);
    setRecipients(copy);
    if (editingIndex === idx) {
      setEditingIndex(null);
      setInput({ name: '', phone: '', quantity: 1 });
    }
  };

  return (
    <Wrapper>
      <InputRow>
        <input
          placeholder="이름"
          value={input.name}
          onChange={(e) =>
            setInput({ ...input, name: e.target.value })
          }
        />
        <input
          placeholder="01012341234"
          value={input.phone}
          onChange={(e) =>
            setInput({ ...input, phone: e.target.value })
          }
        />
        <input
          type="number"
          min={1}
          value={input.quantity}
          onChange={(e) =>
            setInput({
              ...input,
              quantity: Number(e.target.value),
            })
          }
        />
        <ActionButton onClick={handleSave}>
          {editingIndex !== null ? '수정' : '추가'}
        </ActionButton>
      </InputRow>

      {error && <ErrorText>{error}</ErrorText>}

      {recipients.length > 0 ? (
        <Card>
          <Table>
            <thead>
              <tr>
                <th>이름</th>
                <th>전화번호</th>
                <th>수량</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {recipients.map((r, i) => (
                <tr key={i}>
                  <td>{r.name}</td>
                  <td>{r.phone}</td>
                  <td>{r.quantity}</td>
                  <td>
                    {editable && (
                      <>
                        <SmallButton onClick={() => startEdit(i)}>
                          수정
                        </SmallButton>
                        <SmallButton onClick={() => remove(i)}>
                          ✕
                        </SmallButton>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card>
      ) : (
        <Placeholder>
          받는 사람이 없습니다.
          <br />
          추가해주세요.
        </Placeholder>
      )}
    </Wrapper>
  );
}


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.spacing3};
`;

const InputRow = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.spacing2};

  & > input {
    flex: 1;
    padding: ${({ theme }) => theme.spacing.spacing2};
    border: 1px solid ${({ theme }) => theme.borderColors.default};
    border-radius: ${({ theme }) => theme.spacing.spacing2};
    font: ${({ theme }) => theme.typography.body2Regular};
  }
`;

const ActionButton = styled.button`
  padding: ${({ theme }) => theme.spacing.spacing2}
    ${({ theme }) => theme.spacing.spacing3};
  background-color: ${({ theme }) =>
    theme.sementicColors.kakaoYellow};
  border: none;
  border-radius: ${({ theme }) => theme.spacing.spacing2};
  cursor: pointer;
  font: ${({ theme }) => theme.typography.body2Bold};

  &:hover {
    background-color: ${({ theme }) =>
      theme.sementicColors.kakaoYellowHover};
  }
`;

const ErrorText = styled.span`
  color: ${({ theme }) => theme.stateColors.critical};
  font: ${({ theme }) => theme.typography.label2Regular};
`;

const Card = styled.div`
  background-color: ${({ theme }) => theme.backgroundColors.default};
  border: 1px solid ${({ theme }) => theme.borderColors.default};
  border-radius: ${({ theme }) => theme.spacing.spacing3};
  overflow: hidden;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: ${({ theme }) => theme.spacing.spacing3};
    text-align: left;
    font: ${({ theme }) => theme.typography.body2Regular};
  }

  th {
    background-color: ${({ theme }) => theme.backgroundColors.fill};
    font: ${({ theme }) => theme.typography.subtitle2Bold};
    border-bottom: 1px solid ${({ theme }) => theme.borderColors.default};
  }

  td {
    border-bottom: 1px solid ${({ theme }) => theme.borderColors.disabled};
  }

  tr:last-child td {
    border-bottom: none;
  }
`;

const SmallButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.textColors.default};
  cursor: pointer;
  font: ${({ theme }) => theme.typography.body2Bold};
  margin-left: ${({ theme }) => theme.spacing.spacing2};
`;

const Placeholder = styled.div`
  padding: ${({ theme }) => theme.spacing.spacing3};
  background-color: ${({ theme }) => theme.backgroundColors.fill};
  border: 1px solid ${({ theme }) => theme.borderColors.disabled};
  border-radius: ${({ theme }) => theme.spacing.spacing2};
  color: ${({ theme }) => theme.textColors.sub};
  font: ${({ theme }) => theme.typography.body2Regular};
  text-align: center;
`;
