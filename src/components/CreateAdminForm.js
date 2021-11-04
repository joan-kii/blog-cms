import React, { useContext, useRef } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { Context } from '../context/Context';

const CreateAdminForm = () => {

  const { createAdmin } = useContext(Context);

  const adminNameRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const passcodeRef = useRef();
  const handleSubmit = (e, admin, password, confPass, passcode) => {
    e.preventDefault();
    const newAdmin = {
      adminName: admin.current.value,
      password: password.current.value,
      confirmPassword: confPass.current.value,
      passcode: passcode.current.value
    };
    createAdmin(newAdmin);
  };

  return (
    <>
      <Form onSubmit={(e) => {
        handleSubmit(e, adminNameRef, passwordRef, confirmPasswordRef, passcodeRef);
          }} >
        <Form.Group 
          className="mb-3" 
          controlId="adminName" >
          <Form.Label>Admin Name</Form.Label>
          <Form.Control 
            inputype="text" 
            placeholder="Enter an Admin name" 
            ref={adminNameRef}
            required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="adminPassword">
          <Form.Label>Admin Password</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="Enter a password"
            ref={passwordRef} 
            required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="confirmPassword">
          <Form.Label>Confirm Admin Password</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="Confirm password"
            ref={confirmPasswordRef} 
            required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="passcode">
          <Form.Label>Passcode</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="Enter passcode" 
            ref={passcodeRef} 
            required />
          <Form.Text className="text-muted">
            Enter the secret password to create an admin.
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Create
        </Button> 
      </Form>
    </>
  )
};

export default CreateAdminForm;
