import SearchBox from "./SearchBox"
import  InfoBox from "./InfoBox"
import {useState} from "react";

export default function WeatherApp(props){
  let apikey = props.apiKey;
  
    console.log(apikey);


  
  const[weatherInfo, SetweatherInfo] = useState({
    city:"Delhi",
    feelsLike: 24.83,
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 47,
    weather: "haze,"
  });

  let updateInfo = (result)=>{
    SetweatherInfo(result);
  }

  // let ApiInfo =()=>{
  //  const apikey = props.apiKey;
  //  console.log(apikey);
  // }
  



   return(
    <div style={{textAlign: "center"}}>
        <h1>Weather App</h1>
          <SearchBox apiKey={apikey} updateInfo={updateInfo}   />
          
        <InfoBox info={weatherInfo}/>
    </div>

   );
   
}