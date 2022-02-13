import ExpenseItem from "./ExpenseItem";


const Expenses = props => {
  const expenseItems = getExpenseItems(props.data);

  return (
    <div className="w-10/12 mx-auto p-4 rounded-3xl bg-gray-900">
      <h2 className="pb-8 text-4xl text-white font-bold">Expense items</h2>
      {expenseItems}
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
