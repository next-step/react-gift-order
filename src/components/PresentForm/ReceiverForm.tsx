import "@/pages/Modal.css"
import { useState } from "react"
import Layout from "../Layout"
import Text from "../Text"
import Blank from "../Blank"
import InputForm from "./InputForm"
import ReceiverList from "@/components/PresentForm/ReceiverList"

interface ModalProps {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
}

const Modal = ({ isOpen, setIsOpen }: ModalProps) => {
  if (!isOpen) return null

  return (
    <div className="Overlay">
      <div className="cart-container" onClick={(e) => e.stopPropagation()}>
        <div className="total-wrapper">
          <span className="total">합계</span>
          <span className="total-price">8,000원</span>
        </div>

        <div className="button-group">
          <button
            className="cancel"
            type="button"
            onClick={() => setIsOpen(false)}
          >
            취소
          </button>
          <button className="add-cart" type="button">
            장바구니 담기
          </button>
        </div>
      </div>
    </div>
  )
}

const ReceiverForm = () => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <Layout
      marginTop="spacing2"
      paddingUp="spacing4"
      paddingLeft="spacing4"
      paddingRight="spacing4"
      color="gray00"
      height="136px"
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text variant="title2Bold" margin="spacing0" padding="spacing0">
          받는 사람
        </Text>
        <button
          type="button"
          className="add-cart-button"
          onClick={() => {
            setOpenModal(true)
          }}
        >
          장바구니 담기
        </button>
      </div>
      {openModal ? <Modal isOpen={openModal} setIsOpen={setOpenModal} /> : null}

      <Blank height="12px" />
      <ReceiverList />
    </Layout>
  )
}
export default ReceiverForm
