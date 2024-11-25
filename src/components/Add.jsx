import { faCloudArrowUp, faFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addVideoApi } from '../services/allApi';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Add({setAddStatus}) {

    const [show, setShow] = useState(false);

    const[videoDetails, setVideoDetails] = useState({
        caption: "",
        imgURL: "",
        embedLink: "" 
    });

    console.log(videoDetails);
    

    const handleClose = () => {
        setShow(false);
        handleCancel();
    }
    const handleShow = () => setShow(true);

    const handleCancel = () => {
        setVideoDetails({
            caption: "",
            imgURL: "",
            embedLink: "" 
        });
    };

    const handleAdd = async() => {
        const {caption, imgURL, embedLink} = videoDetails;
        if( !caption || !imgURL || !embedLink ) {
            toast.info('please fill all 3 input boxes');
        } else {

            // https://www.youtube.com/watch?v=wadI2t6hGvo Link 1
            // https://youtu.be/wadI2t6hGvo?si=FL8KRKaTFOMwCwlq Link 2

            if ( embedLink.startsWith('https://youtu.be/')) {
                let link =  `https://www.youtube.com/embed/${embedLink.slice( 17, 28 )}`;
                console.log(link);

                const result = await addVideoApi({caption, imgURL, embedLink: link});
                if(result.status >= 200 && result.status < 300) {
                    toast.success(
                        <div>
                          <FontAwesomeIcon icon={faFilm} /> Video added successfully!
                        </div>
                      );
                      
                    handleClose();

                    setAddStatus(result);

                } else {
                    toast.error(
                        <div>
                            <FontAwesomeIcon icon={faVideoSlash} /> Something went wrong!
                        </div>
                    );
                    handleCancel();
                }

            } else {
                let link = `https://www.youtube.com/embed/${embedLink.slice( -11 )}`;
                console.log(link);
                
                const result = await addVideoApi({caption, imgURL, embedLink: link});
                if(result.status >= 200 && result.status < 300) {
                    toast.success(
                        <div>
                          <FontAwesomeIcon icon={faFilm} /> Video added successfully!
                        </div>
                      );
                    handleClose();

                    setAddStatus(result);

                } else {
                    toast.error(
                        <div>
                            <FontAwesomeIcon icon={faVideoSlash} /> Something went wrong!
                        </div>
                    );
                    handleCancel();
                }

            }
        }
    }

  return (
    <>
        <h5 onClick={handleShow} style={{cursor: 'pointer'}}> <span className='d-md-inline d-none'>Upload New Video</span> <FontAwesomeIcon icon={faCloudArrowUp} /></h5>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title style={{fontSize : '25px'}} className='text-warning'><FontAwesomeIcon icon={faFilm} /> Upload Videos</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h6>Please fill the following details</h6>
                <form className="border rounded border-secondary p-2">
                <input type="text" value={videoDetails.caption} placeholder="Video Caption" className='form-control' onChange={(e) => setVideoDetails( {...videoDetails, caption : e.target.value} ) } />
                <br />
                <input type="text" value={videoDetails.imgURL} placeholder="Video Image" className='form-control' onChange={(e) => setVideoDetails( {...videoDetails,imgURL : e.target.value} ) }/>
                <br />
                <input type="text" value={videoDetails.embedLink} placeholder="Video URL" className='form-control'onChange={(e) => setVideoDetails( {...videoDetails,embedLink : e.target.value} ) }/>
                </form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleCancel}>
                Cancel
            </Button>
            <Button variant="primary" onClick={handleAdd} style={{backgroundColor : 'orange'}}>
                Upload
            </Button>
            </Modal.Footer>
        </Modal>

        <ToastContainer position='top-center' theme='colored' autoClose={2500} />  
    </>
  )
}

export default Add