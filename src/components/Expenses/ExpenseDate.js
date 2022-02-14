import Card from "../Wrappers/Card";


const ExpenseDate = props => {
  const day = props.date.toLocaleString('en-US', {day: '2-digit'});
  const month = props.date.toLocaleString('en-US', {month: 'long'});
  const year = props.date.getFullYear();

  return (
    <Card className="flex flex-col items-center border-2 border-white bg-gray-900">
      <div className="text-white text-xl font-bold">{month}</div>
      <div className="text-white text-lg mb-1 font-semibold">{year}</div>
      <div className="text-white text-4xl font-bold">{day}</div>
    </Card>
  );
}


export default ExpenseDate;
