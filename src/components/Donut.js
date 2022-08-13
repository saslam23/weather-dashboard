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
export default function Donut({value}){
    //STEP 2 - Defining the dataset for the angular gauge along with the color configuration
useEffect(() => {
  

  return () => {
    
  }
}, [value])

  
  // STEP 3 - Creating the JSON object to store the chart configurations
  const chartConfigs = {
      type: 'doughnut2d',// The chart type
      width: '100%', // Width of the chart
      height: '300', // Height of the chart
      dataFormat: 'json', // Data type
      dataSource: {
          "chart": {
            showBorder: "0",
            showShadow: "0",
            use3DLighting: "0",
            showLabels: "0",
            showValues: "0",
            paletteColors: "#58E2C2, #F7E53B",
            bgColor: "#1D1B41",
            bgAlpha: "0",
            canvasBgAlpha: "0",
            doughnutRadius: "75",
            pieRadius: "95",
            // "pieRadius": "100",
            numberPrefix: "",
            plotBorderAlpha: "0",
            toolTipBgcolor: "#484E69",
            toolTipPadding: "7",
            toolTipBorderRadius: "3",
            toolTipBorderAlpha: "30",
            tooltipBorderThickness: "0.7",
            toolTipColor: "#4dabf5",
            baseFont: "Nunito Sans",
            baseFontSize: "14",
            baseFontColor: "#000000",
            showLegend: "0",
            legendShadow: "0",
            legendBorderAlpha: "0",
            drawCustomLegendIcon: "1",
            legendBgAlpha: "0",
            chartTopMargin: "-30",
            canvasTopMargin: "",
            chartBottomMargin: "",
            canvasBottomMargin: "",
            legendNumColumns: "1",
            legendPosition: "RIGHT",
            defaultCenterLabel: "Speed <br><br>" + value + ' ' + 'metres/sec',
            centerLabel: "",
            centerLabelBold: "1",
            centerLabelFontSize: "18",
            enableRotation: "0",
            transposeAnimation: "1",
           

          },
          data: [
            {
            
              value: value,
              color:'#4dabf5'
            },
            {
       
              value: "100%",
              color:'#f0f0f0'
            }
          ]
  
      }
  }
  
     return (
        <>
        <h2>Wind Status</h2>
        <div style={{display:'flex', justifyContent:'center'}}>
     <ReactFC

        {...chartConfigs}/>
        </div>
        </>
     );
}
