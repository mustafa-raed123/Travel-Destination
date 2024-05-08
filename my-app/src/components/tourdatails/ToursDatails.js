import React, { useState } from 'react'
import { useParams } from 'react-router'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import dataTravle from "../../data/db.json";
import './TourDatails.css'


const ToursDatails = (props) => {
    const {id} = useParams()
    const [seemore,setseemore] = useState(false)
    const changesetseemore = ()=>{
      setseemore(!seemore)

    }
    
    const city = dataTravle.filter(ele => ele.id == id )

    
    
    
    
  return (
    <div>
    <Header></Header>
    <div className="city-details card container ">
          
                <img src={city[0].image} alt="the image not found " />
                <div className="class-p" key={city.id}>
                <div>{city[0].name} </div>
                
                   <article>{seemore? city[0].info  : city[0].info.slice(0, 200)}
                    <span  onClick={changesetseemore}>
                    {seemore ? <button>SEELESS </button> : <button>...SEEMORE</button>}
                    </span>
                    </article>
                    <p> Price: {city[0].price}</p>
                </div>
                
            </div>
    
      <Footer></Footer>
    </div>
  )
}

export default ToursDatails
