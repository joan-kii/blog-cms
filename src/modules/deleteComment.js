require('dotenv').config();

const deleteComment = async (slug, index) => {

  const URL = process.env.REACT_APP_API_URL + 'admin/posts/comments';
  const token = localStorage.getItem('token');
  const options = {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify({slug, index}),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  };

  const response = await fetch(URL, options);
  return response.ok;
};
  
export default deleteComment;
