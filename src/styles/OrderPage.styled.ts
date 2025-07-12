import styled from '@emotion/styled'

export const Container = styled.div`
  padding: 1rem;
  padding-bottom: 120px;
`

export const Section = styled.div`
  margin-bottom: 2rem;
`

export const CardScroll = styled.div`
  display: flex;
  overflow-x: auto;
  margin-bottom: 1rem;
  gap: 0.5rem;
`

export const CardThumb = styled.div<{ selected: boolean }>`
  border: 2px solid ${({ selected }) => (selected ? '#0070f3' : '#ddd')};
  border-radius: 8px;
  cursor: pointer;
  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }
`

export const CardPreview = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
  img {
    width: 300px;
    border-radius: 16px;
  }
`

export const MessageInput = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  resize: none;
`

export const Label = styled.div`
  margin-bottom: 0.5rem;
  font-weight: bold;
`

export const InfoText = styled.div`
  font-size: 0.8rem;
  color: #888;
  margin-top: 0.25rem;
`

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 0.5rem;
`

export const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
`

export const ProductDetails = styled.div`
  flex: 1;
`

export const Brand = styled.div`
  font-size: 0.9rem;
  color: #555;
`

export const Price = styled.div`
  font-weight: bold;
  margin-top: 0.5rem;
`

export const OrderBar = styled.button`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 600px;
  background: #ffeb00;
  border: none;
  padding: 1rem 0;
  height: 55px;
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
`
export const OrderPrice = styled.div`
  color: #000;
`

export const ErrorText = styled.div`
  color: red;
  font-size: 0.8rem;
  margin-top: 0.2rem;
`
export const FormRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;

  label {
    flex: 0 0 60px;
    font-weight: bold;
    color: #666;
  }

  input {
    flex: 1;
    padding: 0.75rem 1rem;
    height: 35px;
    border: 1px solid #ddd;
    border-radius: 8px;
  }
`
export const RecipientTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-radius: 8px;
  overflow: hidden;

  thead {
    background: #f8f8f8;
  }

  th, td {
    text-align: left;
    padding: 0.75rem 1rem;
    font-size: 0.9rem;
  }

  th {
    font-weight: bold;
    color: #333;
  }

  td {
    border-top: 1px solid #eee;
  }
`