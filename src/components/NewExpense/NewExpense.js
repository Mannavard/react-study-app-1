import Card from "../Wrappers/Card";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";


const NewExpense = (props) => {
  const [showExpenseForm, setShowExpenseForm] = useState(false);

  const saveNewExpense = (expenseFormItem) => {
    const nextExpenseId = `e${props.expensesLength + 1}`;
    const expenseItem = {
      id: nextExpenseId,
      ...expenseFormItem,
    }
    props.onAddNewExpense(expenseItem);
    setShowExpenseForm(false);
  }

  const showExpenseFormHandler = () => {
    setShowExpenseForm(true);
  }

  const hideExpenseFormHandler = () => {
    setShowExpenseForm(false)
  }

  return (
    <Card className="bg-indigo-500">
      {showExpenseForm ?
        <ExpenseForm onFormSubmit={saveNewExpense} onHideForm={hideExpenseFormHandler}/> :
        <button className="w-full p-2 rounded-xl text-white text-xl font-bold bg-indigo-800" onClick={showExpenseFormHandler}>
          Add new expense
        </button>
      }
    </Card>
  )
}


export default NewExpense;
