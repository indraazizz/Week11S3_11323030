import React, { useState } from 'react';

const ExampleComponent = () => {
  // Deklarasi state menggunakan useState hook
  const [count, setCount] = useState(0);

  // Fungsi untuk menambah nilai count
  const incrementCount = () => {
    setCount(count + 1);
  };

  // Fungsi untuk mengurangi nilai count
  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
    </div>
  );
};

export default ExampleComponent;
