import React, { createContext, useState } from 'react';

export const Context = createContext();

const ContextProvider = (props) => {
  
  const [showModal, setShowModal] = useState(true);
  const [newAdmin, setNewAdmin] = useState(false);

  const value = {
    showModal, setShowModal,
    newAdmin, setNewAdmin
  };

  return (
    <Context.Provider value={value}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
