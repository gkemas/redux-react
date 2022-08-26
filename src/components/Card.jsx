import React from 'react'

const Card = ({name,sys,main,weather}) => {
  return (
    <div>
         <span>${name}</span>
         <sup>${sys.country}</sup>
        
            <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
            <figure>
                {/* <img class="city-icon" src="http://openweathermap.org/img/wn/${weather[0].icon}@2x.png"/> */}
                <figcaption>${weather[0].description}</figcaption>
            </figure>`; 
    </div>
  )
}

export default Card