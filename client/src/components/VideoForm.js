// import React, { useState } from 'react';
// import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
// import { addVideo } from "../modules/videoManager";

// const VideoForm = ({ renderVideos }) => {
//   const emptyVideo = {
//     title: '',
//     description: '',
//     url: ''
//   };

//   const [ video, setVideo ] = useState(emptyVideo);

//   const handleInputChange = (evt) => {
//     const value = evt.target.value;
//     const key = evt.target.id;

//     const videoCopy = { ...video };

//     videoCopy[ key ] = value;
//     setVideo(videoCopy);
//   };

//   const handleSave = (evt) => {
//     evt.preventDefault();

//     addVideo(video).then(() => {
//       setVideo(emptyVideo);
//       renderVideos();
//     });
//   };

//   return (
//     <Form>
//       <FormGroup>
//         <Label for="title">Title</Label>
//         <Input type="text" name="title" id="title" placeholder="video title"
//           value={ video.title }
//           onChange={ handleInputChange } />
//       </FormGroup>
//       <FormGroup>
//         <Label for="url">URL</Label>
//         <Input type="text" name="url" id="url" placeholder="video link"
//           value={ video.url }
//           onChange={ handleInputChange } />
//       </FormGroup>
//       <FormGroup>
//         <Label for="description">Description</Label>
//         <Input type="textarea" name="description" id="description"
//           value={ video.description }
//           onChange={ handleInputChange } />
//       </FormGroup>
//       <Button className="btn btn-primary" onClick={ handleSave }>Submit</Button>
//     </Form>
//   );
// };

// export default VideoForm;
import React, { useEffect, useState } from "react";
import { addVideo } from "../modules/videoManager";
import { useHistory } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const VideoForm = ({ }) => {
  const [ isLoading, setIsLoading ] = useState(false);
  const history = useHistory();

  const emptyVideo = {
    title: '',
    description: '',
    url: ''
  };

  const [ video, setVideo ] = useState(emptyVideo);

  // Handle input changes and parse user Id
  const handleControlledInputChange = (e) => {
    let newVideo = { ...video };
    let selectedVal = e.target.value;

    if (e.target.id.includes('Id')) {
      selectedVal = parseInt(selectedVal)
    }

    newVideo[ e.target.id ] = selectedVal

    setVideo(newVideo)
  };

  //Save video to database
  const handleClickSaveVideo = e => {
    e.preventDefault()
    setIsLoading(true)
    let newVideo = { ...video }

    addVideo(newVideo).then(() => {
      setVideo(emptyVideo);
      history.push('/')
    });
  }

  return (
    <>
      <fieldset>
        <label htmlFor='title'>Title:</label>
        <input type="text" id='title' value={ video.title } onChange={ handleControlledInputChange } required autoFocus className='form-control' />
      </fieldset>

      <fieldset>
        <label htmlFor='description'>Description:</label>
        <input type="text" id='description' value={ video.description } onChange={ handleControlledInputChange } className='form-control' />
      </fieldset>

      <fieldset>
        <label htmlFor='url'>URL:</label>
        <input type="text" id='url' value={ video.url } onChange={ handleControlledInputChange } className='form-control' />
      </fieldset>

      <div className='btn-cont'>
        <Button className='btn' type='button' /*disabled={ isLoading }*/ variant="primary" onClick={ handleClickSaveVideo }>Save Video</Button>
      </div>


    </>
  )
};

export default VideoForm;

