import React from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
import ExpenseChart from './ExpenseChart';

function Expenses(props)
{
    let [currYear, setCurrYear] = useState('2019');
    const onDateChange = (year) =>
    {
        setCurrYear(year);
        console.log(currYear);
    }
    // console.log(props.expenses);
    const filteredExpenses = props.expenses.filter((ele)=>
    {
      return ele.date.getFullYear().toString() === currYear;
    });
    // console.log(filteredExpenses);
    return (
      <div>
        <Card className="expenses">
          <ExpensesFilter
            selected={currYear}
            OnYearChange={onDateChange}
          ></ExpensesFilter>
          <ExpenseChart expenses={filteredExpenses}></ExpenseChart>
          {filteredExpenses.length === 0 ? (
            <p className="expenses-list__fallback">No Expenses Found</p>
          ) : (
            filteredExpenses.map((obj) => (
              <ExpenseItem
                key={obj.id}
                //we add 'key' prop to any custom components or html elements in order
                // for react to understand the elements of lists uniquely
                // when we don't add this prop, then what react does is, it add new div element
                // at the end of the list and updates the content inside the element, which is
                // bad for performance and may lead to bugs.
                title={obj.title}
                amount={obj.amount}
                date={obj.date}
              ></ExpenseItem>
            ))
          )}
        </Card>
      </div>
    );
}

export default Expenses;