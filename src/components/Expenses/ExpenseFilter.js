import ExpenseChart from "./ExpenseChart";
import { useState } from "react";


const ExpenseFilter = props => {
  const [selectedYear, setSelectedYear] = useState('');
  const [expenseMonthsCount, setExpenseMonthsCount] = useState('');
  const [expensesByYearTotalCount, setExpensesByYearTotalCount] = useState('');
  const expenseYears = props.data.map(item => item.date.getFullYear());
  const yearSelectOptions = getYearSelectOptions(expenseYears);

  const selectYearHandler = (event) => {
    const selectedYear = +event.target.value;
    const expensesByYear = getExpensesByYear(props.data, selectedYear);
    setSelectedYear(selectedYear);
    setExpensesByYearTotalCount(expensesByYear?.length);
    setExpenseMonthsCount(getDataForChartByYear(expensesByYear));
  }

  return (
    <div className="my-8">
      <div className="flex justify-between mb-8">
        <div className="pl-2 text-white text-xl font-bold xl:text-3xl">Filter by year</div>
        <select className="xl:w-2/12 p-2 rounded" value={selectedYear} onChange={selectYearHandler}>
          {yearSelectOptions}
        </select>
      </div>
      <ExpenseChart monthsData={expenseMonthsCount} totalMonthCount={expensesByYearTotalCount}/>
    </div>
  );
}


const getYearSelectOptions = (years) => {
  const placeHolderOption = <option key="" value="" disabled>Select year:</option>;
  const sortedUniqueYears = years.filter((item, index, array) => array.indexOf(item) === index).sort();
  const createOptions = () => {
    return sortedUniqueYears.map((year, index) => {
      return (
        <option key={index} value={year}>{year}</option>
      )
    })
  }
  return [placeHolderOption, ...createOptions().reverse()];
}


const getExpensesByYear = (expenses, year) => {
  return expenses.filter((expense) => {
    return (expense.date.getFullYear() === year);
  });
}



const getDataForChartByYear = (expensesByYear) => {
  const months = {};
  expensesByYear.forEach(expense => {
    const monthKey = expense.date.toLocaleString('en-US', {month: 'short'});
    months[monthKey] = (months[monthKey] || 0) + 1;
  });

  return months;
}

export default ExpenseFilter;
