import React, { createContext, useState, useEffect} from 'react';

require('dotenv').config();

export const Context = createContext();

const ContextProvider = (props) => {
  
  // Context Utilities
  const [showModal, setShowModal] = useState(true);
  const [newAdmin, setNewAdmin] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [showLogin, setShowLogin] = useState(true);
  const [error, setError] = useState('');

  // Create New Admin
  const createAdmin = async (newAdmin) => {

    const URL = process.env.API_URL + 'admin/create';
    const options = {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(newAdmin),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    try {
      const response = await fetch(URL, options);
      // eslint-disable-next-line
      const data = response.json().then(result => {
        if (response.status !== 200) {
          setError(result.message[0].msg);
        } else {
          localStorage.setItem('token', result.token);
          localStorage.setItem('user', result.user);
          setCurrentUser(localStorage.getItem('user'));
          setError('');
        }
      });
    } catch (err) {
      setError(err.message);
    }
  };

  // Login Admin
  const loginAdmin = async (admin) => {

    const URL = process.env.API_URL + 'admin/login';
    const options = {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(admin),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    try {
      const response = await fetch(URL, options);
      // eslint-disable-next-line
      const data = response.json().then(result => {
        if (response.status !== 200) {
          setError(result.message);
        } else {
          localStorage.setItem('token', result.token);
          localStorage.setItem('user', result.user);
          setCurrentUser(localStorage.getItem('user'));
          setError('');
        }
      });
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    setCurrentUser(localStorage.getItem('user'));
  }, [])

  const value = {
    showModal, setShowModal, newAdmin, setNewAdmin,
    currentUser, setCurrentUser, showLogin, 
    setShowLogin, createAdmin, loginAdmin, error
  };

  return (
    <Context.Provider value={value}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
