import styled from '@emotion/styled'

const tabs = ['받고 싶어한', '많이 선물한', '위시로 받은']

const TabWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.spacing3};
`

const Tab = styled.button`
  background: none;
  border: none;
  font-size: 0.875rem;
  cursor: pointer;
`

export const RankingSortTabs = () => {
  return (
    <TabWrapper>
      {tabs.map((label) => (
        <Tab key={label}>{label}</Tab>
      ))}

    </TabWrapper>
  )
}
