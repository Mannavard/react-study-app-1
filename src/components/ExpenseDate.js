const ExpenseDate = props => {
  const day = props.date.toLocaleString('en-US', {day: '2-digit'});
  const month = props.date.toLocaleString('en-US', {month: 'long'});
  const year = props.date.getFullYear();

  return (
    <div className="flex flex-col items-center p-4 border-2 border-white rounded-3xl bg-gray-900">
      <div className="text-white text-xl font-bold">{month}</div>
      <div className="text-white text-lg mb-1 font-semibold">{year}</div>
      <div className="text-white text-4xl font-bold">{day}</div>
    </div>
  );
}


export default ExpenseDate;
