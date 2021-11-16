const saveDraft = async (draft) => {

  const URL = 'http://localhost:5000/admin/drafts/create';
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
  return response.json();
};

export default saveDraft;
