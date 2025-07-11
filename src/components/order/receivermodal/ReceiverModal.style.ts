import styled from '@emotion/styled';

export const Background = styled.div`
  position: fixed;
  inset: 0px;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  z-index: 1000;
  opacity: 1;
  visibility: visible;
  transition:
    opacity 300ms,
    visibility 300ms;
  padding: 16px;
`;
export const ModalWrapper = styled.div`
  background: rgb(255, 255, 255);
  border-radius: 8px;
  max-height: calc(-7.5rem + 100vh);
  max-width: 37.5rem;
  width: 100%;
  height: 100%;
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const FormList = styled.div`
  flex: 1 1 0%;
  overflow: auto;
`;

export const Label = styled.p`
  min-width: 3.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.375rem;
  color: rgb(42, 48, 56);
  margin: 0px;
  text-align: left;
`;
