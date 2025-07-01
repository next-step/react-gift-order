import styled from '@emotion/styled';
import Text from '@/common/Text';

const SelectReceiverNotice = () => {
  return (
    <Layout>
      <Content>
        <SelectReceiveBtn></SelectReceiveBtn>
        <Text size="subtitle1" weight="bold">
          선물할 친구를 선택해주세요.
        </Text>
      </Content>
    </Layout>
  );
};

export default SelectReceiverNotice;

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.spacing11};
  background-color: ${({ theme }) => theme.colors.disabled};
  height: 106px;
`;
const Content = styled.div`
  margin: ${({ theme }) => theme.spacing.spacing4};
  display: flex;
  align-items: center;
  width: 696px;
  height: 74px;
  border-radius: ${({ theme }) => theme.spacing.spacing4};
  background-color: ${({ theme }) => theme.colors.gray00};
`;
const SelectReceiveBtn = styled.button`
  background-color: ${({ theme }) => theme.colors.yellow600};
  margin: 0 ${({ theme }) => theme.spacing.spacing4} 0
    ${({ theme }) => theme.spacing.spacing4};
  width: 42px;
  height: 42px;
  border-radius: ${({ theme }) => theme.spacing.spacing4};
  border: 0px;
`;
