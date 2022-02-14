import Card from "../Wrappers/Card";
import ExpenseDate from "./ExpenseDate";
import { useState } from "react";


const ExpenseItem = props => {
  const initBackground = 'bg-indigo-800';
  const [background, setBackground] = useState(initBackground);
  const changeBackgroundHandler = () => {
    setBackground('bg-red-800');
  }
  return (
    <Card className="flex items-center flex-wrap w-full min-w-min mb-2 bg-gray-500 shadow-lg cursor-pointer
                     xl:mb-4
                     last:mb-0">
      <div className="grow w-full mb-1
                      xl:grow-0 xl:w-2/12 xl:pr-8 xl:mb-0">
        <ExpenseDate date={props.date}/>
      </div>

      <div className="grow w-full mb-1 text-center text-white text-xl font-bold
                      xl:grow-0 xl:w-8/12 xl:text-left xl:text-3xl xl:mb-0">
        {props.title}
      </div>

      <div className={"grow w-full px-2 py-1 border-2 border-white rounded-xl text-center text-white text-xl font-bold +" +
                      "xl:grow-0 xl:w-2/12 xl:px-8 xl:py-4 xl:text-3xl " + background}
           onClick={changeBackgroundHandler}>
        ${props.amount}
      </div>
    </Card>
  );
}


export default ExpenseItem;
