import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(props)
{
    // useState is React hook which is used to dynamically change the values on user interfaces.
    // it should be used directly inside the functional component also not inside any 
    // nested function.
    // it returns array of 2 elements. first element represents that variable which can be changed dynamically/
    // Second element represents function which is used to update the variable ofn UI dynamically.

    return (
      <Card className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description">
          <h2 className="text-3xl font-bold underline">{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    );
}

export default ExpenseItem;