import React from 'react';
import styled from '@emotion/styled';
import { theme } from '@/styles/theme';
import type { FieldArrayWithId, FieldErrors } from 'react-hook-form';

type Recipient = { name: string; phone: string; quantity: number };
type RecipientsForm = { recipients: Recipient[] };

interface RecipientTableProps {
  fields: FieldArrayWithId<RecipientsForm, 'recipients', 'id'>[];
  errors: FieldErrors<RecipientsForm>;
}

const RecipientTable: React.FC<RecipientTableProps> = ({ fields, errors }) => {
  return (
    <TableContainer>
      <thead>
        <tr>
          <th>이름</th>
          <th>전화번호</th>
          <th>수량</th>
        </tr>
      </thead>
      <tbody>
        {fields.map((field, index) => (
          <tr key={field.id}>
            <td>
              <span>{field.name}</span>
              {errors.recipients?.[index]?.name?.message && (
                <ErrorMessage>
                  {errors.recipients[index]?.name?.message}
                </ErrorMessage>
              )}
            </td>
            <td>
              <span>{field.phone}</span>
              {errors.recipients?.[index]?.phone?.message && (
                <ErrorMessage>
                  {errors.recipients[index]?.phone?.message}
                </ErrorMessage>
              )}
            </td>
            <td>
              <span>{field.quantity}</span>
              {errors.recipients?.[index]?.quantity?.message && (
                <ErrorMessage>
                  {errors.recipients[index]?.quantity?.message}
                </ErrorMessage>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </TableContainer>
  );
};

export default RecipientTable;

const TableContainer = styled.table`
  width: 100%;
  border-radius: 12px;
  border-collapse: collapse;
  border: 1px solid ${theme.colors.gray300};
  overflow: hidden;
  background: ${theme.colors.default};
  margin-top: ${theme.spacing.spacing2};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03);

  th,
  td {
    padding: ${theme.spacing.spacing3} ${theme.spacing.spacing8};
    text-align: left;
    font-size: ${theme.typography.body2Regular.fontSize};
    font-weight: ${theme.typography.title2Regular.fontWeight};
  }

  th {
    background: ${theme.colors.gray100};
    font-weight: ${theme.typography.body2Bold.fontWeight};
    color: ${theme.colors.textDefault};
    border-bottom: 1px solid ${theme.colors.borderDefault};
  }

  td {
    border-bottom: 1px solid ${theme.colors.borderDefault};
  }

  tr:last-child td {
    border-bottom: none;
  }
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 4px;
`;
