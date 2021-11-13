import { useState, useEffect } from 'react';

const useSaveDraft = (draft) => {

  const [error, setError] = useState('');

  const URL = 'http://localhost:5000/admin/create';
  const token = localStorage.getItem('token');
  const options = {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(draft),
    headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
    }
  };

  async function saveDraft() {
    const response = await fetch(URL, options); 
    // eslint-disable-next-line
    const data = await response.json();
    if (response.status === 200) {
      setError(response.message[0].msg);
    } else {
      setError('');
    }
  }

  useEffect(() => {
    saveDraft();
      // eslint-disable-next-line
  }, [])

  return error;
  
};

export default useSaveDraft
