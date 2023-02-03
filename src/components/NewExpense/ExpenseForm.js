import React, {useState} from "react";

import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    };

    const submithandler = (event) => {
      event.preventDefault();

      const expenseData= {
        title:enteredTitle,
        amount:enteredAmount,
        date: new Date(enteredDate)
      }

      props.onsaveExpenseData(expenseData);

      console.log(expenseData);
      setEnteredTitle('');
      setEnteredAmount('');
      setEnteredDate('');
    };
    return(

        <form onSubmit={submithandler}>
        <div className="new-expense__controls">
           <div className="new-expense__control">
               <label>Title</label>
               <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
           </div>
           <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" value={enteredAmount} min="1" step="0.1" onChange={amountChangeHandler}/>
           </div>
           <div className="new-expense__control">
                <label>Date</label>
                <input type="date" value={enteredDate} onChange={dateChangeHandler}/>
           </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
    );
}

export default ExpenseForm;