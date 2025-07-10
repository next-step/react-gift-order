import styled from '@emotion/styled';

export const ImageWrapper = styled.div`
  width: 50%;
  border-radius: 12px;
  overflow: hidden;
  margin: 12px auto 45px auto;

  img {
    width: 100%;
    object-fit: contain;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const Textarea = styled.textarea`
  width: 95%;
  height: 40px;
  padding: 12px;
  font-size: 14px;
  border-radius: 8px;
  resize: none;
  border: 1px solid ${({ theme }) => theme.color.border.default};
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.color.kakaoYellow};
  }
`;
