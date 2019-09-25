import React from 'react';
import PropTypes from 'prop-types'
import '../../styles/modal-trigger.scss'

const ModalTrigger = ({
  buttonRef,
  onOpen,
  text
}) => (
    <button className="c-btn" onClick={onOpen} ref={buttonRef}>{text}</button>
);


ModalTrigger.propTypes = {
    buttonRef: PropTypes.object,
    onOpen: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
};

export default ModalTrigger
