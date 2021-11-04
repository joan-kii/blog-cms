import React, { createContext, useState } from 'react';

export const Context = createContext();

const ContextProvider = (props) => {
  
  const [showModal, setShowModal] = useState(true);
  const [newAdmin, setNewAdmin] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [showLogin, setShowLogin] = useState(true);

  const value = {
    showModal, setShowModal,
    newAdmin, setNewAdmin,
    currentUser, showLogin,
    setShowLogin
  };

  return (
    <Context.Provider value={value}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
