import React, { useContext, useCallback } from 'react';
import LoginForm from './LoginForm';
import CreateAdminForm from './CreateAdminForm';

import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button";
import Alert from 'react-bootstrap/Alert';

import { Context } from '../context/Context';

const FormModal = () => {

  const { 
    showModal, setShowModal,
    currentUser, error,
    showLogin, setShowLogin
    } = useContext(Context);

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  const handleClose = useCallback(() => {
    setShowModal(false);
  }, [setShowModal]);

  return (
    <>
      { !currentUser &&
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
              <div className="d-flex align-items-center">
                <p className="mb-0">Don't have an admin account?</p>
                <Button className="ms-3" variant="primary" onClick={toggleForm}>
                  Create Admin
                </Button>
              </div> :
              <div className="d-flex align-items-center">
                <p className="mb-0">Do you have an admin account?</p>
                <Button className="ms-3" variant="primary" onClick={toggleForm}>
                  Login
                </Button>
              </div>}
          </Modal.Footer>
          { error && <Alert className="mx-3" variant="danger">{error}</Alert> }
        </Modal> }
    </>
  );
};

export default FormModal;
