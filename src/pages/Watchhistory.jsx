import { faHouse, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistoryVideoApi, getAllVideoHistoryApi } from '../services/allApi'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Watchhistory() {

  // State to store all history video data
  const [allHisVideo, setAllHisVideo] = useState([]);

  // State to store deletion clicked or not
  const [deleteStatus, setDeleteStatus] = useState({});

  const getAllVideoHistory = async () => {
    try {

      const result = await getAllVideoHistoryApi();
      console.log(result.data);

      setAllHisVideo(result.data);

    } catch (error) {
      console.error('Error fetching video history:', error);
    }
  };

  console.log('history videos data: ', allHisVideo);

  const handleDelete = async (id) => {
    const result = await deleteHistoryVideoApi(id);
    console.log(result);

    if(result.status >= 200 && result.status < 300) {
      setDeleteStatus(result);
    } else {
      toast.error('Something went wrong!');
    }

  }
  

  // Fetch video history when the component mounts
  useEffect(() => {
    getAllVideoHistory()
  }, [deleteStatus]);

  return (
    <>
      <div className="d-flex justify-content-between px-5 mt-5">
        <h4>Watch History</h4>

        <Link to = '/home' style={{textDecoration : 'none'}}><h4><FontAwesomeIcon icon={faHouse} className='me-2'/> <span className='d-md-inline d-none'>Back Home</span>  </h4></Link>
      </div>

  { allHisVideo.length > 0 ?     <div className="container-fluid">
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10 table-responsive">
              <table className="table table-bordered mt-5">
                <thead>
                  <tr>
                    <th className='text-center'>#</th>
                    <th className='text-center'>Caption</th>
                    <th className='text-center'>URL</th>
                    <th className='text-center'>Time Stamp</th>
                    <th className='text-center'>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    allHisVideo.map((item) => (
                      <tr>
                      <td className='text-center'>{item?.id}</td>
                      <td className='text-center'>{item?.caption}</td>
                      <td className='text-center'><Link to = {item?.url} target='_blank'>{item?.url}</Link></td>
                      <td className='text-center'>{item?.timeStamp}</td>
                      <td className='text-center'>
                        <button onClick={() => handleDelete(item?.id)} className='btn btn-danger'><FontAwesomeIcon icon={faTrash} /></button>
                      </td>
                    </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>
        :
        <h4 className='text-center text-danger'>No Watch History</h4> }

        <ToastContainer position='top-center' theme='colored' autoClose={2500} /> 
    </>
  )
}

export default Watchhistory