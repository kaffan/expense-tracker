import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) =>
{
    const valueArr = props.dataPoints.map((ele) => ele.value);
    const maxValue = Math.max(...valueArr);
    console.log(maxValue);
    return (
       <div className="chart">
           {props.dataPoints.map((dataPoint)=>
           (
               <ChartBar 
               key={dataPoint.label}
               label={dataPoint.label}
               value={dataPoint.value}
               maxValue={maxValue} 
               />
           ))}
       </div>
    )
}

export default Chart;