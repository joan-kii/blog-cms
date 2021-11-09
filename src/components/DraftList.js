import React, { useContext } from 'react';

import { Context } from '../context/Context';
import useFetchDraftList from '../hooks/useFetchDraftList';

const DraftList = () => {

  const { currentUser } = useContext(Context);
  const [loading, draftList]  = useFetchDraftList();


  return (
    <>
      {currentUser && 
        <div>
          <h1>Draft List</h1>
          {loading && <p>Loading...</p>}
          {!loading && 
            draftList.map((draft, index) => {
              return (
                <div key={index}>
                  <p>{draft.title}</p>
                  <p>{draft.description}</p>
                </div>
              )
            })}
        </div>
      }
    </>
  )
};

export default DraftList;
