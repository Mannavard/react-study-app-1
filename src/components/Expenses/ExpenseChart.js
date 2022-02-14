import Card from "../Wrappers/Card";


const ExpenseChart = props => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const chartItems = getChartItems(months, props);

  return (
    <Card className="bg-indigo-100">
      <div className="flex justify-between xl:px-8">
        {chartItems}
      </div>
    </Card>
  );
}


const getChartItems = (months, data) => {
  return months.map((month, index) => {
    let result;
    if (data.monthsData[month]) {
      const calc = (data.monthsData[month] / data.totalMonthCount * 100);
      result = `h-[${calc}%]`;
    }
    return <div className="flex flex-col items-center" key={index}>
      <div className="relative overflow-hidden h-32 w-2 mb-1 border border-indigo-600 rounded-3xl bg-indigo-200 xl:w-4">
        <div className={"absolute bottom-0 w-full bg-indigo-600 " + result}/>
      </div>
      <div className="text-xs font-semibold xl:font-bold xl:text-lg">{month}</div>
    </div>
  });
}


export default ExpenseChart;
