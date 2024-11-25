import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { addHistoryApi, removeVideo } from './../services/allApi';

function Videocard({videoDetails, setDeleteStatus, present}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);

    let caption = videoDetails?.caption;
    let url = videoDetails?.embedLink;
    let time = new Date();
    console.log(time);

    const timeStamp = new Intl.DateTimeFormat('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(time);
    console.log(timeStamp, typeof(timeStamp));
    

    const reqBody = {
      caption,
      url,
      timeStamp
    };

    const result = await addHistoryApi(reqBody);
    console.log(result);
    
  };

  const handleDelete = async (id) => {
    const result = await removeVideo(id);
    console.log(result);
    if (result.status >= 200 && result.status < 300) {
      setDeleteStatus(result);
    }
  }

  const videoDrag = (event, videoDetails) => {
    console.log(event);
    console.log(videoDetails);
    
    event.dataTransfer.setData('videoDetails', JSON.stringify(videoDetails))
    
  }

  return (
    <>
    <Card className='mt-2' style={{ width: '100%', height: '100%' }} draggable onDragStart={(e) => videoDrag(e, videoDetails)} >
      { !present && <Card.Img variant="top" src={videoDetails?.imgURL} style={{height: '100%'}} onClick={handleShow} /> }
      <Card.Body className='d-flex justify-content-between'>
        <Card.Text onClick={handleShow} >{videoDetails?.caption}</Card.Text>
        { !present && <Button onClick={() => handleDelete(videoDetails?.id)} variant='danger' className='ml-5 mt-5' style={{height: '50px', width: '50px'}}><FontAwesomeIcon icon={faTrashCan} /></Button>}
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{videoDetails?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width="100%" height="450" src={`${videoDetails?.embedLink}?autoplay=1`} title="Kung Fu Panda 🐼" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Videocard