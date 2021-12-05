require('dotenv').config();

const saveDraft = async (draft) => {

  const URL = process.env.API_URL + 'admin/drafts/create';
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

  const response = await fetch(URL, options);
  return response.ok;
};

export default saveDraft;
