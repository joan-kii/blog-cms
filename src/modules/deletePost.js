require('dotenv').config();

const deletePost = async (slug) => {

  const URL = process.env.API_URL + 'admin/posts/delete';
  const token = localStorage.getItem('token');
  const options = {
    method: 'DELETE',
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
    
export default deletePost;
