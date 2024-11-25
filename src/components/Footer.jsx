import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom'
import { faFacebook, faInstagram, faWhatsapp, faXTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'


function Footer() {
  return (
    <div className='container-fluid p-5'>
      <div className="row">
        <div className="col-md-4">
          <h4 className='text-warning'> <FontAwesomeIcon icon={faVideo}/> Media Player</h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, mollitia! Fuga porro, quidem eius inventore mollitia eum cum, autem facere aliquam maxime assumenda voluptate iure ipsum quo ea. Voluptatum, similique.</p>
        </div>
        <div className="col-md-2">
        <h4 className=''>Links</h4>
         <Link to = { '/' }><p className='text-warning'>Landing Page</p></Link>
         <Link to = { '/home' }><p className='text-warning'>Home Page</p></Link>
         <Link to = { '/watchhistory' }><p className='text-warning'>Watch History</p></Link>
        </div>
        <div className="col-md-2">
          <h4>Guides</h4>
          <p><a href="https://react.dev/learn" target='_blank' style={{textDecoration: 'none'}} className='link-secondary'>React</a></p>

          <p><a href="https://react-bootstrap.netlify.app/docs/getting-started/introduction" target='_blank' style={{textDecoration: 'none'}} className='link-secondary'>React Bootstrap</a></p>

          <p><a href="https://bootswatch.com/" target='_blank' style={{textDecoration: 'none'}} className='link-secondary'>Bootswatch</a></p>
        </div>
        <div className="col-md-4">
          <h4>Contact Us</h4>
            <div className="d-flex">
              <input type="text" placeholder='email id' className='form-control' />
              <button className='btn btn-warning ms-3'>Subscribe</button>
            </div>
            <div className="d-flex justify-content-between mt-3 px-5">
              <a href="" className='link-warning link-opacity-75 link-opacity-100-hover'><FontAwesomeIcon icon={faInstagram} className='fa-2x'/></a>
              <a href="" className='link-warning link-opacity-75 link-opacity-100-hover'><FontAwesomeIcon icon={faXTwitter}  className='fa-2x'/></a>
              <a href="" className='link-warning link-opacity-75 link-opacity-100-hover'><FontAwesomeIcon icon={faFacebook}  className='fa-2x'/></a>
              <a href="" className='link-warning link-opacity-75 link-opacity-100-hover'><FontAwesomeIcon icon={faLinkedin}  className='fa-2x'/></a>
              <a href="" className='link-warning link-opacity-75 link-opacity-100-hover'><FontAwesomeIcon icon={faWhatsapp}  className='fa-2x'/></a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer