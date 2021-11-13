import React from 'react';
import { Routes, Route } from 'react-router-dom';

import ContextProvider from './context/Context';
import Topbar from './components/Topbar';
import FormModal from './components/FormModal';
import PostList from './components/PostList';
import DraftList from './components/DraftList';
import CreateDraft from './components/CreateDraft';

const App = () => {
  return (
    <div className="pb-5 h-full bg-secondary bg-opacity-25">
      <ContextProvider>
        <Topbar />
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/drafts" element={<DraftList />} />
          <Route path="/drafts/create" element={<CreateDraft />} />
        </Routes>
        <FormModal />
      </ContextProvider>
    </div>
  );
}

export default App;
