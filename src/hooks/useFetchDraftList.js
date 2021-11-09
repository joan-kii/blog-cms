import { useState, useEffect } from 'react';

const useFetchDraftList = () => {

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
    setDraftList(data);
    setLoading(false);
  }
  useEffect(() => {
    fetchDrafts();
      // eslint-disable-next-line
  }, [])
  
  return [loading, draftList];
};

export default useFetchDraftList;
