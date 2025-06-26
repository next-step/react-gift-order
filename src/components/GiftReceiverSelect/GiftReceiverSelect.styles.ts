import styled from '@emotion/styled';

export const SectionWrapper = styled.section`
  background-color: ${({ theme }) => theme.color.gray100};
  padding: ${({ theme }) => theme.spacing.spacing4};
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.color.gray00};
  border-radius: 25px;
  padding: ${({ theme }) => theme.spacing.spacing5};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
`;

export const Title = styled.h2`
  ${({ theme }) => theme.typography.title2Bold};
  color: ${({ theme }) => theme.color.text.default};
    display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.spacing2};
`;

export const IconBox = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.color.kakaoYellow};
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;