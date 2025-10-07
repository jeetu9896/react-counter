import { useCallback, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleCounter = useCallback((val) => {
    setCount((prev) => prev + val);
  }, []);

  const handleReset = useCallback(() => setCount(0), []);

  return (
    <div>
      <h1 className="text-3xl font-bold">
        Count: <span>{count}</span>
      </h1>
      <div className="flex justify-between m-8">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => handleCounter(1)}
        >
          +
        </button>
        <button
          className={`px-4 py-2 rounded text-white ${
            count <= 0 ? "bg-gray-400 cursor-not-allowed" : "bg-red-500"
          }`}
          onClick={() => handleCounter(-1)}
          disabled={count <= 0}
        >
          -
        </button>
        <button
          className={`px-4 py-2 rounded text-white ${
            count <= 0 ? "bg-gray-400 cursor-not-allowed" : "bg-orange-500"
          }`}
          onClick={handleReset}
          disabled={count <= 0}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
