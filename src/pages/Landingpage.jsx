import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Landingpage() {
  return (
    <>
      <Container>
        <Row className='d-flex justify-content-center align-items-center'>
          <Col sm = {12} md = {6} >
            <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
            <p className='mt-4' style={{textAlign: 'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis amet sunt possimus voluptatibus accusantium recusandae quidem debitis voluptate harum impedit cumque quae repellat quas placeat suscipit cum atque sed eligendi adipisci officiis, dicta pariatur! Accusamus incidunt facilis quod eum quae.</p>
            <Link to={'/home'}><button className='btn btn-warning mt-2'>Get Started</button></Link>
          </Col>
          

          <Col sm = {12} md = {6}>
            <img src="https://i.pinimg.com/originals/9c/ce/a5/9ccea5604d1b74a454679413847fff3d.gif" alt="" className='w-100' style={{paddingLeft : '25%'}}/>
          </Col>
        </Row>

        <Row className='d-flex justify-content-center align-items-center px-5 mb-5'>
          <h3 className='text-center mb-5'>Features</h3>
          <Col md = {4} className='mt-sm-5'>
                <Card style={{ width: '100%'  }}>
                  <Card.Img variant="top" src="https://i.pinimg.com/originals/88/4a/40/884a408310b28171aa1018f77dee2602.gif" className='p-2'/>
                  <Card.Body>
                  <Card.Title>confusion </Card.Title>
                    <Card.Text>
                    pump panel reconstruction mix by new order
                    </Card.Text>
                  </Card.Body>
                </Card>
          </Col>
          <Col md = {4}  className='mt-sm-5'>
          <Card style={{ width: '100%'  }}>
                  <Card.Img variant="top" src="https://cdn.pixabay.com/animation/2024/06/04/16/39/16-39-28-355_512.gif" className='p-2' />
                  <Card.Body>
                  <Card.Title>confusion </Card.Title>
                    <Card.Text>
                    pump panel reconstruction mix by new order
                    </Card.Text>
                  </Card.Body>
                </Card></Col>
          <Col md = {4} className='mt-sm-5'>
          <Card style={{ width: '100%', backgroundColor : 'orangered' }}>
                  <Card.Img variant="top" src="https://i.pinimg.com/originals/92/2c/5d/922c5d370ab3915a843f91b5dbb6e34c.gif" className='p-2' />
                  <Card.Body>
                    <Card.Title>confusion </Card.Title>
                    <Card.Text>
                    pump panel reconstruction mix by new order
                    </Card.Text>
                  </Card.Body>
                </Card></Col>
        </Row>

        <Row className='p-5 border border-secondary rounded'>
          <Col md = {6}>
            <h4 className='text-warning'>Simple fast and Powerful</h4>
            <p> <span style={{fontSize : '30px'}}>Play Everything</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, pariatur expedita id autem nesciunt laboriosam ipsa ut explicabo labore eligendi.</p>
            <p> <span style={{fontSize : '30px'}}>Play Everything</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, pariatur expedita id autem nesciunt laboriosam ipsa ut explicabo labore eligendi.</p>
            <p> <span style={{fontSize : '30px'}}>Play Everything</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, pariatur expedita id autem nesciunt laboriosam ipsa ut explicabo labore eligendi.</p>
          </Col>
          <Col md = {6}>
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/hE3XSYQjwuM" title="Confusion - New Order  (Pump Panel Reconstruction Mix) - Blade Blood Rave Scene" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </Col>

        </Row>
      </Container> 
    </>
  )
}

export default Landingpage