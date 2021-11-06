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
      mode: 'cors',
      body: JSON.stringify(newAdmin),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    try {
      const response = await fetch(URL, options);
      const user = response.json();
      console.log(user);
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
