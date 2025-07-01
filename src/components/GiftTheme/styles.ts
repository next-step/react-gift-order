import styled from '@emotion/styled';

export const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.spacing10} ${({ theme }) => theme.spacing.spacing4}; 
  background-color: ${({ theme }) => theme.colors.semantic.backgroundDefault};
`;

export const Title = styled.h3`
  font : ${({ theme }) => theme.typography.title1Bold};
  color: ${({ theme }) => theme.colors.semantic.textDefault};
  margin-bottom: ${({ theme }) => theme.spacing.spacing4};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: ${({ theme }) => theme.spacing.spacing3};
`;

export const Item = styled.div`
  text-align: center;
`;

export const Image = styled.img`
  width: ${({ theme }) => theme.spacing.spacing13};
  height: ${({ theme }) => theme.spacing.spacing13};
  object-fit: contain;
  margin: 0 auto;
`;

export const Label = styled.div`
  font : ${({ theme }) => theme.typography.label2Regular};
  color: ${({ theme }) => theme.colors.semantic.textDefault};
  margin-top: ${({ theme }) => theme.spacing.spacing1};
`;
