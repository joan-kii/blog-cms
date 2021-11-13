import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

import { Context } from '../context/Context';
import useFetchPostsList from '../hooks/useFetchPostList';

const PostList = () => {
  
  const { currentUser } = useContext(Context);
  const [loading, postList]  = useFetchPostsList();
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h4">Convert to Draft</Popover.Header>
      <Popover.Body>
        You will find this post in drafts to delete or edit it again.
      </Popover.Body>
    </Popover>
  );
  
  return (
    <>
      {currentUser && 
        <div className="mx-auto mt-3 d-flex flex-column align-items-center">
          <h1 className="text-center text-muted">Post List</h1>
          {loading && 
            <Spinner
              className="mt-5"
              animation="grow"
              variant="dark">
                <span className="visually-hidden">Loading...</span>
            </Spinner>}
          <div className="w-50">
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
                      <OverlayTrigger placement="left" overlay={popover}>
                        <Button variant="outline-primary">Unpublish Post</Button>
                      </OverlayTrigger>
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
