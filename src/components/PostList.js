import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { Context } from '../context/Context';
import useFetchPostsList from '../hooks/useFetchPostList';

const PostList = () => {
  
  const { currentUser } = useContext(Context);
  const [loading, postList]  = useFetchPostsList();
  
  return (
    <>
      {currentUser && 
        <div className="mx-auto mt-3 w-50">
          <h1 className="text-center">Post List</h1>
          {loading && <p>Loading...</p>}
          <div>
            {!loading && 
              postList.map((post, index) => {
                return (
                  <Card 
                    key={index}
                    className="mx-auto my-3 w-75">
                    <Card.Header as="h5">Post {index + 1}</Card.Header>
                    <Card.Body>
                      <Card.Title>Title: {post.title}</Card.Title>
                      <Card.Text>Description: {post.description}</Card.Text>
                      <Button variant="outline-primary">Edit Post</Button>
                    </Card.Body>
                  </Card>
                )
              })}
            </div>
        </div>
      }
    </>
  )
};

export default PostList;
