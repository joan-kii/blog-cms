import React from "react";
import { Editor } from '@tinymce/tinymce-react';

require('dotenv').config();

const CreateDraft = () => {

  const handleTitleChange = (e) => {
    e.preventDefault();
    console.log(e.target.getContent);
  };

  const handleTextChange = (e) => {
    e.preventDefault();
    console.log(e.target.getContent);
  };

  return (
    <>
      <div className="mx-auto my-3 p-5 w-50 d-flex flex-column bg-secondary bg-opacity-10 rounded">
        <div>
          <Editor 
            initialValue="<h1>Post Title</h1>"
            apiKey={process.env.REACT_APP_TINY_API_KEY}
            init={{
              height: 200,
              menubar: false,
              plugins: ["preview wordcount"],
              toolbar: 
                  // eslint-disable-next-line
                "undo redo | bold italic | \
                alignleft aligncenter alignright"
            }}
            onChange={handleTitleChange} />
        </div>
        <div>
          <Editor 
            initialValue="<p>Post Text</p>"
            apiKey={process.env.REACT_APP_TINY_API_KEY}
            init={{
              height: 500,
              menubar: false,
              plugins: ["preview wordcount"],
              toolbar: 
                  // eslint-disable-next-line
                "undo redo | bold italic | \
                alignleft aligncenter alignright"
            }}
            onChange={handleTextChange} />
        </div>
      </div>
    </>
  )
}

export default CreateDraft;
