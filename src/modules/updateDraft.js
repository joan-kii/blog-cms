const updateDraft = async (updatedDraft) => {

  const URL = 'http://localhost:5000/admin/drafts/update';
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
  console.log(response)
  return response.ok;
};

export default updateDraft;
