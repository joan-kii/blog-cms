import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Badge from 'react-bootstrap/Badge';

import { Context } from '../context/Context';
import useFetchPostsList from '../hooks/useFetchPostList';
import publishPost from '../modules/publishPost'; 
import convertToDraft from '../modules/convertToDraft';
import deletePost from '../modules/deletePost'; 

const PostList = () => {
  
  const { currentUser } = useContext(Context);

  const navigate = useNavigate();

  const parser = new DOMParser();
  let htmlDoc;

  const [loading, postList]  = useFetchPostsList();
  const popoverConvert = (
    <Popover id="popover-convert">
      <Popover.Header as="h4">Convert to Draft</Popover.Header>
      <Popover.Body>
        You will find this post in drafts to edit it again.
      </Popover.Body>
    </Popover>
  );
  const popoverDelete = (
    <Popover id="popover-delete">
      <Popover.Header as="h4">Delete Post</Popover.Header>
      <Popover.Body>
      Are you sure you want to delete this post?
      </Popover.Body>
    </Popover>
  );

  const handlePublish = async (slug) => {
    const response = await publishPost(slug);
    if (response) window.location.reload();
  };

  const manageComments = (slug, comments) => {
    navigate('/blog-cms/post/comments', {state: {slug, comments}});
  };

  const handleDelete = async (slug) => {
    const delPost = await deletePost(slug);
    if (delPost) window.location.reload();
  };

  const editPost = async (slug) => {
    const edPost = convertToDraft(slug);
    if (edPost) navigate('/blog-cms/drafts');
  };

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
                htmlDoc = parser.parseFromString(post.description, 'text/html');
                return (
                  <Card 
                    key={index}
                    className="mx-auto my-3 w-75">
                    <Card.Header className="d-flex justify-content-between" as="h5">
                      {post.published ? 
                        <Badge bg="success">Published</Badge> :
                        <Badge bg="danger">Not Published</Badge>
                      }
                      Post {index + 1}
                    </Card.Header>
                    <Card.Body>
                      <Card.Title>Title: {post.title}</Card.Title>
                      <Card.Text>Description: {htmlDoc.getElementsByTagName('p')[0].textContent}</Card.Text>
                      <Card.Text>Comments: {post.comments.length}</Card.Text>
                      <div className="d-flex justify-content-between">
                        <OverlayTrigger placement="left" overlay={popoverConvert}>
                          <Button 
                            onClick={() => editPost(post.slug)} 
                            variant="outline-primary">Edit Post</Button>
                        </OverlayTrigger>
                        {post.published ? 
                          <Button 
                            onClick={() => handlePublish(post.slug)} 
                            variant="outline-primary">Unpublish Post</Button> :
                          <Button 
                            onClick={() => handlePublish(post.slug)} 
                            variant="outline-primary">Publish Post</Button>
                        }
                        {(post.comments.length > 0) &&
                          <Button 
                            onClick={() => manageComments(post.slug, post.comments)} 
                            variant="outline-primary">Manage Comments</Button>
                        }
                        <OverlayTrigger placement="right" overlay={popoverDelete}>
                          <Button onClick={() => handleDelete(post.slug)} variant="outline-danger">Delete Post</Button>
                        </OverlayTrigger>
                      </div>
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
