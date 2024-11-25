import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import Category from '../components/Category'
import Allvideos from '../components/Allvideos'

function Home() {
  
  const [addStatus, setAddStatus] = useState({});
  const [categoryVDStatus, setCategoryVDStatus] = useState({});

  return (
    <>
      <div className="container d-flex justify-content-between mt-5">

        < Add setAddStatus = {setAddStatus}/>

        <Link to = '/watchhistory' style = {{textDecoration : 'none'}}><h5>Watch History <FontAwesomeIcon icon={faClockRotateLeft} /></h5></Link>

      </div>

      <div className="container-fluid p-4">
        <div className="row">
          <div className="col-md-9">
            < Allvideos addStatus = {addStatus} setCategoryVDStatus={setCategoryVDStatus}/>
          </div>
          <div className="col-md-3">
            < Category categoryVDStatus={categoryVDStatus} />
          </div>
        </div>
      </div>

    </>
  )
}

export default Home