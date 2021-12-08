import React, { useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { Context } from '../context/Context';
import deleteComment from '../modules/deleteComment';

const ManageComments = () => {

  const { currentUser } = useContext(Context);
    
  const navigate = useNavigate();
  const location = useLocation();
  const comments = location.state.comments;
  const slug = location.state.slug;
    
  const delComment = async (index) => {
    const deleted = await deleteComment(slug, index);
    if (deleted) navigate('/');
  };

  return (
    <>
      {currentUser &&
        <div className="mx-auto mt-3 d-flex flex-column align-items-center">
          <h1 className="text-center text-muted">Comments</h1>
          <div className="w-50">
            {comments.map((comment, index) => {
              return (
                <Card 
                  key={index}
                  className="mx-auto my-3 w-75">
                  <Card.Header className="d-flex justify-content-between" as="h5">
                    Comment {index + 1}
                  </Card.Header>
                  <Card.Body>
                    <Card.Title>User: {comment.name}</Card.Title>
                    <Card.Text>Message: {comment.comment}</Card.Text>
                    <Button 
                      onClick={() => delComment(index)} 
                      variant="outline-danger">Delete Comment</Button>
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

export default ManageComments
