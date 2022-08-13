// STEP 1 - Include Dependencies

// Include react
import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';

// Include the react-fusioncharts component
import ReactFC from 'react-fusioncharts';

// Include the fusioncharts library
import FusionCharts from 'fusioncharts';

//Import the Widgets
import Widgets from 'fusioncharts/fusioncharts.widgets';

// Include the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';


// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Widgets, FusionTheme);

//time on x and temp on y

// STEP 3 - Creating the DOM element to pass the react-fusioncharts component
export default function LineChart({chartData, fullDate}){
    const [dailyTemperature, setDailyTemperature] = useState([]);

    const date = new Date();
    const month = fullDate.toLocaleString();

const suffix = () =>{
  return(
    <>
    <h5>&#176; F</h5>
    </>
  )
}
  const chartConfigs = {
      type: 'line',// The chart type
      width: '100%', // Width of the chart
      height: '600', // Height of the chart
      dataFormat: 'json', // Data type
      dataSource: {
        chart: {
            caption: "Daily Temperature Over Time",
            yaxisname: "Temperature(F)",
            subcaption: month,
            numbersuffix:  "\u00b0 F",
            rotatelabels: "1",
            setadaptiveymin: "",
            theme: "fusion"
          },
          data:chartData
   
      }
  }

  useEffect(() => {
    

    return () => {
      
    }
  }, [])
  
  
     return (
      <>
      <div   style={{ position:'relative'}}>
{chartData.length === 0 ? <div>No DATA. Check Tomorrow's Forecast!</div>:
<div style={{display:'flex', justifyContent:'center'}}>
     <ReactFC

        {...chartConfigs}/>
  </div>
              }
    </div>

        </>
        
        
     );
}
