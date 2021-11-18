const getSingleDraft = async (slug) => {

  const URL = `http://localhost:5000/admin/drafts/${slug}`;
  const token = localStorage.getItem('token');
  const options = {
    method: 'GET',
    mode: 'cors',
    headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
    }
  };
  
  const response = await fetch(URL, options); 
  const data = await response.json();
  if (response.status !== 200) {
    return false;
  } else {
    return data;
  }
};

export default getSingleDraft;
