import { useTheme } from '@emotion/react';

type Props = {
  receivers: { name: string; phone: string; quantity: number }[];
};

const ReceiverTable = ({ receivers }: Props) => {
  const theme = useTheme();

  return (
    <table
      style={{
        width: '100%',
        borderCollapse: 'collapse',
        backgroundColor: theme.color.gray.gray100,
        borderRadius: '8px',
        overflow: 'hidden',
      }}
    >
      <thead>
        <tr
          style={{
            backgroundColor: theme.color.gray.gray300,
            textAlign: 'left',
          }}
        >
          <th style={{ padding: '8px 12px' }}>이름</th>
          <th style={{ padding: '8px 12px' }}>전화번호</th>
          <th style={{ padding: '8px 12px' }}>수량</th>
        </tr>
      </thead>
      <tbody>
        {receivers.map((r, i) => (
          <tr
            key={i}
            style={{
              borderTop: `1px solid ${theme.color.gray.gray100}`,
            }}
          >
            <td style={{ padding: '8px 12px' }}>{r.name}</td>
            <td style={{ padding: '8px 12px' }}>{r.phone}</td>
            <td style={{ padding: '8px 12px' }}>{r.quantity}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ReceiverTable;
