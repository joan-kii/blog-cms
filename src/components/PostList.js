import React, { useContext } from 'react';

import { Context } from '../context/Context';
import useFetchPostsList from '../hooks/useFetchPostList';

const PostList = () => {
  
  const { currentUser } = useContext(Context);
  const [loading, postList]  = useFetchPostsList();
  
  return (
    <>
      {currentUser && 
        <div>
          <h1>Post List</h1>
          {loading && <p>Loading...</p>}
          {!loading && 
            postList.map((post, index) => {
              return (
                <div key={index}>
                  <p>{post.title}</p>
                  <p>{post.description}</p>
                </div>
              )
            })}
        </div>
      }
    </>
  )
};

export default PostList;
