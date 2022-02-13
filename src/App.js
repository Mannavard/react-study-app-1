import Expenses from "./components/Expenses";
import { EXPENSES } from "./constants/expenses.const";


const App = () => {
  return (
    <div className="bg-gray-600 w-screen h-screen">
      <h1 className="w-full mb-4 text-white text-5xl text-center font-bold">Application</h1>
      <Expenses data={EXPENSES}/>
    </div>
  );
}


export default App;
