import React, { useState } from "react";
import "./NewExpenses.css";
import ExpenseForm from "./ExpenseForm";

const NewExpenses = (props) => {
  const [isformOn, setIsFormOn] = useState(0);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random.toString(),
    };
    props.onAddExpense(expenseData);
    setIsFormOn(0);
  };
  const displayForm = () => {
    setIsFormOn(1);
  };
  const hideForm = () => {
    setIsFormOn(0);
  };

  let formContent = <button onClick={displayForm}>Add Expense</button>;
  if (isformOn) {
    formContent = (
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancel={hideForm}
      />
    );
  }
  return <div className="new-expense">{formContent}</div>;
};

export default NewExpenses;
