import { useState, useEffect, useContext } from 'react';

import { Context } from '../context/Context';

const useFetchPostsList = () => {

  const { setCurrentUser } = useContext(Context);

  const URL = 'http://localhost:5000/admin/posts';
  const token = localStorage.getItem('token');
  const options = {
    method: 'GET',
    mode: 'cors',
    headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
    }
  };
  const [postList, setPostList] = useState(null);
  const [loading, setLoading] = useState(true);
  
  async function fetchPosts() {
    setLoading(true);
    const response = await fetch(URL, options); 
    const data = await response.json();
    if (response.status === 401) {
      setCurrentUser(null);
    } else {
      setPostList(data);
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchPosts();
      // eslint-disable-next-line
  }, [])
  
  return [loading, postList];
};

export default useFetchPostsList;
