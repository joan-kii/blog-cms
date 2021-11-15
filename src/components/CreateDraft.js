import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Editor } from '@tinymce/tinymce-react';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

import saveDraft from '../modules/saveDraft';

require('dotenv').config();

const CreateDraft = () => {

  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const textRef = useRef(null);

  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [text, setText] = useState();
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleTitleChange = (e) => {
    e.preventDefault();
    setTitle(titleRef.current.getContent({format: 'text'}));
  };
  
  const handleDescriptionChange = (e) => {
    e.preventDefault();
    setDescription(descriptionRef.current.getContent());
  };

  const handleTextChange = (e) => {
    e.preventDefault();
    setText(textRef.current.getContent());
  };

  const handleSave = async () => {
    setLoading(true);
    const draft = {
      title,
      description,
      text
    };
    const saved = await saveDraft(draft)
    console.log(saved);
  }; 

  /* useEffect(() => {
    console.log(saved)
    if (saved) {
      setLoading(false);
      setError('');
      navigate('/drafts'); 
    } else {
      setLoading(false);
      setError('Ooops... Something went wrong!');
    };
  }, [saved, navigate, setError]) */

  return (
    <>
      <div 
        className="mx-auto mt-4 py-2 px-5 h-auto w-50 d-flex flex-column bg-secondary bg-opacity-10 rounded">
        <div className="mt-2">
          <h3 className="mb-3 text-center text-muted">Title</h3>
          <Editor 
            onInit={(evt, editor) => titleRef.current = editor}
            initialValue="<h2>Post Title</h2>"
            apiKey={process.env.REACT_APP_TINY_API_KEY}
            init={{
              height: 150,
              menubar: false,
              plugins: ["preview wordcount paste"],
              toolbar: 
                // eslint-disable-next-line
                "undo redo | bold italic | \
                alignleft aligncenter alignright"
            }}
            onChange={handleTitleChange} />
        </div>
        <div className="mt-2">
          <h3 className="mb-3 text-center text-muted">Description</h3>
          <Editor 
            onInit={(evt, editor) => descriptionRef.current = editor}
            initialValue="<h4>Description</h4>"
            apiKey={process.env.REACT_APP_TINY_API_KEY}
            init={{
              height: 250,
              menubar: false,
              plugins: ["preview wordcount paste"],
              toolbar: 
                  // eslint-disable-next-line
                "undo redo | bold italic | \
                alignleft aligncenter alignright"
            }}
            onChange={handleDescriptionChange} />
        </div>
        <div className="mt-2">
          <h3 className="mb-3 text-center text-muted">Post</h3>
          <Editor 
            onInit={(evt, editor) => textRef.current = editor}
            initialValue="<p>Post Text</p>"
            apiKey={process.env.REACT_APP_TINY_API_KEY}
            init={{
              height: 400,
              menubar: false,
              plugins: ["preview wordcount"],
              toolbar: 
                  // eslint-disable-next-line
                "undo redo | bold italic | \
                alignleft aligncenter alignright"
            }}
            onChange={handleTextChange} />
        </div>
        <div className="my-4 d-flex justify-content-around">
          <Button 
            variant="outline-primary"
            size="lg"
            onClick={handleSave}>
              Save Draft
          </Button>
          <Button 
            variant="outline-primary"
            size="lg">
              Publish Post
          </Button>
        </div>
        {error && <Alert variant="danger">{error}</Alert>}
        {loading && <Alert variant="info">Saving...</Alert>}
      </div>
    </>
  )
}

export default CreateDraft;
