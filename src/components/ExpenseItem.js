import ExpenseDate from "./ExpenseDate";


const ExpenseItem = props => {
  return (
    <div className="flex items-center w-full mb-4 p-4 rounded-3xl bg-gray-500 shadow-lg cursor-pointer">
      <div className="w-2/12 mr-8">
        <ExpenseDate date={props.date}/>
      </div>
      <div className="w-9/12 mr-16 text-white text-3xl font-bold">{props.title}</div>
      <div className="w-2/12 px-8 py-4 border-2 border-white rounded-xl text-center text-white text-3xl font-bold bg-indigo-800">
        ${props.amount}
      </div>
    </div>
  );
}


export default ExpenseItem;
