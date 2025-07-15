import "./Modal.css"

interface ModalProps {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
}

const Modal = ({ isOpen, setIsOpen }: ModalProps) => {
  if (!isOpen) return null

  return (
    <div className="Overlay" onClick={() => setIsOpen(false)}>
      <div
        className="cart-container"
        onClick={(e) => e.stopPropagation()} // 오버레이 클릭 전파 방지
      >
        <span className="product-name">[풀무원] 국물 떡볶이</span>
        <span className="product-price">4,000원</span>

        <div className="count">
          <button className="minus">-</button>
          <div className="number">2</div>
          <button className="plus">+</button>
        </div>

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

export default Modal
