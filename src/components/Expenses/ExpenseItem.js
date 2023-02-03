import React, { useState } from "react";
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
function ExpenseItem(props){
    
    // const[newTitle, setNewTitle]= useState("");

    // const[title, setTitle]= useState(props.title);

    // const clickHandler = () => {
    //      setTitle(newTitle);
    // }
    // const changeHandler = (event) => {
    //      setNewTitle(event.target.value);
    // }
      return(
          <div className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h3>{ props.title }</h3>
                <div className="expense-item__price">${ props.amount }</div>
            </div>
            {/* <button onClick={clickHandler}>change title</button>
            <input type="text" value={ newTitle } onChange={changeHandler}/> */ }
          </div>
      );
}

export default ExpenseItem;