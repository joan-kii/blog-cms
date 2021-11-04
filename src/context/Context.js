import React, { createContext, useState } from 'react';

export const Context = createContext();

const ContextProvider = (props) => {
  
  const [showModal, setShowModal] = useState(true);
  const [newAdmin, setNewAdmin] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [showLogin, setShowLogin] = useState(true);

  const createAdmin = async (newAdmin) => {

    const URL = 'http://localhost:5000/admin/create';
    const options = {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify(newAdmin),
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const req = await fetch(URL, options);
      console.log(req);
    } catch (err) {
      console.log(err);
    }
  };

  const value = {
    showModal, setShowModal, newAdmin, setNewAdmin,
    currentUser, showLogin, setShowLogin, 
    createAdmin
  };

  return (
    <Context.Provider value={value}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
