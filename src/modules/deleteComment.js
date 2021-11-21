const deleteComment = async (slug, index) => {

  const URL = 'http://localhost:5000/admin/posts/comments';
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
