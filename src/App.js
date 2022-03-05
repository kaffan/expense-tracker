import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense'

function App() {
  const expenses = (localStorage.getItem('expense')) ? JSON.parse(localStorage.getItem('expense')): [];
  expenses.map((obj)=>
  {
    obj.date = new Date(obj.date);
    return obj;
  });
  let [ExpenseArr, SetExpenseArr] = useState(expenses);
  window.addEventListener("beforeunload",(e)=>
  {
    e.preventDefault();
    localStorage.setItem('expense',JSON.stringify(ExpenseArr));
  });
  function onSaveExpense(obj)
  {
    obj.id = 'e'+ExpenseArr.length+1;
    SetExpenseArr((prevExpense) => 
    {
      return [obj, ...prevExpense]; 
    });
    console.log(ExpenseArr);
  }
  return (
    <div >
      <NewExpense SaveExpense={onSaveExpense}></NewExpense>
      <Expenses expenses={ExpenseArr}></Expenses>
    </div>
  );
}

export default App;
