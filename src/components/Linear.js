// STEP 1 - Include Dependencies

// Include react
import React, {useEffect} from 'react';
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



// STEP 3 - Creating the DOM element to pass the react-fusioncharts component
export default function Linear({value}){

 
  
  // STEP 3 - Creating the JSON object to store the chart configurations
  const chartConfigs = {
      type: 'hlineargauge',// The chart type
      width: '100%', // Width of the chart
      height: '110',
      backgroundColor: "#f9f9f9", // Height of the chart
      dataFormat: 'json', // Data type
      dataSource: {
        chart: {
          
            caption: "",
            subcaption: "",
            numbersuffix: "",
            gaugefillmix: "{dark-20},{light+70},{dark-10}",
            theme: "fusion",
            "showTickMarks": "0",
          },
          colorrange: {
        
        "gradient": "1",
            color: [
              {
                minvalue: "0",
                maxvalue: "100",
                label: "",
                code: "#4dabf5"
              },
              
              {
                minvalue: value,
                maxvalue: "100",
                label: "",
                code: "#e0dede"
              }
            ]
          },
          pointers: {
            pointer: [
              {
                value: value
              }
            ]
          }
      }
  }

  useEffect(() => {
  

    return () => {
      
    }
  }, [value])
  
  
     return (
        <>
         <h2>Humidity</h2>
    <div style={{marginTop:'4rem'}}>
     <ReactFC
        {...chartConfigs}/>
        </div>          
        </>
  
     );
}
