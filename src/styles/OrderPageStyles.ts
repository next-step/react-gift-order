import styled from "@emotion/styled";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.gray100};
  padding: 16px 0 120px;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  padding: 0 16px;
  box-sizing: border-box;
`;

export const SectionCard = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray00};
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
`;

export const StickyFooter = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: transparent;
`;

export const StickyInner = styled.div`
  max-width: 720px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  width: 100%;
`;

export const SectionTitle = styled.p`
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray900};
  margin: 0;
`;

export const AddReceiverButton = styled.button`
  font-size: 0.875rem;
  font-weight: 400;
  padding: 8px 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.gray200};
  color: ${({ theme }) => theme.colors.gray900};
  border: none;
  cursor: pointer;
`;

export const EmptyBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.colors.gray400};
  border-radius: 8px;
  margin-top: 12px;
`;

export const EmptyText = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.gray600};
  text-align: center;
  margin: 0;
`;