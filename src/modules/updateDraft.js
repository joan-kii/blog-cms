require('dotenv').config();

const updateDraft = async (updatedDraft) => {

  const URL = process.env.REACT_APP_API_URL + 'admin/drafts/update';
  const token = localStorage.getItem('token');
  const options = {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(updatedDraft),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  };

  const response = await fetch(URL, options);
  return response.ok;
};

export default updateDraft;
