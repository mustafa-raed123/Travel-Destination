import React from 'react'
import Card from 'react-bootstrap/Card';
import './Tour.css'
import { Link } from 'react-router-dom';
const Tour = (props) => {
  return (
    <div className='container'>
    <div className='row align-items-center  '>
         
      {
        props.tour.map((data)=>{
          return (
            <>
          <Card className='card col-2 justify-content-center' style={{  width: '25rem' , margin : "20px"}} key = {data.id}>

          <Card.Body>
               <Card.Title className='title'> {data.name} </Card.Title>
               <Card.Text>
               <Card.Img className='image' variant="top" src={data.image}  alt ="dfbdf"/>
               </Card.Text>
          </Card.Body>
          
          <Link to ={`/city/${data.id}`} d = {data}  >Read_more</Link>
          </Card>
        </>
        )
        })
      }
      </div>
      </div>
  
   

  
  )
}

export default Tour
