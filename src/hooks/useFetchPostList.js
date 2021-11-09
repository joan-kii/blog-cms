import { useState, useEffect } from 'react';

const useFetchPostsList = () => {

  const URL = 'http://localhost:5000/admin/posts';
  const token = localStorage.getItem('token');
  const options = {
    method: 'GET',
    mode: 'cors',
    headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer <${token}>`
    }
  };
  const [postList, setPostList] = useState([]);
  
  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch(URL, options); 
      const data = await response.json();
      setPostList(data);
      console.log(data);
    }
    fetchPosts();
      // eslint-disable-next-line
  }, [])

  return { postList };
};

export default useFetchPostsList;