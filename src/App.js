import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

let DUMMY_EXPENSE = [
{
    id: 'e1',
    title: 'College Fee',
    amount: 250,
    date: new Date(2022, 6, 8)
},
{
    id: 'e2',
    title: 'Trip',
    amount: 50,
    date: new Date(2023, 0, 1)
},
];
const App = () => {
    
    const [expenses, setExpenses]= useState(DUMMY_EXPENSE);

    const addExpenseHandler = (expense) => {
        const updatedExpense = [expense, ...expenses]
        setExpenses(updatedExpense);
    }
    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses item={expenses}></Expenses>
        </div>
    );
}

export default App;