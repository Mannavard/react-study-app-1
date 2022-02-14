import Card from "../Wrappers/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";


const Expenses = props => {
  const expenseItems = getExpenseItems(props.data);

  return (
    <div>
      <ExpenseFilter data={props.data}/>
      <Card className="bg-gray-900">
        <h2 className="pb-4 text-2xl text-white font-bold
                     xl:text-4xl xl:pb-8">
          Expense items
        </h2>
        {expenseItems}
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
