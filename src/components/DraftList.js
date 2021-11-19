import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

import { Context } from '../context/Context';
import useFetchDraftList from '../hooks/useFetchDraftList';
import getSingleDraft from '../modules/getSingleDraft';
import { Alert } from 'bootstrap';

const DraftList = () => {

  const { currentUser } = useContext(Context);
  const [error, setError] = useState('');
  const [loading, draftList]  = useFetchDraftList();
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h4">Edit Draft</Popover.Header>
      <Popover.Body>
        You can edit, publish or delete this draft.
      </Popover.Body>
    </Popover>
  );

  const navigate = useNavigate();

  const parser = new DOMParser();
  let htmlDoc;

  const handleEdit = async (slug) => {
    const response = await getSingleDraft(slug);
    if (response) {
      navigate('/drafts/update', {state: {response}});
    } else {
      setError('Ooops... Something went wrong.')
    }
  }; 

  return (
    <>
      {currentUser && 
        <div className="mx-auto mt-3 d-flex flex-column align-items-center">
          <h1 className="text-center text-muted">Draft List</h1>
          {loading && 
            <Spinner
              className="mt-5"
              animation="grow"
              variant="dark">
                <span className="visually-hidden">Loading...</span>
            </Spinner>}
          <div className="w-50">
            {!loading && 
              draftList.map((draft, index) => {
                htmlDoc = parser.parseFromString(draft.description, 'text/html');
                return (
                  <Card 
                    key={index}
                    className="mx-auto my-3 w-75">
                    <Card.Header as="h5">Draft {index + 1}</Card.Header>
                    <Card.Body>
                      <Card.Title>Title: {draft.title}</Card.Title>
                      <Card.Text>Description: {htmlDoc.getElementsByTagName('p')[0].textContent}</Card.Text>
                      <OverlayTrigger placement="left" overlay={popover}>
                        <Button onClick={() => handleEdit(draft.slug)}variant="outline-primary">Edit Draft</Button>
                      </OverlayTrigger>
                    </Card.Body>
                  </Card>
                )
              })
            }
          </div>
          {error && <Alert variant="danger">{error}</Alert>}       
        </div>
      }
    </>
  )
};

export default DraftList;
