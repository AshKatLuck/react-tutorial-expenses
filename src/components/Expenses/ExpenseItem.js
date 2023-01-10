import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React from "react";

const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.title);
  // //console.log("React is evaluating the ExpenseItem Component");
  // const clickHandler = () => {
  //   setTitle("Updated!");
  //   console.log(title);
  // };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>ClickMe</button> */}
    </Card>
  );
};

export default ExpenseItem;
