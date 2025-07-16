import ReactDOM from 'react-dom';

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

const Modal = ({ children, onClose }: ModalProps) => {
  return ReactDOM.createPortal(
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.4)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: '#fff',
          padding: '24px',
          borderRadius: '12px',
          minWidth: '300px',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
