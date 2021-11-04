import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const LoginForm = () => {

  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="adminName">
          <Form.Label>Admin Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your Admin name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="adminPassword">
          <Form.Label>Admin Password</Form.Label>
          <Form.Control type="text" placeholder="Enter your Admin password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button> 
      </Form>
    </>
  );
};

export default LoginForm;
