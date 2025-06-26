import styled from '@emotion/styled';


export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(5, minmax(80px, 1fr));
  gap: ${({ theme }) => theme.spacing.spacing3};
  padding: ${({ theme }) => theme.spacing.spacing4};
  margin-bottom: 20px;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Name = styled.p`
  margin-top: ${({ theme }) => theme.spacing.spacing2};
  ${({ theme }) => theme.typography.label2Regular};
  color: ${({ theme }) => theme.color.text.default};
  text-align: center;
`;

// 배너부분
export const Banner = styled.div`
  width: 660px;
  background-color: ${({ theme }) => theme.color.kakaoYellow};
  padding: 16px;
  margin: 0 auto;
  border-radius: 20px;
  margin-bottom: 40px;

  p {
    ${({ theme }) => theme.typography.subtitle2Regular};
    color: ${({ theme }) => theme.color.text.sub};
  }

  h3 {
    ${({ theme }) => theme.typography.subtitle1Bold};
  }
`;
