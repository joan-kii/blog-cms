import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

import { Context } from '../context/Context';
import useFetchDraftList from '../hooks/useFetchDraftList';

const DraftList = () => {

  const { currentUser } = useContext(Context);
  const [loading, draftList]  = useFetchDraftList();

  return (
    <>
      {currentUser && 
        <div className="mx-auto mt-3 w-50">
          <h1 className="text-center">Draft List</h1>
          {loading && 
            <Spinner
              animation="grow"
              variant="dark">
                <span className="visually-hidden">Loading...</span>
            </Spinner>}
          <div>
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
                      <Button variant="outline-primary">Edit Draft</Button>
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
