import React, { useEffect, useState } from "react";
import { addVideo } from "../modules/videoManager";
import Button from 'react-bootstrap/Button'

const VideoForm = ({ }) => {
  const [ video, setVideo ] = useState({});
  const [ isLoading, setIsLoading ] = useState(false);


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
    console.log('new video', newVideo)
    addVideo(newVideo)
  }

  //todo reset form after submission
  const resetForm = () => {
    setVideo({

    })
  }

  return (
    <>
      <fieldset>
        <label htmlFor='title'>Title:</label>
        <input type="text" id='title' defaultValue={ video.title } onChange={ handleControlledInputChange } required autoFocus className='form-control' />
      </fieldset>

      <fieldset>
        <label htmlFor='description'>Description:</label>
        <input type="text" id='description' defaultValue={ video.description } onChange={ handleControlledInputChange } className='form-control' />
      </fieldset>

      <fieldset>
        <label htmlFor='url'>URL:</label>
        <input type="text" id='url' defaultValue={ video.url } onChange={ handleControlledInputChange } className='form-control' />
      </fieldset>

      <div className='btn-cont'>
        <Button className='btn' type='button' /*disabled={ isLoading }*/ variant="primary" onClick={ handleClickSaveVideo }>Save Video</Button>
      </div>


    </>
  )
};

export default VideoForm;