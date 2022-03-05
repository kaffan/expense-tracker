import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

function NewExpense(props)
{
    const onSaveExpense = (obj) =>
    {
        props.SaveExpense(obj);
    }
    return (
        <div className="new-expense">
            <ExpenseForm addNewExpense = {onSaveExpense}></ExpenseForm>
        </div>
    );
}

export default NewExpense;