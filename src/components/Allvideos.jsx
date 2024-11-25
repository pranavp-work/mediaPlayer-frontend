import React, { useEffect, useState } from 'react'
import Videocard from './Videocard'
import { getVideoApi, updateCategoryApi } from '../services/allApi'

function Allvideos({addStatus, setCategoryVDStatus}) {

    const [video, setVideo] = useState([]);
    const [deleteStatus, setDeleteStatus] = useState({});

    // const [ categoryDropStatus, setCategoryDropStatus] = useState({});

    const getallVideo = async () => {
        const result = await getVideoApi();
        // console.log(result);
        setVideo(result.data)
    }
    console.log(video);

    const dragOver = (event) => {
        event.preventDefault();
    }

    const videoDrop = async (event) => {
        const { videoDetails, categoryDetails } = JSON.parse(event.dataTransfer.getData("Details"))
        console.log(videoDetails, categoryDetails);

        let result = categoryDetails.allVideos.filter((item) => item.id != videoDetails.id )

        const reqBody = {
            category : categoryDetails.category,
            allVideos : result,
            id : categoryDetails.id
        }

        const response = await updateCategoryApi(categoryDetails.id, reqBody)
        console.log(response);

        if (response.status >= 200 && response.status < 300) {
            
            setCategoryVDStatus(result);
            
        }


        
      }
    
    // useEffect to handle sideEffect(non-pure functions: getallVideo is a non-pure function)
    useEffect( () => {
        getallVideo()
    }, [addStatus, deleteStatus])

  return (
    <>
        <h4 className='mt-5'>All Videos</h4>

        {
        video?.length > 0 ?
        
            <div className="container-fluid mt-5" droppable onDragOver={(e) => dragOver(e)} onDrop={(e) => videoDrop(e)}>
                <div className="row">

                    {video?.map((item) => (
                        <div className="col-md-3 my-2">
                            < Videocard videoDetails = {item} setDeleteStatus = {setDeleteStatus} />
                        </div>
                    ))}

                </div>
            </div>
        :
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <img src="https://media4.giphy.com/media/eMhMjWHfyZ5T4OqqJ3/giphy.gif" alt="" className="w-100"/>
                        <h5 className='text-center text-danger'>No videos here to watch..</h5>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        }
    </>
  )
}

export default Allvideos