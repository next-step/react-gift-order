import {
  GenderItem,
  GenderButton,
  GenderLabel,
  TypeButton,
} from './TrendingGiftRanking.styles'
import type { Gender, Type } from './TrendingGiftRanking'

export const FilterGender: React.FC<{
  icon: string
  label: Gender
  isActive: boolean
  onClick: (label: Gender) => void
}> = ({ icon, label, isActive, onClick }) => {
  return (
    <GenderItem onClick={() => onClick(label)}>
      <GenderButton isActive={isActive}>{icon}</GenderButton>
      <GenderLabel isActive={isActive}>{label}</GenderLabel>
    </GenderItem>
  )
}

export const FilterType: React.FC<{
  label: Type
  isActive: boolean
  onClick: (label: Type) => void
}> = ({ label, isActive, onClick }) => {
  return (
    <TypeButton isActive={isActive} onClick={() => onClick(label)}>
      {label}
    </TypeButton>
  )
}
