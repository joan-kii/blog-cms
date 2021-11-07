import React, { useContext } from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

import { Context } from '../context/Context';

const Topbar = () => {

  const { currentUser, setCurrentUser } = useContext(Context);
  
  const handleLogout = () => {
    localStorage.removeItem('user');
    setCurrentUser(null);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Blog CMS</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="">Posts</Nav.Link>
            <Nav.Link href="">Drafts</Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            { currentUser && 
              <div>
                <Navbar.Text className="me-3">
                  {currentUser}
                </Navbar.Text>
                <Button 
                  variant="outline-secondary"
                  onClick={handleLogout}>
                    Logout
                </Button>
              </div> }
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
};

export default Topbar;
