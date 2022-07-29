import React from 'react'

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default function DayForecastCard({dayForecast}) {

    var days =['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    var d = new Date(dayForecast.dt_txt) 
    var hours = d.getHours();
    var dayName = days[d.getDay()]

  return (
    <>
    {hours === 0 &&
      <Card sx={{ minWidth: 250,minHeight:275, margin:'8px'}}>
      <CardContent>
        <Typography variant="h6"  gutterBottom>
        {dayName}
        </Typography>
        <Typography variant="h5" component="div">
        <Typography variant="h6">
                { Math.round((((( dayForecast.main.temp-273.15)*1.8) + 32)) * 100 /100)}&#176; &nbsp;
                { Math.round((((( dayForecast.main.temp_min-273.15)*1.8) + 32)) * 100 /100)}&#176;
                </Typography>
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        <img src={`http://openweathermap.org/img/wn/${dayForecast.weather[0].icon}@2x.png`} style={{width:'75px', marginRight:'10px'}} alt="cloud_logo"/>
        </Typography>
        <Typography variant="body2">
          {dayForecast.weather[0].description.charAt(0).toUpperCase() + dayForecast.weather[0].description.slice(1) }
        </Typography>
      </CardContent>
   
    </Card>
    }
  
    </>
    
  )
}


/* '

for(let i=0; i < list.length; i++){
    if(weatherData.list.dt_txt[i] === weatherData.list.dt_txt[i-1]){
        weatherData.list.splice(weatherData.list.dt_txt[i]);
        return;
    }
}
*/