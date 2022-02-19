import Container from "./components/Wrappers/Container";
import ExpensesPage from "./components/Expenses/ExpensesPage";


const App = () => {


  return (
    <div className="flex flex-col grow bg-gray-600 w-screen">
      <Container>
        <h1 className="xl:text-5xl xl:mb-4 w-full mb-2 text-white text-3xl text-center font-bold">Application</h1>
        <ExpensesPage/>
      </Container>
    </div>
  );
}


export default App;
