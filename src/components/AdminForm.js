import React, { useState } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const AdminForm = () => {

  return (
    <>
      {newAdmin ?
        <Form>
          <Form.Group className="mb-3" controlId="adminName">
            <Form.Label>Admin Name</Form.Label>
            <Form.Control type="text" placeholder="Enter an Admin name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="adminPassword">
            <Form.Label>Admin Password</Form.Label>
            <Form.Control type="text" placeholder="Enter a password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="adminPassword">
            <Form.Label>Confirm Admin Password</Form.Label>
            <Form.Control type="text" placeholder="Confirm password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="passcode">
            <Form.Label>Passcode</Form.Label>
            <Form.Control type="text" placeholder="Enter passcode" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Create
          </Button>
          <Button variant="primary" onClick={toggleForm}>
            Login
          </Button> 
        </Form> :
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
          <Button variant="primary" onClick={toggleForm}>
            Create New Admin
          </Button>
        </Form>
      }
    </>
  );
};

export default AdminForm;
