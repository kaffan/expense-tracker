import React, { useState } from 'react';
import FormElement from './FormElement';
import './ExpenseForm.css';

function ExpenseForm(props)
{
    const [title, setTitleChange] = useState('');
    const [amnt, setAmntChange] = useState('');
    const [date, setDate] = useState('');
    let [swit, setSwitch] = useState(0);
    // using only one state for all 3 variables
    // const [formVar, setFormChange] = useState(
    //   {
    //     title: '',
    //     amnt: '',
    //     date: ''
    //   }
    // );
    // the state change functions like 'setFormChange' do not immediately change the value of the 
    // associated state variable, rather react schedules the state variables for update
    // so when we have multiple states and those states depend on previous states 
    // so if we change or update the state variable like below then it may happen that
    // previous state's value is still not updated and current state value gets updated
    // that will make our app jumbled up.
    // so we call an arrow function inside the state change function

    // const titleChangeHandler = (event) =>
    // {
    //     //formVar.title = event.target.value;
    //     setFormChange((prevState)=>
    //     {
    //       return {
    //         ...formVar, title : event.target.value
    //       }
    //     });
    //     console.log(formVar);
    // }
    // const amntChangeHandler = (event) =>
    // {
    //   setFormChange((prevState)=>
    //     {
    //       return {
    //         ...formVar, amnt : event.target.value
    //       }
    //     });
    //     console.log(formVar);
    // }
    // const dateChangeHandler = (event) =>
    // {
    //   setFormChange((prevState)=>
    //   {
    //     return {
    //       ...formVar, date : event.target.value
    //     }
    //   });
    //   console.log(formVar);
    // }
    const titleChangeHandler = (event) =>
    {
        setTitleChange(event.target.value);
        console.log(event.target.value);
    }
    const amntChangeHandler = (event) =>
    {
      setAmntChange(event.target.value);
      console.log(event.target.value);
    }
    const dateChangeHandler = (event) =>
    {
        setDate(event.target.value);
        console.log(event.target.value);
    }
    const whenExpenseSaved = (obj) =>
    {
      props.addNewExpense(obj);
    }
    const SubmitHandler = (e) =>
    {
      e.preventDefault();
      const obj = {
        title: title,
        amount: +amnt,
        date: new Date(date)
      }
      // console.log(obj.date);
      whenExpenseSaved(obj);
      setTitleChange('');
      setAmntChange('');
      setDate('');
    }
    const CancelButtonHandler = () => setSwitch(0);
    const clickHandler = () => setSwitch(1);

    return (
      <div>
        {(swit) ? (
          <FormElement
            SubmitF={SubmitHandler}
            titleH={titleChangeHandler}
            amntC={amntChangeHandler}
            dateC={dateChangeHandler}
            Cancel={CancelButtonHandler}
            title={title}
            amnt={amnt}
            date={date}
          />
        ) : (
          <div className="new-expense__actions">
            <button onClick={clickHandler}>
              Add New Expense
            </button>
          </div>
        )}
      </div>
    );
}

export default ExpenseForm;