// src/components/PresentForm/ReceiverForm.tsx
import { useState } from "react"
import { useFormContext } from "react-hook-form"
import Layout from "@/components/Layout"
import Blank from "@/components/Blank"
import Text from "@/components/Text"
import ReceiverList from "@/components/PresentForm/ReceiverList"
import ReceiverModal from "@/components/PresentForm/ReceiverModal"

const ReceiverForm = () => {
  const [openModal, setOpenModal] = useState(false)
  const { watch } = useFormContext()
  const receivers = watch("receivers")

  return (
    <>
      <Layout
        marginTop="spacing2"
        marginBottom="spacing2"
        paddingUp="spacing4"
        paddingLeft="spacing4"
        paddingRight="spacing4"
        color="gray00"
        height="100%"
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Text variant="title2Bold" margin="spacing0" padding="spacing0">
            받는 사람
          </Text>
          <button type="button" onClick={() => setOpenModal(true)}>
            추가
          </button>
        </div>

        <Blank height="12px" />
        <ReceiverList receivers={receivers} />
      </Layout>

      {openModal && <ReceiverModal close={() => setOpenModal(false)} />}
    </>
  )
}

export default ReceiverForm
