import Card from "../Wrappers/Card";
import ExpenseForm from "./ExpenseForm";


const NewExpense = (props) => {
  const saveNewExpense = (expenseFormItem) => {
    const nextExpenseId = `e${props.expensesLength + 1}`;
    const expenseItem = {
      ...expenseFormItem,
      id: nextExpenseId,
    }
    props.onAddNewExpense(expenseItem);
  }

  return (
    <Card className="bg-indigo-500">
      <ExpenseForm onFormSubmit={saveNewExpense}/>
    </Card>
  );
}


export default NewExpense;
