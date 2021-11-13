import React, { useContext } from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import { Context } from '../context/Context';

const Topbar = () => {

  const { currentUser, setCurrentUser } = useContext(Context);
  
  const handleLogout = () => {
    localStorage.removeItem('user');
    setCurrentUser(null);
  };

  return (
    <>
      <Navbar 
        sticky="top" 
        bg="dark" 
        variant="dark">
        <Container>
          <Link className="nav-link" to="/">
            <Navbar.Brand>Blog CMS</Navbar.Brand>
          </Link>
          <Nav className="me-auto">
            <Link className="nav-link" to="/">Posts</Link>
            <Link className="nav-link" to="/drafts">Drafts</Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            { currentUser && 
              <div>
                <Navbar.Text className="me-3">
                  {currentUser}
                </Navbar.Text>
                <Button 
                  className="me-3"
                  variant="outline-light"
                  onClick={handleLogout}>
                    Logout
                </Button>
                <Link 
                  className="btn btn-outline-light"
                  to="/drafts/create">
                    New Draft
                </Link>
              </div> }
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
};

export default Topbar;
