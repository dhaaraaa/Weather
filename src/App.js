import { useState } from 'react';
import cloud from '../src/Images/cloud.jpg'
import cloudsun from '../src/Images/cloudsun.jpg'
import cloudsun2 from '../src/Images/cloudsun2.jpg'
import cloudy from '../src/Images/cloudy.jpg'
import mooncloudy from '../src/Images/mooncloudy.jpg'
import strom from '../src/Images/strom.jpg'
import sun from '../src/Images/sun.jpg'
import suncloud from '../src/Images/suncloud.jpg'
import sunrain from '../src/Images/sunrain.jpg'
import wind from '../src/Images/wind.jpg'
import axios from 'axios';
function App() {

  const[input,setinput]=useState("")
  const [country, setCountry] = useState()
  const[output , setoutput]=useState("")
  const[city,setcity]=useState("")
  const[timezone,settimezone]=useState("")
  const[weather,setweather]=useState("")
  const[desc,setdesc]=useState("")
  const[longitude,setlong]=useState("")
  const[latitude,setlati]=useState("")
  const [icon, setIcon] = useState()

  const weatherimg={
    "01d":sun,
    "02d":suncloud,
    "03d":cloud,
    "04d":sunrain,
    "05d":wind
  }

  function Input(event){
    setinput(event.target.value)
  }
  function next(){
  var data = axios(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=29991388ae6bfb453c63b60471ac0e68`)
    data.then(function(crt){
      if(country === input){
      console.log(crt.data)
      setCountry(crt.data.name)
      setcity(crt.data.wind.deg)
      settimezone(crt.data.timezone)
      setweather(crt.data.weather[0].main)
      setdesc(crt.data.weather[0].description)
      setlati(crt.data.coord.lat)
      setlong(crt.data.coord.lon)
      setIcon(crt.data.weather[0].icon)
      console.log(icon)
      }
    })
  }
  return (
    <div className="bg-slate-50 flex justify-center items-center flex-col text-center ">
      <div className="bg-purple-300 w-98 h-full m-4 px-3 py-5 rounded-md flex justify-center items-center flex-col p-2">
        <div>
          <h1 className="font-bold ">Weather Report</h1>
          <p className="font-thin">I can give you a weather report about your city!</p>
        </div>
        <div className='w-28 h-28 m-2 p-2'>
          <img src={weatherimg[icon]} alt='img' className=''></img>
          <p>{city}°C</p>

        </div>
        <div className="  flex  m-2 p-2 gap-2">
          <input type='text' placeholder='Enter a city name' className="md:w-96 py-1 outline-gray-300 border-none" onChange={Input} ></input>
          <button className="bg-black text-white px-4 py-1 rounded-sm" onClick={next}>Next</button>
        </div>
        <div className='flex  flex-col gap-3'>
          <p><b>timezone:</b> {timezone}</p>
          <p><b>weather:</b> {weather}</p>
          <p><b>description:</b> {desc}</p>
        </div>
        <div className='flex  items-center gap-16 p-3 mt-3'>
          <p><b> longitude:{longitude}</b> </p>
          <p><b> latitude:{latitude}</b> </p>
        </div>
      </div>
    </div>
  );
}

export default App;
