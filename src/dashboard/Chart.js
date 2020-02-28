import React, {Component} from 'react';
import { useTheme } from '@material-ui/core/styles';
import Title from './Title';
import trades from '../data/trades.json'
// import counts from '../data/counts.json'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
// import axios from 'axios';
// import Table from './Table.js'


// https://reactjs.org/docs/thinking-in-react.html

const tableStyle = {

}

class Chart extends Component {
  constructor(){
  super();
  this.state = {
      data : []
     }
  }

  componentDidMount () {
    //   let data = trades.json()
      let dataset = this.setState({ data: trades })
  }

  render () {
    return (
    <div>
      <table>
        <thead> 
         <th>ID</th>
         <th>Price</th>
         <th>Type</th>
         <th>Time</th>
         <th>Amount</th>
         </thead>
        <tbody>    
        { this.state.data.map( data => <tr key = {data.tid} >
        <td>{data.tid} </td>
        <td>{data.price} </td>
        <td>{data.type} </td>
        <td>{data.date} </td>
        <td>{data.amount} </td>
        </tr> ) }
        </tbody>
      </table>  
    </div>
    )
  }

}
export default Chart;

//With using axois
// class Chart extends Component {
//   constructor(){
//   super();
//   this.state = {
//       data : []
//      }
//   }
//   async componentDidMount () {
//     let res = await axios.get('https://stock-rate-count.herokuapp.com/counts');
//     let data = res.data;
//     data = data.map(el => [el[0]*1000, el[1]]);
//     this.setState({data})
//   }

//   render() {
//   const options = {
//     title: {
//     text: 'My Stock Chart'
//     },
//     series: [{
//       name: 'Stock Count',
//       data: this.state.data,
//       tooltip: {
//         valueDecimals: 2,
//       }
//     }],
//     chart: {
//         type: 'line'
//       },
//     };
//     return (
//       <div>
//         <HighchartsReact
//         highcharts={Highcharts}
//         constructorType={'stockChart'}
//         options={options} />
//       </div>
//     );
//   }}
//   export default Chart;

// With using Table.js method
// export default class Chart extends React.Component{
//   constructor(props){
//     super(props);
//     this.state={
//       data:trades
//     }
//   }
  
  
//   render() {
//       return (
//         <div>
//           Hello, React
//           <br/> Table
//           <Table data={this.state.data}/>
//         </div>
        
//       );
//   }
// }