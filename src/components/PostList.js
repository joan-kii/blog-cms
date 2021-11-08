import React, { useContext } from 'react';

import { Context } from '../context/Context';
import useFetchPostsList from '../hooks/useFetchPostList';

const PostList = () => {
  
  const { currentUser } = useContext(Context);
  const postList = useFetchPostsList();
  const firstPost = postList[0];
  
  return (
    <>
      <h1>Post List</h1>
      {currentUser && 
      <p>{firstPost}</p>}
    </>
  )
};

export default PostList;
