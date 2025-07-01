import { PresentContext } from "@/context/PresentContext"
import MOCK_PRESENT from "@/mock_present"
import type { PropsWithChildren } from "react"

const PresentProvider = ({ children }: PropsWithChildren) => {
  return (
    <PresentContext.Provider value={MOCK_PRESENT}>
      {children}
    </PresentContext.Provider>
  )
}

export default PresentProvider
