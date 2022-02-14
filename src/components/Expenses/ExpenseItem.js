import Card from "../Wrappers/Card";
import ExpenseDate from "./ExpenseDate";


const ExpenseItem = props => {
  return (
    <Card className="flex items-center flex-wrap w-full mb-4 last:mb-0 bg-gray-500 shadow-lg cursor-pointer">
      <div className="xl:w-2/12 xl:flex-grow-0 xl:pr-8 xl:mb-0 mb-4 w-full flex-grow-1">
        <ExpenseDate date={props.date}/>
      </div>
      <div className="xl:w-8/12 xl:flex-grow-0 xl:text-left xl:mb-0 mb-4 w-full text-center flex-grow-1 text-white text-3xl font-bold">{props.title}</div>
      <div className="xl:w-2/12 xl:flex-grow-0 w-full flex-grow-1 px-8 py-4 border-2 border-white rounded-xl text-center text-white text-3xl font-bold bg-indigo-800">
        ${props.amount}
      </div>
    </Card>
  );
}


export default ExpenseItem;
