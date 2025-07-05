import styled from '@emotion/styled';

const StyledTopestDiv = styled.div`
  background-color: ${({ theme }) => theme.palette.gray500};
  width: 720px;

  .title1Bold {
    ${({ theme }) => theme.typography.title1Bold}
  }
  .title1Regular {
    ${({ theme }) => theme.typography.title1Regular}
  }
  .title2Bold {
    ${({ theme }) => theme.typography.title2Bold}
  }
  .title2Regular {
    ${({ theme }) => theme.typography.title2Regular}
  }
  .subtitle1Bold {
    ${({ theme }) => theme.typography.subtitle1Bold}
  }
  .subtitle1Regular {
    ${({ theme }) => theme.typography.subtitle1Regular}
  }
  .subtitle2Bold {
    ${({ theme }) => theme.typography.subtitle2Bold}
  }
  .subtitle2Regular {
    ${({ theme }) => theme.typography.subtitle2Regular}
  }
  .body1Bold {
    ${({ theme }) => theme.typography.body1Bold}
  }
  .body1Regular {
    ${({ theme }) => theme.typography.body1Regular}
  }
  .body2Bold {
    ${({ theme }) => theme.typography.body2Bold}
  }
  .body2Regular {
    ${({ theme }) => theme.typography.body2Regular}
  }
  .label1Bold {
    ${({ theme }) => theme.typography.label1Bold}
  }
  .label1Regular {
    ${({ theme }) => theme.typography.label1Regular}
  }
  .label2Bold {
    ${({ theme }) => theme.typography.label2Bold}
  }
  .label2Regular {
    ${({ theme }) => theme.typography.label2Regular}
  }
  .background-default {
    background-color: ${({ theme }) => theme.sementicPalette.backgroundDefault};
  }
  .font-red {
    color: ${({ theme }) => theme.palette.red800};
  }
  .border-red {
    border: 1px ${({ theme }) => theme.palette.red800} solid;
  }
  .padding-6-12 {
    padding: 6px 12px;
  }
  .margin-left-20 {
    margin-left: 20px;
  }
`;

export default StyledTopestDiv;
