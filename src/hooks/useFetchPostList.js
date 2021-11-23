import { useState, useEffect, useContext } from 'react';

import { Context } from '../context/Context';

const useFetchPostsList = () => {

  const { currentUser, setCurrentUser } = useContext(Context);

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
    if (response.status === 401) setCurrentUser(null);
    const data = await response.json();
    if (data) {
      setPostList(data);
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchPosts();
      // eslint-disable-next-line
  }, [currentUser])
  
  return [loading, postList];
};

export default useFetchPostsList;
