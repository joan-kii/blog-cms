import React, { useContext, useEffect, useCallback } from 'react';
import LoginForm from './LoginForm';
import CreateAdminForm from './CreateAdminForm';

import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button";

import { Context } from '../context/Context';

const FormModal = () => {

  const { 
    showModal, setShowModal,
    currentUser,
    showLogin, setShowLogin
    } = useContext(Context);

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  const handleClose = useCallback(() => {
    setShowModal(false);
  }, [setShowModal]);

  useEffect(() => {
    if (currentUser) handleClose();
  }, [currentUser, handleClose]);

  return (
    <>
      <Modal 
        show={showModal} 
        onHide={handleClose}
        backdrop="static"
        centered>
        <Modal.Header>
          <Modal.Title>
            {showLogin ? "Login" : "Create New Admin"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {showLogin ?
            <LoginForm /> :
            <CreateAdminForm />}
        </Modal.Body>
        <Modal.Footer>
          {showLogin ?
            <div>
              <p>Don't have an admin account?</p>
              <Button variant="primary" onClick={toggleForm}>
                Create Admin
              </Button>
            </div> :
            <div>
              <p>Do you have an admin account?</p>
              <Button variant="primary" onClick={toggleForm}>
                Login
              </Button>
            </div>}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FormModal;