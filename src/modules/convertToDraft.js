require('dotenv').config();

const convertToDraft = async (slug) => {

  const URL = process.env.REACT_APP_API_URL + 'admin/posts/convert';
  const token = localStorage.getItem('token');
  const options = {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify({slug}),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  };
    
  const response = await fetch(URL, options);
  return response.ok;
};
      
export default convertToDraft;
