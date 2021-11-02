import React, { useState } from "react";

import Modal from 'react-bootstrap/Modal';

const LoginModal = () => {
  const [showModal, setShowModal] = useState(true);
  const handleCloseModal = setShowModal(false);

  return (
    <>
      <Modal show={showModal} onHide={handleCloseModal}>
      </Modal>
    </>
  );
};

export default LoginModal;