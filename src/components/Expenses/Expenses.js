import "./Expenses.css";
import Card from "../UI/Card";
import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filterByYear, setFilterByYear] = useState("2020");

  const changeFilterYearHandler = (enteredFilterYear) => {
    setFilterByYear(enteredFilterYear);
  };
  const expensesForSelectedYear = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filterByYear
  );

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterByYear}
          onChangeFilterYear={changeFilterYearHandler}
        />

        <ExpensesList expenses={expensesForSelectedYear} />
      </Card>
    </li>
  );
};
export default Expenses;
