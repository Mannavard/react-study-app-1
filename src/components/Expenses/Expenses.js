import { useState } from "react";

import Card from "../Wrappers/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";


const Expenses = props => {
  const [expenseItems, setExpenseItems] = useState(props.data);
  const yearSelectHandler = (year) => {
    setExpenseItems(() => {
      if (!year) {
        return props.data;
      } else {
        return props.data.filter(expense => expense.date.getFullYear() === year);
      }
    });
  }

  return (
    <div>
      <ExpenseFilter data={props.data} onYearSelect={yearSelectHandler}/>
      <Card className="bg-gray-900">
        <h2 className="pb-4 text-2xl text-white font-bold
                       xl:text-4xl xl:pb-8">
          Expense items
        </h2>
        {getExpenseItems(expenseItems)}
      </Card>
    </div>
  );
}


const getExpenseItems = expenses => {
  return expenses.map((item) => {
    return <ExpenseItem key={item.id}
                        title={item.title}
                        date={item.date}
                        amount={item.amount}/>
  });
}


export default Expenses;
