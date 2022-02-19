import { useState } from "react";


const ExpenseForm = (props) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const resetForm = () => {
    setTitle('');
    setAmount('');
    setDate('');
  };
  const addExpenseHandler = (event) => {
    event.preventDefault();
    if (!title || !amount || !date) {
      return;
    }
    const payload = {
      title,
      amount,
      date: new Date(date),
    };
    props.onFormSubmit(payload);
    resetForm();
  };
  const onTitleChangeHandler = (event) => {
    setTitle(event.target.value)
  };
  const onAmountChangeHandler = (event) => {
    setAmount(event.target.value)
  };
  const onDateChangeHandler = (event) => {
    setDate(event.target.value)
  };
  const hideFormHandler = () => {
    props.onHideForm();
  }

  return (
    <form className="w-full h-full" onSubmit={addExpenseHandler}>
      <div className="flex flex-col mb-4">
        <label className="mb-1 text-white text-lg font-semibold">Title</label>
        <input className="rounded appearance-none shadow p-2" type="text" value={title} onChange={onTitleChangeHandler}/>
      </div>
      <div className="flex flex-col mb-4">
        <label className="mb-1 text-white text-lg font-semibold">Amount</label>
        <input className="rounded appearance-none shadow p-2" type="number" min="0.01" step="0.01" value={amount} onChange={onAmountChangeHandler}/>
      </div>
      <div className="flex flex-col mb-8">
        <label className="mb-1 text-white text-lg font-semibold">Date</label>
        <input className="rounded appearance-none shadow p-2" type="date" min="2020-01-01" max="2022-02-14" value={date} onChange={onDateChangeHandler}/>
      </div>
      <button className="w-full p-2 mb-2 rounded-xl text-white text-xl font-bold bg-indigo-800" onClick={hideFormHandler}>Cancel</button>
      <button className="w-full p-2 rounded-xl text-white text-xl font-bold bg-indigo-800" type="submit">Add expense</button>
    </form>
  );
}


export default ExpenseForm;
