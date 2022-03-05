import react, { useState } from 'react';
import Chart from '../Chart/Chart';

const ExpenseChart = (props) =>
{
    let ChartDataPoints = 
    [
        { label: 'Jan', value: 0},
        { label: 'Feb', value: 0},
        { label: 'Mar', value: 0},
        { label: 'Apr', value: 0},
        { label: 'May', value: 0},
        { label: 'Jun', value: 0},
        { label: 'Jul', value: 0},
        { label: 'Aug', value: 0},
        { label: 'Sept', value: 0},
        { label: 'Oct', value: 0},
        { label: 'Nov', value: 0},
        { label: 'Dec', value: 0}
    ]
    props.expenses.forEach((ele)=>
    {
        // console.log(ChartDataPoints);
        const currMonth = ele.date.getMonth();
        // console.log(currMonth);
        ChartDataPoints[currMonth].value = ChartDataPoints[currMonth].value + ele.amount;
    });
    return (
        <Chart dataPoints={ChartDataPoints}></Chart>
    )
}

export default ExpenseChart;