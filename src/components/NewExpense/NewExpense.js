import Card from "../Wrappers/Card";
import ExpenseForm from "./ExpenseForm";


const NewExpense = (props) => {
  const saveNewExpense = (expenseFormItem) => {
    const nextExpenseId = `e${props.expensesLength + 1}`;
    console.log(props.expensesLength);
    const expenseItem = {
      ...expenseFormItem,
      id: nextExpenseId,
    }
    props.onAddNewExpense(expenseItem);
  }

  return (
    <Card className="w-10/12 mx-auto bg-indigo-500">
      <ExpenseForm onFormSubmit={saveNewExpense}/>
    </Card>
  );
}


export default NewExpense;
