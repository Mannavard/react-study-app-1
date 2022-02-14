import Expenses from "./components/Expenses/Expenses";
import { EXPENSES } from "./constants/expenses.const";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";


const App = () => {
  const [expenses, setExpenses] = useState(EXPENSES);
  const addExpenseItem = (expenseItem) => {
    setExpenses([...expenses, expenseItem]);
  };

  return (
    <div className="flex flex-col grow bg-gray-600 w-screen">
      <h1 className="xl:text-5xl xl:mb-4 w-full mb-2 text-white text-3xl text-center font-bold">Application</h1>
      <div className="mb-4">
        <NewExpense expensesLength={expenses?.length} onAddNewExpense={addExpenseItem}/>
      </div>
      <Expenses data={expenses}/>
    </div>
  );
}


export default App;
