import styled from "@emotion/styled"
import type { CardTheme } from "@/context/CardContext"
import theme from "@/styles/theme"

interface PreviewCardStyle {
  borderRadius: keyof typeof theme.space
  margin: keyof typeof theme.space
  marginTop: keyof typeof theme.space
}
const PreviewCardLayout = styled.div<PreviewCardStyle>`
  ${({ theme, marginTop, borderRadius }) => {
    return `
      margin-top: ${theme.space[marginTop]};
      border-radius: ${theme.space[borderRadius]};
      overflow: hidden;

      background: transparent;
      width: 100%;
      height: 240px;
      display: flex;
      align-items: center;
      justify-content: center;
    `
  }}
`

const Img = styled.img`
  width: 360px;
  height: 240px;
  object-fit: cover;
  border-radius: ${theme.space.spacing4};
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
`
interface Props {
  card: CardTheme
}
export default function PreviewCard({ card }: Props) {
  return (
    <PreviewCardLayout
      borderRadius="spacing4"
      marginTop="spacing4"
      margin="spacing8"
    >
      <Img src={card.imageUrl ?? card.thumbUrl} alt={card.defaultTextMessage} />
    </PreviewCardLayout>
  )
}
