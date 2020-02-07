import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Title from './Title';
import trades from '../data/trades.json'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import Table from './Table.js'
// Generate Sales Data

// export default function Chart() {
//   const theme = useTheme();
//   const options = {
//     title: {
//       text: 'My chart'
//     },
//     series: [{
//       data: trades
//     }]
//   }
//   return (
//     <HighchartsReact
//     highcharts={Highcharts}
//     options={options}
//   />
//   );
// }

export default class Chart extends React.Component{
  constructor(props){
    super(props);
    this.state={
      data:trades
    }
  }
  
  
  render() {
      return (
        <div>
          Hello, React
          <br/> Table
          <Table data={this.state.data}/>
        </div>
        
      );
  }
}