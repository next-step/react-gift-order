import React from 'react'
import styled from '@emotion/styled'
import { theme } from '@/shared/styles/theme'
import { Typography } from './Typography'

// * 테이블 컴포넌트
export const Table: React.FC<TableProps> = ({ headers, data, emptyMessage, className }) => {
  if (!data || data.length === 0) {
    return (
      <EmptyContainer className={className}>
        <EmptyMessage variant="body2Regular">{emptyMessage}</EmptyMessage>
      </EmptyContainer>
    )
  }

  return (
    <TableContainer className={className}>
      <StyledTable>
        <TableHeader>
          <TableRow>
            {headers.map((header, index) => (
              <TableHeaderCell key={index}>
                <Typography variant="label1Bold">{header}</Typography>
              </TableHeaderCell>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <TableCell key={cellIndex}>
                  <Typography variant="body2Regular">{cell}</Typography>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </TableContainer>
  )
}

// * 테이블 타입 정의
interface TableProps {
  headers: string[]
  data: string[][]
  emptyMessage: string
  className?: string
}

// * 테이블 컨테이너
const TableContainer = styled.div`
  width: 100%;
  border: 1px solid ${theme.semanticColors.border.disabled};
  border-radius: ${theme.spacing.spacing2};
  overflow: hidden;
  background-color: ${theme.semanticColors.background.default};
`

// * 테이블
const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`

// * 테이블 헤더
const TableHeader = styled.thead`
  background-color: ${theme.semanticColors.background.fill};
`

// * 테이블 바디
const TableBody = styled.tbody``

// * 테이블 행
const TableRow = styled.tr`
  &:not(:last-child) {
    border-bottom: 1px solid ${theme.semanticColors.border.disabled};
  }
`

// * 테이블 헤더 셀
const TableHeaderCell = styled.th`
  padding: ${theme.spacing.spacing3} ${theme.spacing.spacing4};
  text-align: left;
  border-bottom: 1px solid ${theme.semanticColors.border.disabled};
`

// * 테이블 셀
const TableCell = styled.td`
  padding: ${theme.spacing.spacing3} ${theme.spacing.spacing4};

  &:last-child {
    border-right: none;
  }
`

// * 빈 상태 컨테이너
const EmptyContainer = styled.div`
  width: 100%;
  padding: ${theme.spacing.spacing6} ${theme.spacing.spacing4};
  border: 1px solid ${theme.semanticColors.border.disabled};
  border-radius: ${theme.spacing.spacing2};
  background-color: ${theme.semanticColors.background.default};

  display: flex;
  justify-content: center;
  align-items: center;
`

// * 빈 상태 메시지
const EmptyMessage = styled(Typography)`
  color: ${theme.semanticColors.text.sub};
  text-align: center;
  white-space: pre-line;
`
