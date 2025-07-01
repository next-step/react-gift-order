import styled from "@emotion/styled";

type WrongProps = {
  size: string;
};

const Wrong = ({ size }: WrongProps) => {
  return (
    <Img
      size={size}
      alt="not found"
      src="https://gift-s.kakaocdn.net/dn/gift/webapp/images/m640/img_not_found.png"
    ></Img>
  );
};

export default Wrong;

const Img = styled.img<{ size: string }>`
  width: ${({ size }) => size};
  height: auto;
  cursor: pointer;
`;
