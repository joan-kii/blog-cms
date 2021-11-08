import { useState, useEffect } from 'react';

const useFetchDraftList = () => {

  const URL = 'http://localhost:5000/admin/drafts';
  const options = {
    method: 'GET',
    mode: 'cors',
    headers: {
    'Content-Type': 'application/json',
    'Autorithation': `Bearer <${localStorage.getItem('token')}>`
    }
  };
  const [draftList, setDraftList] = useState([]);
  
  useEffect(() => {
    async function fetchDrafts() {
      const response = await fetch(URL, options); 
      const data = await response.json();
      setDraftList(data);
      console.log(data);
    }
    fetchDrafts();
  }, [])

  return { draftList };
};

export default useFetchDraftList;
