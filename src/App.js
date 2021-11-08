import React from 'react';
import { Routes, Route } from 'react-router-dom';

import ContextProvider from './context/Context';
import Topbar from './components/Topbar';
import FormModal from './components/FormModal';
import PostList from './components/PostList';
import DraftList from './components/DraftList';

const App = () => {
  return (
    <>
      <ContextProvider>
        <Topbar />
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/drafts" element={<DraftList />} />
        </Routes>
        <FormModal />
      </ContextProvider>
    </>
  );
}

export default App;
