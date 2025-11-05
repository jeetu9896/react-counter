import { useReducer } from "react";

const CounterNew = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "inc":
        return { count: state.count + 1 };
      case "dec":
        return { count: state.count - 1 };
      case "reset":
        return { count: 0 };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div className="w-full text-center">
      <h1 className="text-3xl font-bold">
        Count: <span>{state.count}</span>
      </h1>
      <div className="flex justify-around m-8">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => dispatch({ type: "inc" })}
        >
          +
        </button>
        <button
          className={`px-4 py-2 rounded text-white ${
            state.count <= 0 ? "bg-gray-400 cursor-not-allowed" : "bg-red-500"
          }`}
          onClick={() => dispatch({ type: "dec" })}
          disabled={state.count <= 0}
        >
          -
        </button>
        <button
          className={`px-4 py-2 rounded text-white ${
            state.count <= 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-orange-500"
          }`}
          onClick={() => dispatch({ type: "reset" })}
          disabled={state.count <= 0}
        >
          reset
        </button>
      </div>
    </div>
  );
};

export default CounterNew;
