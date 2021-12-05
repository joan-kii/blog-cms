require('dotenv').config();

const deleteDraft = async (slug) => {

  const URL = process.env.REACT_APP_API_URL + 'admin/drafts/delete';
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
      
export default deleteDraft;
