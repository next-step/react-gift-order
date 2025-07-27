import styled from '@emotion/styled';
import { theme } from '@/styles/theme';

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70vw;
  max-width: 550px;
  height: 50vh;
  gap: ${theme.spacing[3]};
  overflow-y: auto;
`;
