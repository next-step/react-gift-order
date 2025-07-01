import { PresentThemeContext } from "@/context/PresentThemeContext"
import MOCK_DATA from "../mock"

interface Props {
  children: React.ReactNode
}

const PresentThemeProvider = ({ children }: Props) => {
  return (
    <PresentThemeContext.Provider value={MOCK_DATA}>
      {children}
    </PresentThemeContext.Provider>
  )
}

export default PresentThemeProvider
