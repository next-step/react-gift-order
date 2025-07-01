import styled from "@emotion/styled";

const Divider = () => {
  return <Style />;
};

const Style = styled.div`
  width: 100%;
  height: 30px;
  background-color: ${({ theme }) => theme.color.backgroundColor.default};
`;

export default Divider;
