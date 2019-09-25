import React from 'react';
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom';
import ReactFocusTrap from 'focus-trap-react';

const ModalContent = ({
  ariaLabel,
  buttonRef,
  content,
  modalRef,
  onClickAway,
  onClose,
  role = 'dialog'
}) => {
    return ReactDOM.createPortal(
        <ReactFocusTrap
            tag="aside"
            className="c-modal-cover"
            role={role}
            aria-label={ariaLabel}
            aria-modal="true"
            onClick={onClickAway}
        >
            <div className="c-modal" ref={modalRef}>
                <button className="c-modal__close" aria-labelledby="close-modal" onClick={onClose} ref={buttonRef}>
                    <span id="close-modal" className="u-hide-visually">Close Modal</span>
                    <svg viewBox="0 0 40 40" className="c-modal__close-icon">
                        <path d="M 10,10 L 30,30 M 30,10 L 10,30"></path>
                    </svg>
                </button>
                <div className="c-modal__body">{content}</div>
            </div>
        </ReactFocusTrap>,
        document.body
    );
};

ModalContent.propTypes = {
    ariaLabel: PropTypes.string.isRequired,
    buttonRef: PropTypes.object,
    content: PropTypes.object.isRequired,
    modalRef: PropTypes.object,
    onClickAway: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    role: PropTypes.string
};

export default ModalContent
