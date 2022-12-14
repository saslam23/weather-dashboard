import  React, {useState} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Backdrop from "@mui/material/Backdrop";
import  CircularProgress  from "@mui/material/CircularProgress";
import Typography from '@mui/material/Typography';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import './weather-drawer.css';
import Dashboard from '../main_dashboard/Dashboard';
import DateRangeIcon from '@mui/icons-material/DateRange';
import {cityList} from '../../data/cityList';

const drawerWidth = 350;

export default function WeatherDrawer({weatherData, changeCity, cityLabel, isLoading, city}) {

var time = new Date(weatherData.list && weatherData.list[0].dt_txt)


var realTime = new Date()

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];


var hours = realTime.getHours();
var minutes = realTime.getMinutes();
var month = realTime.getMonth();
var day = realTime.getDate();
var year = realTime.getFullYear();

var timeValue;
var dateValue;
if (hours > 0 && hours <= 12) {
  timeValue= "" + hours;
} else if (hours > 12) {
  timeValue= "" + (hours - 12);
} else if (hours == 0) {
  timeValue= "12";
}
 
timeValue += (minutes < 10) ? ":0" + minutes : ":" + minutes;  // get minutes
timeValue += (hours >= 12) ? " p.m." : " a.m.";  // get AM/P

dateValue = monthNames[month]  + " " + day + ', ' + year;
  return (
    <>
  
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
   
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,

          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor:'#4dabf5',
            overflow:'hidden'
          },
          
        }}
        variant="permanent"
        anchor="left"
        
      >
          {isLoading ? <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={true}
    >
      <CircularProgress color="inherit" />
    </Backdrop> :
  <div>
        <Typography sx={{color:'#f0f0f0', marginTop:'1rem'}} variant="h4">Today's Forecast</Typography>
        <div style={{margin:'10px', marginLeft:'25px'}}>
       <Autocomplete
       onChange={(e, value) =>{ 
        changeCity(value)
     
      }}
      value={cityLabel}
  disablePortal
  id="combo-box-demo"
  options={cityList}
  sx={{ width: 300 }}
  renderInput={(params) => <TextField {...params} label="Select City" />}
/>
       </div>
        <img style={{width:'405px', marginTop:'5rem'}} src="./assets/cloudy.svg" alt="weather_image"/>
        <div style={{marginLeft:'15px'}}>
        <div>
              <div style={{display:'flex'}}>
              <Typography sx={{marginTop:'2rem', color:'#f0f0f0'}} variant="h1">
                {weatherData.list && Math.round((((( weatherData.list[0].main.temp-273.15)*1.8) + 32)) * 100 /100)} 

                </Typography>
                <Typography sx={{color:'#f9f9f9'}} variant="h2">
              &#176;F
              </Typography>
              </div>
                 
              <Typography variant="h6" style={{color:'#f0f0f0', textAlign:'start', marginLeft:'10px'}}>
                Feels like {weatherData.list && Math.round((((( weatherData.list[0].main.feels_like-273.15)*1.8) + 32)) * 100 /100) } &#176;F
              
              </Typography>
          
            <br></br>
        </div>
        <div style={{display:'flex', alignItems:'center'}}>
        <img src={`http://openweathermap.org/img/wn/${weatherData.list && weatherData.list[0].weather[0].icon}@2x.png`} style={{width:'50px', marginRight:'10px'}} alt="cloud_logo"/>
        <Typography style={{color:'#f0f0f0'}} variant="h6">{weatherData.list && weatherData.list[0].weather[0].description}</Typography>
        </div>
        <br></br>
       <div style={{textAlign:'start'}}>
        <div style={{display:'flex', alignItems:'center',marginLeft:'10px'}}>

        <DateRangeIcon style={{marginRight:'10px', color:"#f0f0f0"}}/> <Typography style={{color:'#f0f0f0'}} variant="h6">{dateValue} {timeValue}</Typography>
        </div>
        <br></br>
        <Typography style={{color:'#f0f0f0', marginLeft:'10px'}} variant="h6">{weatherData.city && weatherData.city.name}</Typography>
       </div>

       </div>
       </div>
}
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
      <Dashboard city={city} dateValue={dateValue}  weatherData={weatherData}/>
      </Box>
    </Box>
    </>
  );
}
