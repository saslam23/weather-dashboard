import React from 'react'
import DayForecastCard from '../../components/DayForecastCard';
import Card from '@mui/material/Card';
import './dashboard.css';
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Gauge from '../../components/Gauge';
import Column2D from "fusioncharts/fusioncharts.charts";
import ReactSpeedometer from "react-d3-speedometer"
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import Linear from '../../components/Linear';

import ValueCard from '../../components/ValueCard';
import Donut from '../../components/Donut';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';


export default function Dashboard({weatherData}) {
  ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);
  var weatherList = weatherData.list && weatherData.list;
 
  const uvIdx= 5;
  const weatherComponent = [
    {
      component:<Gauge/>
    },
     {
    component: <Donut value={weatherData.list && weatherData.list[0].wind.speed} />
  }, 
  {
    component:<Linear humidity={weatherData.list && weatherData.list[0].main.humidity}/>
  },
  {
    component:<ValueCard title={"Cloudiness"} icon={<FilterDramaIcon  fontSize="large"/>} value={weatherData.list && weatherData.list[0].clouds.all + '%'}/>,

  },
  {
    component:<ValueCard title={"Visibility"} icon={<RemoveRedEyeIcon  fontSize="large"/>} value={weatherData.list && weatherData.list[0].visibility + ' ' + 'metres'}/>,

  },
  {
    component:<Linear humidity={weatherData.list && weatherData.list[0].main.humidity}/>
  }
]

  return (
    <>
        <div  style={{display:'flex', flexWrap:'wrap', justifyContent:'space-between'}} >
      {
   
       weatherData.list && weatherList.map((dayForecast) =>
        <>
        <DayForecastCard dayForecast={dayForecast}/>
        </>
        )
      }
    </div>

   
    <Card style={{display:'flex', flexWrap:'wrap', justifyContent:'space-between'}}>
    {weatherComponent.map((cmp) =>
    <>
    <Card sx={{minHeight:250, height:310, minWidth:400, width:400, margin:'10px 10px', backgroundColor:'#fdfdfd', flex:'0 0 0 33%'}}>
      {cmp.component}

      </Card>
    </>
    )}
        </Card>


    </>

  )
}
