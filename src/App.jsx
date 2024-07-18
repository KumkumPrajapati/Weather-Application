

//import './App.css'

import WeatherApp from "./WeatherApp"
;


function App() {
  const API_KEY= import.meta.env.VITE_REACT_APP_API_KEY;
  console.log(API_KEY);
  return (
    <>
      <WeatherApp apiKey ={API_KEY} />
  
    </>
  )
};




export default App;

