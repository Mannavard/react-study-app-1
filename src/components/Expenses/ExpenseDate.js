import Card from "../Wrappers/Card";


const ExpenseDate = props => {
  const day = props.date.toLocaleString('en-US', {day: '2-digit'});
  const month = props.date.toLocaleString('en-US', {month: 'long'});
  const year = props.date.getFullYear();

  return (
    <Card className="flex flex-col items-center border-2 border-white bg-gray-900">
      <div className="text-white text-base font-bold
                      xl:text-xl">
        {month}
      </div>

      <div className="text-white text-sm font-semibold
                      xl:mb-1 xl:text-lg">
        {year}
      </div>

      <div className="text-white text-2xl font-bold
                      xl:text-4xl">
        {day}
      </div>
    </Card>
  );
}


export default ExpenseDate;
