import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

const Topbar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Blog CMS</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="">Posts</Nav.Link>
            <Nav.Link href="">Drafts</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
};

export default Topbar;
