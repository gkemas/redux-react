import React from 'react'

const Card = ({name,sys,main,weather}) => {
  
    return (
    <div className='ajax'>
      <div className='container'>

         <span>{name}</span>
         <sup>{sys.country}</sup>
         
         
          
           
            <div className="city-temp">{Math.round(main.temp)}<sup>°C</sup></div>
            <figure>
              <div>

            <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt="weather"/>
              </div>
           
              
                <figcaption>{weather[0].description}</figcaption>
            </figure> 
      </div>
    </div>
  )
}

export default Card