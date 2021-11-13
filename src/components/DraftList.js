import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

import { Context } from '../context/Context';
import useFetchDraftList from '../hooks/useFetchDraftList';

const DraftList = () => {

  const { currentUser } = useContext(Context);
  const [loading, draftList]  = useFetchDraftList();
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h4">Edit Draft</Popover.Header>
      <Popover.Body>
        You can edit, publish or delete this draft.
      </Popover.Body>
    </Popover>
  );

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
                return (
                  <Card 
                    key={index}
                    className="mx-auto my-3 w-75">
                    <Card.Header as="h5">Draft {index + 1}</Card.Header>
                    <Card.Body>
                      <Card.Title>Title: {draft.title}</Card.Title>
                      <Card.Text>Description: {draft.description}</Card.Text>
                      <OverlayTrigger placement="left" overlay={popover}>
                        <Button variant="outline-primary">Edit Draft</Button>
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

export default DraftList;
