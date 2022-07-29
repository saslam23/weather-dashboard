import React, {useEffect, useState} from "react";


import './App.css';
import WeatherDrawer from './views/weather_drawer/WeatherDrawer';
import { useTheme, createTheme, ThemeProvider } from '@mui/material/styles';
import axios from "axios";
import Dashboard from "./views/main_dashboard/Dashboard";

function App() {
  const [cityData, setCityData] = useState([]);

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
  useEffect(() => {
  
    axios.get(`https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=ef35eb3af57aad7072ef9dc85f1ede6e`)
    .then((result) =>
    {
      setCityData(result.data)
      
      console.log(result.data)
      
    }
    )
  
    return () => {
      
    }
  }, [cityId])
  
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <div >
        <WeatherDrawer weatherData={cityData}/>

        </div>
    
      </ThemeProvider>

    </div>
  );
}

export default App;
