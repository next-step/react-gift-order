// src/components/FriendSelector.tsx
import { useState } from 'react'
import styled from '@emotion/styled'
import plusIcon from '@/assets/plus.png'
import { colors } from '@/theme/color'
import { typography } from '@/theme/typography'
import { spacing } from '@/theme/spacing'
interface FriendSelectorProps {
  friends: string[]
  onSelect?: (friend: string) => void
}

const Wrapper = styled.section`
  background: ${colors.background.default};
  border-radius: ${spacing.spacing2};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: ${spacing.spacing3} ${spacing.spacing4};
  position: relative;
`

const Button = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  background: none;
  border: none;
  padding: 0;
  font-size: ${typography.subtitle2Regular.fontSize};
  font-weight: ${typography.subtitle2Regular.fontWeight};
  line-height: ${typography.subtitle2Regular.lineHeight};
  color: ${colors.text.default};
  text-align: left;
  cursor: pointer;
`

const IconCircle = styled.div`
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  background: ${colors.brand.kakaoYellow};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${spacing.spacing2};
`

const Dropdown = styled.ul`
  position: absolute;
  top: calc(100% + ${spacing.spacing1});
  left: 0;
  right: 0;
  margin: ${spacing.spacing0};
  padding: ${spacing.spacing1} ${spacing.spacing0};
  background: ${colors.background.default};
  border: 1px solid ${colors.border.default};
  border-radius: ${spacing.spacing1};
  list-style: none;
  z-index: 10;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const Item = styled.li`
  padding: ${spacing.spacing2} ${spacing.spacing3};
  font-size: ${typography.subtitle2Regular.fontSize};
  font-weight: ${typography.subtitle2Regular.fontWeight};
  line-height: ${typography.subtitle2Regular.lineHeight};
  color: ${colors.text.default};
  cursor: pointer;
  &:hover {
    background: ${colors.background.fill};
  }
`

const FriendSelector = ({ friends, onSelect }: FriendSelectorProps) => {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<string | null>(null)

  const handleSelect = (friend: string) => {
    setSelected(friend)
    setOpen(false)
    onSelect?.(friend)
  }

  return (
    <Wrapper>
      <Button onClick={() => setOpen((p) => !p)}>
        <IconCircle>
          <img src={plusIcon} alt="plus" width="16" height="16" />        
        </IconCircle>
        {selected ?? '선물할 친구를 선택해 주세요.'}
      </Button>

      {open && (
        <Dropdown>
          {friends.map((friend) => (
            <Item key={friend} onClick={() => handleSelect(friend)}>
              {friend}
            </Item>
          ))}
        </Dropdown>
      )}
    </Wrapper>
  )
}

export default FriendSelector