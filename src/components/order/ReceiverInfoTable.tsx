import { css } from "@emotion/react";

const ReceiverInfoTable: React.FC<{
  receivers: { receiverName: string; phoneNumber: string; quantity: number }[];
}> = ({ receivers }) => (
  <table css={tableStyle}>
    <thead>
      <tr>
        <th>이름</th>
        <th>전화번호</th>
        <th>수량</th>
      </tr>
    </thead>
    <tbody>
      {receivers.map((r) => (
        <tr key={r.phoneNumber}>
          <td>{r.receiverName}</td>
          <td>{r.phoneNumber}</td>
          <td>{r.quantity}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default ReceiverInfoTable;

const tableStyle = css`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;

  th,
  td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
  }

  th {
    background-color: #f9f9f9;
    font-weight: bold;
  }
`;
