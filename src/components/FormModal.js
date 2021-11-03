import React, { useState, useContext } from "react";
import AdminForm from "./AdminForm";

import Modal from 'react-bootstrap/Modal';

import { Context } from '../context/Context';

const FormModal = () => {

  const { showModal } = useContext(Context);

  return (
    <>
      <Modal show={showModal} onHide={handleCloseModal}>
        <AdminForm />
      </Modal>
    </>
  );
};

export default FormModal;
