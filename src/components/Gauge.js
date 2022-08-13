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
import './gauge.css'

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Widgets, FusionTheme);



// STEP 3 - Creating the DOM element to pass the react-fusioncharts component
export default function Gauge({value1, value2, title}){
    //STEP 2 - Defining the dataset for the angular gauge along with the color configuration
const colorRange = {
    "color": [{
      "minValue": "0",
      "maxValue": "20",
      "code": "#FED303"
    }, {
      "minValue": "20",
      "maxValue": "60",
      "code": "#70C4BC"
    }, {
      "minValue": "60",
      "maxValue": "100",
      "code": "#4292B9"
    }]
  };
  
  const dials = {
    "dial": [{
      "value": ''
    }]
  };
  
  // STEP 3 - Creating the JSON object to store the chart configurations
  const chartConfigs = {
      type: 'angulargauge',// The chart type
      width: '100%', // Width of the chart
      height: '255', // Height of the chart
      dataFormat: 'json', // Data type
      dataSource: {
          "chart": {
               "baseFont": "Nunito Sans",
        "setAdaptiveMin": "1",
        "baseFontColor": "#FFFFFF",
        "chartTopMargin": "0",
        "canvasTopMargin": "0",
        "chartBottomMargin": "70",
        "chartLeftMargin": "10",
        "chartRightMargin": "10",
        "showLimits": "0",
        "majorTMAlpha": "0",
      
        "pivotFillAlpha": "0",

        "gaugeouterradius": "150",
        "gaugeInnerradius": "125",
        //"gaugeouterradius": "160",
        //"gaugeInnerradius": "130",
        "showValue":"1",
        "showGaugeBorder": "0",
        "gaugeFillMix": "{light+0}",
        "showBorder": "0",
        "bgColor": "#1D1B41",
        "bgAlpha": "0",
        "canvasBgAlpha": "0",
        "transposeAnimation":"1",
        theme: "fusion",
          },
          
      "colorRange": {
        "color": [{
            "minValue": "0",
            "maxValue": "20",
            "code": "#e0dede"
        },
        {
          "minValue":"20",
          "maxValue":"80",
          "code": "#4dabf5"
        },
        {
            "minValue": "80",
            "maxValue": "100",
            "code": "#e0dede"
        }
        ]}
      }
  }

  useEffect(() => {
  

    return () => {
      
    }
  }, [value1, value2])
  
  
     return (
      <>
      <div   style={{ position:'relative'}}>
      <h3>{title}</h3>
      <h5 className="sunrise" >{value1}</h5>
      <h5 className="sunset" >{value2}</h5>
<div style={{display:'flex', justifyContent:'center'}}>
     <ReactFC

        {...chartConfigs}/>
  </div>

              </div>
        </>
        
        
     );
}
