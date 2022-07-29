// STEP 1 - Include Dependencies

// Include react
import React from 'react';
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
export default function Gauge({uvIndex, humidity}){
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
      "value": humidity
    }]
  };
  
  // STEP 3 - Creating the JSON object to store the chart configurations
  const chartConfigs = {
      type: 'angulargauge',// The chart type
      width: '100%', // Width of the chart
      height: '300', // Height of the chart
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
        "showTickMarks": "0",
        "showTickValues": "0",
        "showLimits": "0",
        "majorTMAlpha": "0",
        "minorTMAlpha": "0",
        "pivotFillAlpha": "0",
        "showPivotBorder": "0",
        "gaugeouterradius": "150",
        "gaugeInnerradius": "125",
        //"gaugeouterradius": "160",
        //"gaugeInnerradius": "130",
        "showGaugeBorder": "0",
        "gaugeFillMix": "{light+0}",
        "showBorder": "0",
        "bgColor": "#1D1B41",
        "bgAlpha": "0",
        "canvasBgAlpha": "0",
        "transposeAnimation":"1"

          },
          
      "colorRange": {
        "color": [{
            "minValue": "0",
            "maxValue": "60",
            "code": "#4dabf5"
        },
        {
            "minValue": "0",
            "maxValue": "100",
            "code": "#f0f0f0"
        }
        ]},
          "dials": dials
      }
  }
  
     return (
     <ReactFC

        {...chartConfigs}/>
     );
}
