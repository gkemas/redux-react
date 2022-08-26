import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Card from '../components/Card'

const News = () => {
  const [inputVal, setinputVal] = useState('');
  const [city, setcity] = useState([]);
  // let apiKeyy =localStorage.getItem("apiKey");
  const { user } = useSelector((state) => state.auth);
  let unitType ="metric";
  let lang ="tr";
  let url =` https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${user}&units=${unitType}&lang=${lang};`


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
        console.log(error);
      }
    } else {
      alert('Please Enter your meal');
    }
  };
  return (



    <div>
      <form onSubmit={handleSubmit}>
          <section class="top-banner">
    <div class="container">
      <center>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAtYA6kLKN8Tmwp2u1rV_FOJUKstGzskRpwGJJhl56g3Mv35dUzK8sNisz39MnsGJYX24&usqp=CAU" alt="Bank logo" class="nav__logo"
          id="logo" />
          <h1 class="heading">
            Weather App</h1>
      </center>
      <form>
        <input type="text" placeholder="Search for a city" autofocus 
        onChange={(e) => setinputVal(e.target.value)}
        />
        <button type="submit">SUBMIT</button>
        <span class="msg"></span>
      </form>
    </div>
  </section>
  <section class="ajax-section">
    <div class="container">
      <ul class="cities">
      </ul>
    </div>
  </section>
  </form>
  {/* {city?.length > 0 && <Card city={city} />} */}
  {city?.map((city)=>{

return(
   <>
   <Card key={city.id} {...city} />
   </>
)

})}
    </div>
  )
}

export default News




