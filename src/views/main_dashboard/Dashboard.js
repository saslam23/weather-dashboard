import React, {useEffect, useState} from 'react'
import DayForecastCard from '../../components/DayForecastCard';
import Card from '@mui/material/Card';
import './dashboard.css';
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Gauge from '../../components/Gauge';
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import Linear from '../../components/Linear';
import ValueCard from '../../components/ValueCard';
import Donut from '../../components/Donut';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import CompressIcon from '@mui/icons-material/Compress';
import LineChart from '../../components/LineChart';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};


function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}



export default function Dashboard({weatherData, dateValue}) {
  ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);
  var currentDay = new Date();
  const days =['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

  const [singleDayData, setSingleDayData] = useState(null);
  const [dailyTemperature, setDailyTemperature] = useState([])
  const [dayOfWeek, setDayOfWeek] = useState(days[currentDay.getDay()] );
  const [fullDate, setFullDate] = useState(dateValue);

  var weatherList = weatherData.list && weatherData.list;
  
  const filteredData = [];

  weatherData.list && weatherList.filter((item) =>{
    var d = new Date(item.dt_txt) 

    var dayName = days[d.getDay()]
    if(dayName === dayOfWeek){
      filteredData.push(item);
    }
    else{
      return [];
    }
  })

const getData = () =>{
  if(filteredData.length === 0) {
    setDailyTemperature([])
  }
  if(filteredData.length > 0){
    setDailyTemperature([]);
  }
  filteredData.forEach((item) =>{
   const date = new Date(item.dt_txt);
   var timeValue;
   var hours = date.getHours();
var minutes = date.getMinutes();

if (hours > 0 && hours <= 12) {
  timeValue= "" + hours;
} else if (hours > 12) {
  timeValue= "" + (hours - 12);
} else if (hours == 0) {
  timeValue= "12";
}
 
timeValue += (minutes < 10) ? ":0" + minutes : ":" + minutes;  // get minutes
timeValue += (hours >= 12) ? " p.m." : " a.m.";  // get AM/P

     setDailyTemperature(prevState => [...prevState, {label:timeValue, value:Math.round((((( item.main.temp-273.15)*1.8) + 32)) * 100 /100)}]) 
   })
  }
 
  /* SUNRISE TIME CONVERSION */
 const sunRiseTime=  new Date(weatherData.city  && weatherData.city.sunrise * 1000);
 const srHours = sunRiseTime.getHours();
 const srMinutes = sunRiseTime.getMinutes();


/* SUNSET TIME CONVERSION */
 const sunSetTime= new Date(weatherData.city && weatherData.city.sunset * 1000);
 const ssHours = sunSetTime.getHours();
 const ssMinutes = sunSetTime.getMinutes();


/* SINGLE DAY OF THE WEEK DATA */
const singleWindSpeed = singleDayData !== null && singleDayData.wind.speed
const singleHumidity = singleDayData !== null && singleDayData.main.humidity;
const singleCloudiness = singleDayData !== null && singleDayData.clouds.all + '%'
const singlePressure = singleDayData !== null && singleDayData.main.pressure + ' hPa'
const singleVisibility = singleDayData !== null && singleDayData.visibility + ' metres'


  const weatherComponent = [
    {
      component:<Gauge title={'Sunrise and Sunset'} value1={srHours + ':' + srMinutes + " a.m."} value2={(ssHours-12) + ':' + ssMinutes +  " p.m."}/>
    },
     {
    component: <Donut value={singleWindSpeed ? singleWindSpeed : weatherData.list && weatherData.list[0].wind.speed} />
  }, 
  {
    component:<Linear value={singleHumidity ? singleHumidity : weatherData.list && weatherData.list[0].main.humidity}/>
  },
  {
    component:<ValueCard title={"Cloudiness"} icon={<FilterDramaIcon  fontSize="large"/>} value={singleCloudiness ? singleCloudiness : weatherData.list && weatherData.list[0].clouds.all + '%'}/>,

  },
  {
    component:<ValueCard title={"Pressure"} icon={<CompressIcon  fontSize="large"/>} value={singlePressure ? singlePressure : weatherData.list && weatherData.list[0].main.pressure + ' hPa'}/>,

  },
  {
    component:<ValueCard title={"Visibility"} icon={<RemoveRedEyeIcon  fontSize="large"/>} value={singleVisibility ? singleVisibility : weatherData.list && weatherData.list[0].visibility + ' ' + 'metres'}/>,

  }
]


const getDayForecastData = (data, dayName, d) =>{
  var month =  d.getMonth();
var day = d.getDate();
var year = d.getFullYear() ;
var dateValue;
dateValue = monthNames[month]  + " " + day + ', ' + year;
  setSingleDayData(data);
  setDayOfWeek(dayName);
  setFullDate(dateValue)
  console.log(data, "DATAAAAA")
}

const theme = useTheme();
const [value, setValue] = React.useState(0);

const handleChange = (event, newValue) => {
  setValue(newValue);
};

const handleChangeIndex = (index) => {
  setValue(index);
};

  useEffect(() => {
    getData();

        return () => {
          
        }
      }, [weatherData, dayOfWeek])
      
  return (
    <>
        <div  style={{display:'flex', flexWrap:'wrap', justifyContent:'space-between'}} >
      {
   
       weatherData.list && weatherList.map((dayForecast) =>{

       var d = new Date(dayForecast.dt_txt) 
       var hours = d.getHours();
       var dayName = days[d.getDay()]
        return(
        <>
        <DayForecastCard hours={hours} dayName={dayName} getDayForecastData={() => getDayForecastData(dayForecast, dayName, d)} dayForecast={dayForecast}/>
        </>
        )
       }
        )
      }
    </div>
    <div style={{textAlign:'center', margin:'5px'}}>
        <Button variant="contained" onClick={() => getDayForecastData(weatherData.list && weatherList[0], days[currentDay.getDay()], currentDay)}>Today</Button>
        </div>
        <br></br>
        <br></br>
    <Typography variant="h3">{dayOfWeek}</Typography>

    {/* Where tabs start */}
    <Box sx={{ bgcolor: 'none', width: '100%' }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Details" {...a11yProps(0)} />
          <Tab label="Temperature" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
        <Card >
    <div
    style={{display:'flex', flexWrap:'wrap', justifyContent:'space-between', whiteSpace:'noWrap'}}
    >
    {weatherComponent.map((cmp) =>
    <>
    <Card sx={{minHeight:250, height:310, minWidth:400, width:400, margin:'10px 10px', backgroundColor:'#fdfdfd', flex:'30%'}}>
      {cmp.component}

      </Card>
    </>
    )}
    </div>
    </Card>
       
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <div>

<Card  sx={{marginBottom:'2rem', marginTop:'1rem'}}>

  
  <LineChart fullDate={fullDate} getData={getData} chartData={dailyTemperature}/>
</Card>
</div>

        </TabPanel>
  
      </SwipeableViews>
    </Box>



{/* Where tabs end */}
    </>

  )
}


//only for today. we are getting all list values where dates are the same. then we would take the time as label and temp as value