import React, {useEffect, useState} from "react";
import './App.css';
import WeatherDrawer from './views/weather_drawer/WeatherDrawer';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from "axios";
import Backdrop from "@mui/material/Backdrop";
import  CircularProgress  from "@mui/material/CircularProgress";

function App() {
  const [cityData, setCityData] = useState([]);
const [city, setCity] = useState(4832038);
const [cityLabel, setCityLabel] = useState('');
const [isLoading, setIsLoading] = useState(false);
  const theme= createTheme({
    palette:{
      primary:{
         main: '#2196f3'
      },
      secondary:{
        main:'#2196f3'
      }
    }
  })

  const cityId =4832038;


  const changeCity = (cityValue) =>{
    if(cityValue === null){
      setIsLoading(false);
    }
    if(cityValue.id !== city){
      setIsLoading(true);
      setCity(cityValue.id)
    }
    else{
      return;
    }
    setCityLabel(cityValue.label)
  }

  useEffect(() => {

    axios.get(`https://api.openweathermap.org/data/2.5/forecast?id=${city}&appid=ef35eb3af57aad7072ef9dc85f1ede6e`)
    .then((result) =>
    {
      setCityData(result.data)
      
      console.log(result.data)
      
    }
    )
    setIsLoading(false)
  
    return () => {
      
    }
  }, [city])
  
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <div >
        {isLoading ? <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
      >
        <CircularProgress color="inherit" />
      </Backdrop> :
        <WeatherDrawer cityLabel={cityLabel} changeCity={changeCity} weatherData={cityData}/>
        }
        </div>
    
      </ThemeProvider>

    </div>
  );
}

export default App;
