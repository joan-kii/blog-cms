import React from 'react';
import { Routes, Route } from 'react-router-dom';

import ContextProvider from './context/Context';
import Topbar from './components/Topbar';
import FormModal from './components/FormModal';
import PostList from './components/PostList';
import DraftList from './components/DraftList';
import CreateDraft from './components/CreateDraft';
import ManageComments from './components/ManageComments';

const App = () => {
  return (
    <div className="pb-5 bg-secondary bg-opacity-25">
      <ContextProvider>
        <Topbar />
        <Routes>
          <Route path="/blog-cms/" element={<PostList />} />
          <Route path="/blog-cms/drafts" element={<DraftList />} />
          <Route path="/blog-cms/drafts/create" element={<CreateDraft />} />
          <Route path="/blog-cms/drafts/update" element={<CreateDraft />} />
          <Route path="/blog-cms/post/comments" element={<ManageComments />} />
        </Routes>
        <FormModal />
      </ContextProvider>
    </div>
  );
}

export default App;
