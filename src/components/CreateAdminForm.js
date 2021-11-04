import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const CreateAdminForm = () => {

  return (
    <>
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
