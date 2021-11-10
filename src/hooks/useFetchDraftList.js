import { useState, useEffect, useContext } from 'react';

import { Context } from '../context/Context';

const useFetchDraftList = () => {

  const { setCurrentUser } = useContext(Context);

  const URL = 'http://localhost:5000/admin/drafts';
  const token = localStorage.getItem('token');
  const options = {
    method: 'GET',
    mode: 'cors',
    headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
    }
  };
  const [draftList, setDraftList] = useState(null);
  const [loading, setLoading] = useState(true);
  
  async function fetchDrafts() {
    setLoading(true);
    const response = await fetch(URL, options); 
    const data = await response.json();
    if (response.status === 401) {
      setCurrentUser(null);
    } else {
      setDraftList(data);
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchDrafts();
      // eslint-disable-next-line
  }, [])
  
  return [loading, draftList];
};

export default useFetchDraftList;
