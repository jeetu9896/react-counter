import "./App.css";
import Counter from "./components/Counter";
import CounterNew from "./components/CounterNew";

function App() {
  return (
    <>
      <h1> React counter app</h1>
      <div className="flex justify-center mt-20 w-full align-center">
        <Counter />
        <CounterNew />
      </div>
    </>
  );
}

export default App;
