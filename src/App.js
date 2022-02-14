import { useState } from "react";

import Container from "./components/Wrappers/Container";
import Expenses from "./components/Expenses/Expenses";
import { EXPENSES } from "./constants/expenses.const";
import NewExpense from "./components/NewExpense/NewExpense";


const App = () => {
  const [expenses, setExpenses] = useState(EXPENSES);
  const addExpenseItem = (expenseItem) => {
    setExpenses((previousExpenses) => {
      return [expenseItem, ...previousExpenses]
    });
  };

  return (
    <div className="flex flex-col grow bg-gray-600 w-screen">
      <Container>
        <h1 className="xl:text-5xl xl:mb-4 w-full mb-2 text-white text-3xl text-center font-bold">Application</h1>
        <div className="mb-4">
          <NewExpense expensesLength={expenses?.length} onAddNewExpense={addExpenseItem}/>
        </div>
        <Expenses data={expenses}/>
      </Container>
    </div>
  );
}


export default App;
