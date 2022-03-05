import react, { useState } from 'react';
import './ExpenseForm.css';

const FormElement = (props) =>
{
    return (<form onSubmit={props.SubmitF}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label >Title</label>
              <input type="text" value={props.title} onChange={props.titleH}/>
            </div>
            <div className="new-expense__control">
              <label >Amount</label>
              <input type="Number" value={props.amnt} min="0.01" step="0.01" onChange={props.amntC}/>
            </div>
            <div className="new-expense__control">
              <label >Date</label>
              <input type="date" value={props.date} min="2019-01-01" max="2022-12-31" onChange={props.dateC}/>
            </div>
          </div>
          <div className="new-expense__actions">
              <button onClick={props.Cancel}>Cancel</button>
              <button type="submit">Add Expense</button>
          </div>
    </form>)
}

export default FormElement;