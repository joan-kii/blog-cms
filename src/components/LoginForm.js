import React, { useContext, useRef } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { Context } from '../context/Context';

const LoginForm = () => {

  const { loginAdmin } = useContext(Context);
  
  const adminNameRef = useRef();
  const adminPasswordRef = useRef();

  const handleSubmit = (e, adminName, password) => {
    e.preventDefault();
    const admin = {
      adminName: adminName.current.value,
      password: password.current.value
    };
    loginAdmin(admin);
  };

  return (
    <>
      <Form onSubmit={(e) => {handleSubmit(e, adminNameRef, adminPasswordRef)}}>
        <Form.Group className="mb-3" controlId="adminName">
          <Form.Label>Admin Name</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter your Admin name" 
            ref={adminNameRef} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="adminPassword">
          <Form.Label>Admin Password</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="Enter your Admin password"
            ref={adminPasswordRef} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button> 
      </Form>
    </>
  );
};

export default LoginForm;
