import styled from 'styled-components';
import React from 'react';

const AlertModal = (props) => {
  const onClickClose = () => {
    props.val(false);
  };

  return (
    <ModalContainer onClick={onClickClose}>
      <Modal>
          <p className="modal-txt">숫자를 입력해주세요.</p>
        <button onClick={onClickClose} className="modal-check-btn">
          OK
        </button>
      </Modal>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 10;
`;

const Modal = styled.div`
  width: 230px;
  border-radius: 5px;
  border: 1px solid lightgray;
  background-color: #f0f0f0;
  .modal-txt {
    text-align: center;
    padding: 20px 10px;
    font-weight: 500;
  }
  .modal-check-btn {
    border-top: 1px solid lightgray;
    display: block;
    padding: 10px 20px 10px;
    width: 100%;
    color: #2f7ef7;
    cursor: pointer;
  }
`;

export default AlertModal;
