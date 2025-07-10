import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Box = styled.div`
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
`

export const EmptyText = styled.p`
  color: #888;
  text-align: center;
  white-space: pre-wrap;
`

export const RecipientInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > p {
    margin: 0;
  }
`
