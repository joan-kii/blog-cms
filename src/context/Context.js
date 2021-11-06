import React, { createContext, useState } from 'react';

export const Context = createContext();

const ContextProvider = (props) => {
  
  const [showModal, setShowModal] = useState(true);
  const [newAdmin, setNewAdmin] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [showLogin, setShowLogin] = useState(true);
  const [error, setError] = useState('');

  const createAdmin = async (newAdmin) => {

    const URL = 'http://localhost:5000/admin/create';
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
      const data = response.json().then(user => {
        localStorage.setItem('token', user.token);
        localStorage.setItem('user', user.user);
        setCurrentUser(localStorage.getItem('user'));
      });
    } catch (err) {
      setError(err.message);
    }
  };

  const value = {
    showModal, setShowModal, newAdmin, setNewAdmin,
    currentUser, showLogin, setShowLogin, 
    createAdmin, error
  };

  return (
    <Context.Provider value={value}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
