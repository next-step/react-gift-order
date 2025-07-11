import ReactDOM from 'react-dom';

interface Modal {
  children: React.ReactNode;
  modalVisible: boolean;
}

export const Modal = ({ children, modalVisible }: Modal) => {
  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot) return null;
  if (!modalVisible) return null;

  return ReactDOM.createPortal(<div style={styles.overlay}>{children}</div>, modalRoot);
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '1',
  } as const,
};
