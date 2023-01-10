import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filterByYear, setFilterByYear] = useState("2020");

  const changeFilterYearHandler = (enteredFilterYear) => {
    setFilterByYear(enteredFilterYear);
    // console.log("from Expense.js");
    // console.log(filterByYear, enteredFilterYear);
  };

  const expenses = props.expenses;
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterByYear}
        onChangeFilterYear={changeFilterYearHandler}
      />
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </Card>
  );
};

export default Expenses;
