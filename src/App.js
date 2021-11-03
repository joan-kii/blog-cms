import React from 'react';
import ContextProvider from './context/Context';
import Topbar from './components/Topbar';
import FormModal from './components/FormModal';

const App = () => {
  return (
    <>
    <ContextProvider>
      <Topbar />
      {/* <FormModal /> */}
    </ContextProvider>
    </>
  );
}

export default App;
