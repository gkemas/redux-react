import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Card from '../components/Card'

const News = () => {
  const [inputVal, setinputVal] = useState('');
  const [city, setcity] = useState();
  const { user } = useSelector((state) => state.auth);
  let unitType ="metric";
  let lang ="tr";
  let url =` https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${user.apıkey}&units=${unitType}&lang=${lang};`


  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  
  };
  
  const getData = async () => {
    if (inputVal) {
      try {
        const { data } = await axios.get(url);
        setcity(data);
      } catch (error) {
        
        console.log(error)
        if(error.response.status  === 401){

          alert("WRONG APIKEY");
        }
        if(error.response.status === 404){
          alert("NOT FOUND")
        }

      }
    } else {
      alert('Please Enter your city');
    }
  };
  return (



    <div>
      
          <section className="top-banner">
    <div className="container">
      <center>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAtYA6kLKN8Tmwp2u1rV_FOJUKstGzskRpwGJJhl56g3Mv35dUzK8sNisz39MnsGJYX24&usqp=CAU" alt="Bank logo" className="nav__logo"
          id="logo" />
          <h1 className="heading">
            Weather App</h1>
      </center>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search for a city" autoFocus 
        onChange={(e) => setinputVal(e.target.value)}
        />
        <button type="submit">SUBMIT</button>
        <span className="msg"></span>
      </form>
    </div>
  </section>
  <section className="ajax-section">
    <div className="container">
      <ul className="cities">
      </ul>
    </div>
  </section>
  

{city && (
        <>
          <Card key={city.id} {...city} />
        </>
      )}
    </div>
  )
}

export default News




