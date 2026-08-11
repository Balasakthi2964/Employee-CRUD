
import { createPortal } from "react-dom";

export default function DeleteModal({isdelOpen, ondelClose, children}){
    if (!isdelOpen) return null;

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
            <span onClick={ondelClose}>✖</span>
        </div>
        {children}
        
      </div>
    </div>,
    document.body
  )
}