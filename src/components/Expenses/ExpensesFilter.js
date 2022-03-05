import { PreviousMap } from 'postcss';
import React from 'react';
import { useState } from 'react/cjs/react.development';
import './ExpensesFilter.css';

// The value and the changes to the value of the year selected from the 
// dropdown menu is handled by the Expenses.js component 
// so therefore ExpensesFilter.js is a controlled component. 
const ExpensesFilter = (props) => {
  const changeHandler = (e) =>
  {
    props.OnYearChange(e.target.value);
  }
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={changeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
}
export default ExpensesFilter;