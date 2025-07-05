import styled from "@emotion/styled";
import type React from "react";
import Navigation from "@/components/common/Navigation";

type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return (
    <Style>
      <Navigation />
      <Content>{children}</Content>
    </Style>
  );
};

const Style = styled.div`
  background-color: ${({ theme }) => theme.color.backgroundColor.fill};
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Content = styled.div`
  max-width: 720px;
  width: 100%;
  padding-top: 45px;
`;

export default Container;
