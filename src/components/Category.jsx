import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'


import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addCategoryApi, getAllCategoryApi, deleteCategoryApi, updateCategoryApi } from './../services/allApi';
import Videocard from './Videocard';


function Category({categoryVDStatus}) {

  const [show, setShow] = useState(false);

  const [categoryName, setCategoryName] = useState('');

  const [allCategory, setAllCategory] = useState([]);

  const [categoryStatus, setCategoryStatus] = useState({});

  const [deleteStatus, setDeleteStatus] = useState([]);

  const [categoryUpdateStatus, setCategoryUpdateStatus] = useState({});

  const handleClose = () => {
    setShow(false);
    handleCancel();
  }  
  const handleShow = () => setShow(true);

  console.log(categoryName);

  const handleCancel = () => {
    setCategoryName('');
  }

  const handleAdd = async () => {
    if( !categoryName ) {
      alert('please enter category name');
    } else {
      const reqBody = {
        category : categoryName,
        allVideos : []
      }
      const result = await addCategoryApi(reqBody);
      console.log(result);
      if ( result.status >= 200 && result.status < 300 ) {
        alert('category added succesfully!');
        handleClose();
        setCategoryStatus(result);
      } else {
        alert('Something went wrong!');
      }
    }
  }

  const getCategory = async () => {
    const result = await getAllCategoryApi();
    console.log(result);

    // setAllCategory(result)
    
    if(result.status >= 200 && result.status < 300) {
      setAllCategory(result.data);
    }
    
  }

  console.log(allCategory);

  const deleteCategory = async (id) => {
   const result = await deleteCategoryApi(id);
   if (result.status >= 200 && result.status < 300) {
    setDeleteStatus(result);
   } else {
    alert('deletion didnt work, something went wrong!')
   }
  }


  const videoOver = (event) => {
    // avoid reloading- data loss
    event.preventDefault();
  }

  const videoDrop = async (event, categoryDetails) => {
    console.log(categoryDetails);

    const videoDetails = JSON.parse(event.dataTransfer.getData('videoDetails'));
    console.log(videoDetails);
    


    if( categoryDetails.allVideos.find(item => item.id == videoDetails.id )) {
      alert('video already exists in the same category')
    } else {
      categoryDetails.allVideos.push(videoDetails);
      console.log(categoryDetails);

      const result = await updateCategoryApi(categoryDetails.id, categoryDetails);
      console.log(result);



      if( result.status >= 200 && result.status < 300 ) {
        setCategoryUpdateStatus(result.data)
      }
      
    }
    
  }

  const videoDrag = (event, videoDetails, categoryDetails) => {
    console.log(videoDetails);
    console.log(categoryDetails);
    
    const details = {
      videoDetails,
      categoryDetails
    };

    event.dataTransfer.setData('Details', JSON.stringify(details))
    
  }
  

  useEffect(() => {
    getCategory()
  }, [ categoryStatus, deleteStatus, categoryVDStatus ])


  return (
    <>
        <h5 className='mt-5'>Category</h5>
        <button onClick={handleShow} className='btn btn-warning mt-4 w-100'>Add Category</button>

{        
  allCategory?.length > 0 ?
  allCategory?.map((item) => (
    <div className="border border-secondary rounded p-3 mt-4" droppable onDragOver={(e) => videoOver(e)} onDrop={(e) => videoDrop(e, item)}>
    <div className="d-flex justify-content-between mb-2">
        <h6>{item.category}</h6>
        <button onClick={() => deleteCategory(item?.id)} className='btn btn-danger'><FontAwesomeIcon icon={faTrashCan} /></button>
    </div>
    { item?.allVideos.length > 0 &&
        item?.allVideos.map((video) => (
          <div draggable onDragStart={(e) => videoDrag(e, video, item)} onDrop={(e) => videoDrop(e, item)}>
            < Videocard videoDetails={video} present={true} />
          </div>
        ))
      
    }
    </div>
  ))


        :

        <h5 className="text-center text-danger mt-4">
            No Category added yet...
        </h5> 
}

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Category</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className='p-1 rounded'>
              <input type="text" placeholder='enter category name' className='form-control' style={{width: '100%'}} onChange={(e) => setCategoryName(e.target.value)} value={categoryName}/>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCancel}>
              Cancel
            </Button>
            <Button variant="warning" onClick={handleAdd}>
              Add
            </Button>
          </Modal.Footer>
        </Modal>
    </>
  )
}

export default Category