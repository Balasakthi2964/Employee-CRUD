
import { createPortal } from "react-dom";

export default function Modal({isOpen, onClose, children}){
    if (!isOpen) return null;

  return createPortal(
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        background: 'white',
        padding: '20px',
        borderRadius: '8px',
        width: '35%'
      }}>
        <div className="form-close-BTN">
            <span onClick={onClose}>✖</span>
        </div>
        {children}
        
      </div>
    </div>,
    document.body
  )
}